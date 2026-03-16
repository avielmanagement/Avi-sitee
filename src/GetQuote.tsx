import React, { useState, useEffect } from "react";
import {
Clock3,
ShieldCheck,
BadgeCheck,
Hammer,
Zap,
Trash2,
Shield
} from "lucide-react";

import Navbar from "./Navbar";
import Footer from "./Footer";

const GHL_WEBHOOK =
"https://services.leadconnectorhq.com/hooks/JJ7TEbO5Muclhwck3Cqh/webhook-trigger/7748c1f6-e64b-4598-9c2c-3f7ef8fce246";

type Status = "idle" | "sending" | "success" | "error";

export default function GetQuote(){

const [status,setStatus] = useState<Status>("idle")

const [name,setName] = useState("")
const [phone,setPhone] = useState("")
const [email,setEmail] = useState("")
const [zip,setZip] = useState("")

const [service,setService] = useState("")
const [details,setDetails] = useState("")
const [heard,setHeard] = useState("")

const [consent,setConsent] = useState(false)

const [errors,setErrors] = useState<any>({})

const [utm,setUtm] = useState<any>({})

const [honeypot,setHoneypot] = useState("")

/* Capture UTM params from ads */

useEffect(()=>{

const params = new URLSearchParams(window.location.search)

setUtm({
utm_source:params.get("utm_source") || "",
utm_campaign:params.get("utm_campaign") || "",
utm_medium:params.get("utm_medium") || "",
utm_term:params.get("utm_term") || "",
utm_content:params.get("utm_content") || ""
})

},[])

/* Validation */

const validPhone = /^\(\d{3}\)\s\d{3}-\d{4}$/.test(phone)
const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
const validZip = /^\d{5}$/.test(zip)

/* Phone formatter */

const formatPhone = (value:string)=>{

const numbers = value.replace(/\D/g,"").slice(0,10)

if(numbers.length<=3) return numbers
if(numbers.length<=6)
return `(${numbers.slice(0,3)}) ${numbers.slice(3)}`

return `(${numbers.slice(0,3)}) ${numbers.slice(3,6)}-${numbers.slice(6)}`

}

/* Submit */

const handleSubmit = async(e:React.FormEvent)=>{

e.preventDefault()

if(honeypot) return

let newErrors:any = {}

if(!name) newErrors.name="Enter your full name"
if(!validPhone) newErrors.phone="Enter a valid phone number"
if(!validEmail) newErrors.email="Enter a valid email"
if(!validZip) newErrors.zip="ZIP must be 5 digits"
if(!service) newErrors.service="Select a service"
if(!details) newErrors.details="Describe your project"
if(!heard) newErrors.heard="Tell us how you heard about us"
if(!consent) newErrors.consent="Consent required"

setErrors(newErrors)

if(Object.keys(newErrors).length>0){
setStatus("error")
return
}

setStatus("sending")

try{

const payload = {

name:name.trim(),
phone,
email:email.trim(),

zip_code:zip,
service_requested:service,
project_details:details.trim(),
how_did_you_hear_about_us:heard,

source:"Website Quote Form",

...utm

}

const res = await fetch(GHL_WEBHOOK,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(payload)
})

if(!res.ok) throw new Error()

/* Google Ads Conversion */

if(typeof window!=="undefined" && (window as any).gtag){

(window as any).gtag("event","conversion",{
send_to:"AW-17974479001/RmVccVy4XvCeTmn8_pC"
})

}

/* Additional lead event */

if(typeof window!=="undefined" && (window as any).gtag){

(window as any).gtag("event","generate_lead")

}

setStatus("success")

setName("")
setPhone("")
setEmail("")
setZip("")
setService("")
setDetails("")
setHeard("")
setConsent(false)

}catch{

setStatus("error")

}

}

/* UI */

return(

<div className="bg-black min-h-screen">

<Navbar/>

<section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16">

<div>

<p className="tracking-[5px] text-gray-400 text-sm mb-6">
AVIEL MANAGEMENT INC
</p>

<h1 className="text-6xl font-bold leading-tight">

<span className="text-white">FREE</span>
<br/>
<span className="text-yellow-400">ESTIMATES</span>

</h1>

<p className="text-gray-400 mt-6 max-w-lg">
Tell us about your project and receive a fast estimate,
timeline and next steps from experienced NYC contractors.
</p>

<div className="flex gap-3 mt-8 flex-wrap">

<div className="badge">
<Clock3 size={16}/> Same day replies
</div>

<div className="badge">
<ShieldCheck size={16}/> Licensed & insured
</div>

<div className="badge">
<BadgeCheck size={16}/> Quality craftsmanship
</div>

</div>

<div className="grid grid-cols-2 gap-4 mt-10">

<div className="serviceCard">
<Hammer size={18}/> General Construction
</div>

<div className="serviceCard">
<Zap size={18}/> EV Charger Installation
</div>

<div className="serviceCard">
<Trash2 size={18}/> Junk Removal & Demo
</div>

<div className="serviceCard">
<Shield size={18}/> Roofing
</div>

</div>

</div>

<div className="formCard">

<h2 className="text-white text-xl font-semibold mb-2">
Request Callback
</h2>

<p className="text-gray-400 text-sm mb-6">
Fill this out and we'll contact you shortly.
</p>

<form onSubmit={handleSubmit} className="space-y-4">

{/* honeypot spam trap */}

<input
type="text"
value={honeypot}
onChange={(e)=>setHoneypot(e.target.value)}
className="hidden"
/>

<div className="grid grid-cols-2 gap-3">

<input
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
className="input"
/>

<input
placeholder="Phone"
value={phone}
onChange={(e)=>setPhone(formatPhone(e.target.value))}
className="input"
/>

</div>

<div className="grid grid-cols-2 gap-3">

<input
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="input"
/>

<input
placeholder="ZIP Code"
value={zip}
maxLength={5}
onChange={(e)=>setZip(e.target.value)}
className="input"
/>

</div>

<select
value={service}
onChange={(e)=>setService(e.target.value)}
className="input"
>
<option value="">Service Requested</option>
<option>General Construction</option>
<option>EV Charger Installation</option>
<option>Junk Removal & Demo</option>
<option>Roofing</option>
</select>

<textarea
placeholder="Project details"
value={details}
onChange={(e)=>setDetails(e.target.value)}
className="input h-28"
/>

<select
value={heard}
onChange={(e)=>setHeard(e.target.value)}
className="input"
>
<option value="">How Did You Hear About Us?</option>
<option>Google</option>
<option>Referral</option>
<option>Instagram</option>
<option>Facebook</option>
</select>

<label className="flex items-start gap-2 text-xs text-gray-400">

<input
type="checkbox"
checked={consent}
onChange={(e)=>setConsent(e.target.checked)}
className="mt-1"
/>

<span>
By checking this box you agree to receive SMS messages from
<strong> Aviel Management Inc</strong>.
</span>

</label>

<button
disabled={status==="sending"}
className="submitButton"
>
{status==="sending" ? "Sending..." : "Get My FREE Estimate"}
</button>

{status==="success" &&
<p className="text-green-400 text-sm">
Your request was sent successfully.
</p>}

{status==="error" &&
<p className="text-red-400 text-sm">
Please fix the highlighted fields.
</p>}

</form>

</div>

</section>

<Footer/>

</div>

)

}
