import React, { useMemo, useState } from "react";
import {
ShieldCheck,
BadgeCheck,
Clock3,
CheckCircle,
AlertCircle,
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

const formatPhone = (value: string) => {
const numbers = value.replace(/\D/g, "").slice(0, 10);

if (numbers.length <= 3) return numbers;
if (numbers.length <= 6)
return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;

return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6)}`;
};

export default function GetQuote() {

const [status,setStatus] = useState<Status>("idle");

const [fullName,setFullName] = useState("");
const [phone,setPhone] = useState("");
const [email,setEmail] = useState("");
const [address,setAddress] = useState("");
const [zip,setZip] = useState("");

const [projectType,setProjectType] = useState("");
const [budget,setBudget] = useState("");
const [timeline,setTimeline] = useState("");
const [propertyType,setPropertyType] = useState("");
const [details,setDetails] = useState("");
const [heard,setHeard] = useState("");

const [consent,setConsent] = useState(false);

const isValidPhone = /^\(\d{3}\)\s\d{3}-\d{4}$/.test(phone);

const canSubmit =
fullName &&
email &&
isValidPhone &&
projectType &&
budget &&
timeline &&
details &&
consent;

const handleSubmit = async (e:React.FormEvent) => {

e.preventDefault();

if(!canSubmit) return;

setStatus("sending");

try{

const payload = {

name: fullName,
phone: phone,
email: email,

service_requested: projectType,
project_address: address,
zip: zip,
estimated_budget: budget,
project_timeline: timeline,
property_type: propertyType,
project_details: details,
heard_about_us: heard,

source: "Website Quote Form"

};

const res = await fetch(GHL_WEBHOOK,{
method:"POST",
headers:{
"Content-Type":"application/x-www-form-urlencoded"
},
body:new URLSearchParams(payload as Record<string,string>).toString()
});

if(res.ok){

setStatus("success");

setFullName("");
setPhone("");
setEmail("");
setAddress("");
setZip("");
setProjectType("");
setBudget("");
setTimeline("");
setPropertyType("");
setDetails("");
setHeard("");
setConsent(false);

}else{

setStatus("error");

}

}catch{

setStatus("error");

}

};

return (

<div className="min-h-screen bg-black text-white relative overflow-hidden">

{/* animated glow */}

<div className="absolute w-[600px] h-[600px] bg-yellow-500/20 blur-[160px] rounded-full top-20 left-[-200px] animate-pulse"/>

<Navbar/>

<section className="relative max-w-7xl mx-auto px-6 py-20">

<div className="grid lg:grid-cols-2 gap-16 items-start">

{/* LEFT SIDE */}

<div>

<div className="text-[12px] tracking-[0.4em] text-white/50 uppercase">
Aviel Management Inc.
</div>

<h1 className="mt-3 leading-[0.95] font-extrabold">

<span className="block text-6xl md:text-7xl">
FREE
</span>

<span className="block text-6xl md:text-7xl text-yellow-400">
ESTIMATES
</span>

</h1>

<p className="mt-5 text-white/70 max-w-xl">

Tell us about your project and receive a fast estimate, timeline,
and next steps from experienced NYC contractors.

</p>

{/* trust badges */}

<div className="mt-8 flex flex-wrap gap-3">

<span className="badge">
<Clock3 size={16}/> Same-day replies
</span>

<span className="badge">
<ShieldCheck size={16}/> Licensed & insured
</span>

<span className="badge">
<BadgeCheck size={16}/> Quality craftsmanship
</span>

</div>

{/* services */}

<div className="grid grid-cols-2 gap-4 mt-10">

<div className="service">
<Hammer/> General Construction
</div>

<div className="service">
<Zap/> EV Charger Install
</div>

<div className="service">
<Trash2/> Junk Removal
</div>

<div className="service">
<Shield/> Roofing
</div>

</div>

</div>

{/* FORM */}

<div className="form-card">

<form onSubmit={handleSubmit} className="space-y-4">

<input
placeholder="Full Name"
value={fullName}
onChange={(e)=>setFullName(e.target.value)}
className="input"
/>

<input
placeholder="(917) 555-1234"
value={phone}
onChange={(e)=>setPhone(formatPhone(e.target.value))}
className="input"
/>

<input
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="input"
/>

<div className="grid grid-cols-2 gap-3">

<input
placeholder="Project Address"
value={address}
onChange={(e)=>setAddress(e.target.value)}
className="input"
/>

<input
placeholder="ZIP"
value={zip}
onChange={(e)=>setZip(e.target.value)}
className="input"
/>

</div>

<select
value={projectType}
onChange={(e)=>setProjectType(e.target.value)}
className="input"
>

<option value="">Service Requested</option>
<option>General Construction</option>
<option>Roofing</option>
<option>Junk Removal</option>
<option>EV Charger Installation</option>

</select>

<div className="grid grid-cols-2 gap-3">

<select
value={budget}
onChange={(e)=>setBudget(e.target.value)}
className="input"
>

<option value="">Estimated Budget</option>
<option>$1k-$5k</option>
<option>$5k-$15k</option>
<option>$15k-$50k</option>
<option>$50k+</option>

</select>

<select
value={timeline}
onChange={(e)=>setTimeline(e.target.value)}
className="input"
>

<option value="">Project Timeline</option>
<option>ASAP</option>
<option>1-2 weeks</option>
<option>2-4 weeks</option>
<option>1-3 months</option>

</select>

</div>

<select
value={propertyType}
onChange={(e)=>setPropertyType(e.target.value)}
className="input"
>

<option value="">Property Type</option>
<option>House</option>
<option>Apartment</option>
<option>Commercial</option>

</select>

<textarea
placeholder="Project details"
value={details}
onChange={(e)=>setDetails(e.target.value)}
className="input h-[110px]"
/>

<select
value={heard}
onChange={(e)=>setHeard(e.target.value)}
className="input"
>

<option value="">How did you hear about us?</option>
<option>Google</option>
<option>Referral</option>
<option>Instagram</option>
<option>Facebook</option>
<option>Other</option>

</select>

<label className="flex gap-2 text-xs text-white/70">

<input
type="checkbox"
checked={consent}
onChange={(e)=>setConsent(e.target.checked)}
/>

I agree to receive text messages regarding my request.

</label>

<button
disabled={!canSubmit || status==="sending"}
className="submit-btn"
>

{status==="sending"
? "Submitting..."
: "Get My Free Estimate"}

</button>

{/* success */}

{status==="success" && (

<div className="success">

<CheckCircle size={18}/>
Request submitted successfully!

</div>

)}

{/* error */}

{status==="error" && (

<div className="error">

<AlertCircle size={18}/>
Something went wrong. Please try again.

</div>

)}

</form>

</div>

</div>

</section>

<Footer/>

</div>

);
}
