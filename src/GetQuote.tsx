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
const [submitted,setSubmitted] = useState(false)

const [name,setName] = useState("")
const [phone,setPhone] = useState("")
const [email,setEmail] = useState("")
const [zip,setZip] = useState("")

const [service,setService] = useState("")
const [details,setDetails] = useState("")
const [heard,setHeard] = useState("")

const [consent,setConsent] = useState(false)
const [errors,setErrors] = useState<any>({})
const [spam,setSpam] = useState("")

const [utm,setUtm] = useState<any>({})

useEffect(()=>{

const params = new URLSearchParams(window.location.search)

setUtm({
utm_source:params.get("utm_source") || "",
utm_campaign:params.get("utm_campaign") || "",
utm_medium:params.get("utm_medium") || "",
utm_term:params.get("utm_term") || ""
})

},[])

const validPhone = /^\(\d{3}\)\s\d{3}-\d{4}$/.test(phone)
const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
const validZip = /^\d{5}$/.test(zip)

const formatPhone = (value:string)=>{

const numbers = value.replace(/\D/g,"").slice(0,10)

if(numbers.length<=3) return numbers

if(numbers.length<=6)
return `(${numbers.slice(0,3)}) ${numbers.slice(3)}`

return `(${numbers.slice(0,3)}) ${numbers.slice(3,6)}-${numbers.slice(6)}`

}

const handleSubmit = async(e:React.FormEvent)=>{

e.preventDefault()

if(spam) return

let newErrors:any = {}

if(!name) newErrors.name="Enter your full name"
if(!validPhone) newErrors.phone="Enter valid phone"
if(!validEmail) newErrors.email="Enter valid email"
if(!validZip) newErrors.zip="ZIP must be 5 digits"
if(!service) newErrors.service="Select a service"
if(!details) newErrors.details="Describe your project"
if(!heard) newErrors.heard="Select option"
if(!consent) newErrors.consent="Consent required"

setErrors(newErrors)

if(Object.keys(newErrors).length>0){
setStatus("error")
return
}

setStatus("sending")

try {

  const payload = {
    name,
    phone,
    email,
    zip_code: zip,
    service_requested: service,
    project_details: details,
    how_did_you_hear_about_us: heard,
    source: "Website Quote Form",
    ...utm
  };

  const res = await fetch(GHL_WEBHOOK, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!res.ok) throw new Error("Webhook failed");

  setSubmitted(true);
  setStatus("success");

  window.location.href = "/thank-you";

} catch (err) {

  console.error(err);
  setStatus("error");

}

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

<form onSubmit={handleSubmit} className="space-y-4">

<input
type="text"
value={spam}
onChange={(e)=>setSpam(e.target.value)}
className="hidden"
/>

<div className="grid grid-cols-2 gap-3">

<div>
<input
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
className={`input ${errors.name?"error":submitted?"success":""}`}
/>
{errors.name && <p className="errorText">{errors.name}</p>}
</div>

<div>
<input
placeholder="Phone"
value={phone}
onChange={(e)=>setPhone(formatPhone(e.target.value))}
className={`input ${errors.phone?"error":submitted?"success":""}`}
/>
{errors.phone && <p className="errorText">{errors.phone}</p>}
</div>

</div>

<div className="grid grid-cols-2 gap-3">

<div>
<input
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className={`input ${errors.email?"error":submitted?"success":""}`}
/>
{errors.email && <p className="errorText">{errors.email}</p>}
</div>

<div>
<input
placeholder="ZIP Code"
value={zip}
maxLength={5}
onChange={(e)=>setZip(e.target.value)}
className={`input ${errors.zip?"error":submitted?"success":""}`}
/>
{errors.zip && <p className="errorText">{errors.zip}</p>}
</div>

</div>

<div>
<select
value={service}
onChange={(e)=>setService(e.target.value)}
className={`input ${errors.service?"error":submitted?"success":""}`}
>
<option value="">Service Requested</option>
<option>General Construction</option>
<option>EV Charger Installation</option>
<option>Junk Removal & Demo</option>
<option>Roofing</option>
</select>
{errors.service && <p className="errorText">{errors.service}</p>}
</div>

<div>
<textarea
placeholder="Project details"
value={details}
onChange={(e)=>setDetails(e.target.value)}
className={`input h-28 ${errors.details?"error":submitted?"success":""}`}
/>
{errors.details && <p className="errorText">{errors.details}</p>}
</div>

<div>
<select
value={heard}
onChange={(e)=>setHeard(e.target.value)}
className={`input ${errors.heard?"error":submitted?"success":""}`}
>
<option value="">How Did You Hear About Us?</option>
<option>Google</option>
<option>Referral</option>
<option>Instagram</option>
<option>Facebook</option>
</select>
{errors.heard && <p className="errorText">{errors.heard}</p>}
</div>

<label className="flex items-start gap-2 text-xs text-gray-400">

<input
type="checkbox"
checked={consent}
onChange={(e)=>setConsent(e.target.checked)}
/>

<span>
By checking this box you agree to receive SMS messages from
<strong> Aviel Management Inc</strong>.
</span>

</label>

{errors.consent && <p className="errorText">{errors.consent}</p>}

<button
disabled={status==="sending"}
className="submitButton"
>
{status==="sending" ? "Sending..." : "Get My FREE Estimate"}
</button>

</form>

</div>

</section>

<Footer/>

<style jsx>{`

.input{
width:100%;
padding:14px;
background:#0d0d0d;
border:1px solid #1f1f1f;
border-radius:10px;
color:white;
transition:.2s;
}

.input:focus{
border-color:#facc15;
box-shadow:0 0 15px rgba(250,204,21,.35);
outline:none;
}

.input.error{
border-color:#ef4444;
box-shadow:0 0 10px rgba(239,68,68,.5);
}

.input.success{
border-color:#22c55e;
box-shadow:0 0 12px rgba(34,197,94,.5);
}

.errorText{
color:#ef4444;
font-size:12px;
margin-top:4px;
}

.submitButton{
width:100%;
padding:16px;
background:#facc15;
border-radius:10px;
font-weight:700;
color:black;
transition:.2s;
}

.submitButton:hover{
transform:translateY(-2px);
box-shadow:0 10px 30px rgba(250,204,21,.35);
}

.formCard{
background:#050505;
padding:36px;
border-radius:16px;
border:1px solid #1a1a1a;
box-shadow:0 0 40px rgba(255,215,0,.06);
}

.badge{
display:flex;
gap:6px;
align-items:center;
background:#0e0e0e;
padding:8px 12px;
border-radius:8px;
border:1px solid #1f1f1f;
font-size:13px;
}

.serviceCard{
display:flex;
align-items:center;
gap:8px;
border:1px solid #1f1f1f;
padding:12px;
border-radius:10px;
background:#0b0b0b;
transition:.2s;
}

.serviceCard:hover{
border-color:#facc15;
transform:translateY(-3px);
box-shadow:0 10px 25px rgba(250,204,21,.15);
}

`}</style>

</div>

);

}
