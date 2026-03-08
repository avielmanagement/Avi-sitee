import React, { useState } from "react";
import {
Clock3,
ShieldCheck,
BadgeCheck,
Hammer,
Zap,
Trash2,
Shield,
CheckCircle,
AlertCircle
} from "lucide-react";

import Navbar from "./Navbar";
import Footer from "./Footer";

const WEBHOOK =
"https://services.leadconnectorhq.com/hooks/JJ7TEbO5Muclhwck3Cqh/webhook-trigger/7748c1f6-e64b-4598-9c2c-3f7ef8fce246";

type Status = "idle" | "sending" | "success" | "error";

const formatPhone = (value:string)=>{
const numbers=value.replace(/\D/g,"").slice(0,10);

if(numbers.length<=3) return numbers;
if(numbers.length<=6)
return `(${numbers.slice(0,3)}) ${numbers.slice(3)}`;

return `(${numbers.slice(0,3)}) ${numbers.slice(3,6)}-${numbers.slice(6)}`;
};

export default function GetQuote(){

const [status,setStatus]=useState<Status>("idle");

const [name,setName]=useState("");
const [phone,setPhone]=useState("");
const [email,setEmail]=useState("");
const [address,setAddress]=useState("");
const [zip,setZip]=useState("");

const [service,setService]=useState("");
const [budget,setBudget]=useState("");
const [timeline,setTimeline]=useState("");
const [details,setDetails]=useState("");
const [heard,setHeard]=useState("");

const [consent,setConsent]=useState(false);

/* validation */

const validPhone=/^\(\d{3}\)\s\d{3}-\d{4}$/.test(phone);
const validEmail=/^[^\s@]+@[^\s@]+\.(com|net|org)$/i.test(email);
const validZip=/^\d{5}$/.test(zip);

const formValid=
name &&
validPhone &&
validEmail &&
address &&
validZip &&
service &&
budget &&
timeline &&
details &&
heard &&
consent;

const handleSubmit=async(e:React.FormEvent)=>{
e.preventDefault();

if(!formValid){
setStatus("error");
return;
}

setStatus("sending");

try{

const payload={
name,
phone,
email,
project_address:address,
zip_code:zip,
service_requested:service,
estimated_budget:budget,
project_timeline:timeline,
project_details:details,
heard_about_us:heard,
source:"Website Quote"
};

const res=await fetch(WEBHOOK,{
method:"POST",
headers:{
"Content-Type":"application/x-www-form-urlencoded"
},
body:new URLSearchParams(payload as Record<string,string>).toString()
});

if(!res.ok) throw new Error();

setStatus("success");

setName("");
setPhone("");
setEmail("");
setAddress("");
setZip("");
setService("");
setBudget("");
setTimeline("");
setDetails("");
setHeard("");
setConsent(false);

}catch{
setStatus("error");
}

};

return(

<div className="min-h-screen bg-black text-white">

<Navbar/>

<section className="max-w-7xl mx-auto px-6 py-20">

<div className="grid lg:grid-cols-2 gap-16">

{/* LEFT SIDE */}

<div>

<p className="text-xs tracking-[0.35em] text-white/50 uppercase">
AVIEL MANAGEMENT INC
</p>

<h1 className="mt-4 text-7xl font-extrabold leading-none">

<span className="block text-white">
FREE
</span>

<span className="block text-yellow-400">
ESTIMATES
</span>

</h1>

<p className="mt-6 text-white/70 max-w-xl">
Tell us about your project and receive a fast estimate,
timeline and next steps from experienced NYC contractors.
</p>

<div className="flex gap-3 mt-8 flex-wrap">

<div className="flex items-center gap-2 border border-white/10 px-4 py-2 rounded-lg">
<Clock3 size={16}/> Same day replies
</div>

<div className="flex items-center gap-2 border border-white/10 px-4 py-2 rounded-lg">
<ShieldCheck size={16}/> Licensed & insured
</div>

<div className="flex items-center gap-2 border border-white/10 px-4 py-2 rounded-lg">
<BadgeCheck size={16}/> Quality craftsmanship
</div>

</div>

<div className="grid grid-cols-2 gap-4 mt-10">

<button onClick={()=>setService("General Construction")}
className={`flex items-center gap-2 border rounded-xl px-4 py-3 ${
service==="General Construction"
?"border-yellow-400"
:"border-white/10"
}`}>
<Hammer size={18}/> General Construction
</button>

<button onClick={()=>setService("EV Charger Installation")}
className={`flex items-center gap-2 border rounded-xl px-4 py-3 ${
service==="EV Charger Installation"
?"border-yellow-400"
:"border-white/10"
}`}>
<Zap size={18}/> EV Charger Installation
</button>

<button onClick={()=>setService("Junk Removal")}
className={`flex items-center gap-2 border rounded-xl px-4 py-3 ${
service==="Junk Removal"
?"border-yellow-400"
:"border-white/10"
}`}>
<Trash2 size={18}/> Junk Removal
</button>

<button onClick={()=>setService("Roofing")}
className={`flex items-center gap-2 border rounded-xl px-4 py-3 ${
service==="Roofing"
?"border-yellow-400"
:"border-white/10"
}`}>
<Shield size={18}/> Roofing
</button>

</div>

</div>

{/* FORM */}

<div className="bg-black/70 border border-white/10 rounded-3xl p-8">

<h2 className="text-2xl font-semibold">
Request Callback
</h2>

<p className="text-sm text-white/60 mb-6">
Fill this out and we'll contact you shortly.
</p>

<form onSubmit={handleSubmit} className="space-y-4">

<div className="grid grid-cols-2 gap-3">

<input
placeholder="Full Name"
value={name}
onChange={e=>setName(e.target.value)}
className={`bg-black border px-3 py-2 rounded-lg w-full ${
!name && status==="error"
?"border-red-500"
:"border-white/10"
}`}
/>

<input
placeholder="(917) 555-1234"
value={phone}
onChange={e=>setPhone(formatPhone(e.target.value))}
className={`bg-black border px-3 py-2 rounded-lg w-full ${
!validPhone && status==="error"
?"border-red-500"
:"border-white/10"
}`}
/>

</div>

<div className="grid grid-cols-2 gap-3">

<input
placeholder="Email"
value={email}
onChange={e=>setEmail(e.target.value)}
className={`bg-black border px-3 py-2 rounded-lg w-full ${
!validEmail && status==="error"
?"border-red-500"
:"border-white/10"
}`}
/>

<input
placeholder="Project Address"
value={address}
onChange={e=>setAddress(e.target.value)}
className={`bg-black border px-3 py-2 rounded-lg w-full ${
!address && status==="error"
?"border-red-500"
:"border-white/10"
}`}
/>

</div>

<div className="grid grid-cols-2 gap-3">

<input
placeholder="ZIP Code"
value={zip}
onChange={e=>setZip(e.target.value.replace(/\D/g,"").slice(0,5))}
className={`bg-black border px-3 py-2 rounded-lg w-full ${
!validZip && status==="error"
?"border-red-500"
:"border-white/10"
}`}
/>

<select
value={service}
onChange={e=>setService(e.target.value)}
className="bg-black border border-white/10 px-3 py-2 rounded-lg w-full"
>
<option value="">Service Requested</option>
<option>General Construction</option>
<option>Roofing</option>
<option>Junk Removal</option>
<option>EV Charger Installation</option>
</select>

</div>

<textarea
placeholder="Project details"
value={details}
onChange={e=>setDetails(e.target.value)}
className={`bg-black border px-3 py-2 rounded-lg w-full h-28 ${
!details && status==="error"
?"border-red-500"
:"border-white/10"
}`}
/>

<select
value={heard}
onChange={e=>setHeard(e.target.value)}
className="bg-black border border-white/10 px-3 py-2 rounded-lg w-full"
>
<option value="">How did you hear about us?</option>
<option>Google</option>
<option>Referral</option>
<option>Instagram</option>
<option>Facebook</option>
<option>Other</option>
</select>

<label className="flex items-center gap-2 text-xs text-white/70">

<input
type="checkbox"
checked={consent}
onChange={e=>setConsent(e.target.checked)}
/>

I agree to receive text messages regarding my request.

</label>

<button
disabled={!formValid || status==="sending"}
className={`w-full py-3 rounded-lg font-semibold ${
!formValid
?"bg-gray-600 cursor-not-allowed"
:"bg-yellow-400 hover:bg-yellow-500 text-black"
}`}
>
{status==="sending"
?"Submitting..."
:"Get My Free Estimate"}
</button>

{status==="success" && (
<p className="text-green-400 text-center flex justify-center gap-2">
<CheckCircle size={18}/> Request sent successfully
</p>
)}

{status==="error" && (
<p className="text-red-400 text-center flex justify-center gap-2">
<AlertCircle size={18}/> Please fill all fields correctly
</p>
)}

</form>

</div>

</div>

</section>

<Footer/>

</div>

);

}
