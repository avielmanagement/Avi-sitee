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

const formatPhone = (value: string) => {
const numbers = value.replace(/\D/g, "").slice(0, 10);

if (numbers.length <= 3) return numbers;
if (numbers.length <= 6)
return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;

return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6)}`;
};

export default function GetQuote() {

const [status,setStatus] = useState<Status>("idle");

const [name,setName] = useState("");
const [phone,setPhone] = useState("");
const [email,setEmail] = useState("");
const [address,setAddress] = useState("");
const [zip,setZip] = useState("");

const [service,setService] = useState("");
const [budget,setBudget] = useState("");
const [timeline,setTimeline] = useState("");
const [property,setProperty] = useState("");
const [details,setDetails] = useState("");
const [heard,setHeard] = useState("");

const [consent,setConsent] = useState(false);

const validPhone = /^\(\d{3}\)\s\d{3}-\d{4}$/.test(phone);

const missingRequired =
!name ||
!email ||
!validPhone ||
!address ||
!zip ||
!service ||
!budget ||
!timeline ||
!property ||
!details ||
!heard ||
!consent;

const handleSubmit = async (e:React.FormEvent)=>{

e.preventDefault();

if(missingRequired){
setStatus("error");
return;
}

setStatus("sending");

try{

const payload = {

name,
phone,
email,

service_requested:service,
project_address:address,
zip,
estimated_budget:budget,
project_timeline:timeline,
property_type:property,
project_details:details,
heard_about_us:heard,

source:"Website Quote Form"

};

const res = await fetch(WEBHOOK,{
method:"POST",
headers:{
"Content-Type":"application/x-www-form-urlencoded"
},
body:new URLSearchParams(payload as Record<string,string>).toString()
});

if(res.ok){
setStatus("success");
}else{
setStatus("error");
}

}catch{
setStatus("error");
}

};

return(

<div className="min-h-screen bg-black text-white relative overflow-hidden">

{/* animated glow */}

<div className="absolute w-[700px] h-[700px] bg-yellow-500/20 blur-[180px] rounded-full -left-60 top-10 animate-pulse"/>

<Navbar/>

<section className="max-w-7xl mx-auto px-6 py-20">

<div className="grid lg:grid-cols-2 gap-16 items-start">

{/* LEFT */}

<div>

<div className="text-xs tracking-[0.4em] text-white/50 uppercase">
AVIEL MANAGEMENT INC
</div>

<h1 className="mt-4 font-extrabold leading-[0.95]">

<span className="block text-6xl md:text-7xl">
FREE
</span>

<span className="block text-6xl md:text-7xl text-yellow-400">
ESTIMATES
</span>

</h1>

<p className="mt-5 text-white/70 max-w-xl">

Tell us about your project and receive a fast estimate,
timeline and next steps from experienced NYC contractors.

</p>

{/* badges */}

<div className="flex flex-wrap gap-3 mt-8">

<div className="flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 rounded-full text-sm">
<Clock3 size={16}/> Same day replies
</div>

<div className="flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 rounded-full text-sm">
<ShieldCheck size={16}/> Licensed & insured
</div>

<div className="flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 rounded-full text-sm">
<BadgeCheck size={16}/> Quality craftsmanship
</div>

</div>

{/* services */}

<div className="grid grid-cols-2 gap-4 mt-10">

<div className="border border-white/10 bg-white/5 rounded-xl p-4 flex items-center gap-3 hover:bg-white/10 transition">
<Hammer size={18}/> General Construction
</div>

<div className="border border-white/10 bg-white/5 rounded-xl p-4 flex items-center gap-3 hover:bg-white/10 transition">
<Zap size={18}/> EV Charger Install
</div>

<div className="border border-white/10 bg-white/5 rounded-xl p-4 flex items-center gap-3 hover:bg-white/10 transition">
<Trash2 size={18}/> Junk Removal
</div>

<div className="border border-white/10 bg-white/5 rounded-xl p-4 flex items-center gap-3 hover:bg-white/10 transition">
<Shield size={18}/> Roofing
</div>

</div>

</div>

{/* FORM */}

<div className="border border-white/10 rounded-3xl bg-black/60 backdrop-blur-xl p-8 shadow-xl">

<h2 className="text-2xl font-semibold">
Request Callback
</h2>

<p className="text-sm text-white/60 mb-6">
Fill this out and we'll contact you shortly.
</p>

<form onSubmit={handleSubmit} className="space-y-4">

<input
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
className="w-full bg-black border border-white/10 rounded-lg px-3 py-2"
/>

<input
placeholder="(917) 555-1234"
value={phone}
onChange={(e)=>setPhone(formatPhone(e.target.value))}
className="w-full bg-black border border-white/10 rounded-lg px-3 py-2"
/>

<input
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="w-full bg-black border border-white/10 rounded-lg px-3 py-2"
/>

<div className="grid grid-cols-2 gap-3">

<input
placeholder="Project Address"
value={address}
onChange={(e)=>setAddress(e.target.value)}
className="bg-black border border-white/10 rounded-lg px-3 py-2"
/>

<input
placeholder="ZIP"
value={zip}
onChange={(e)=>setZip(e.target.value)}
className="bg-black border border-white/10 rounded-lg px-3 py-2"
/>

</div>

<select
value={service}
onChange={(e)=>setService(e.target.value)}
className="w-full bg-black border border-white/10 rounded-lg px-3 py-2"
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
className="bg-black border border-white/10 rounded-lg px-3 py-2"
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
className="bg-black border border-white/10 rounded-lg px-3 py-2"
>
<option value="">Project Timeline</option>
<option>ASAP</option>
<option>1-2 weeks</option>
<option>2-4 weeks</option>
<option>1-3 months</option>
</select>

</div>

<select
value={property}
onChange={(e)=>setProperty(e.target.value)}
className="w-full bg-black border border-white/10 rounded-lg px-3 py-2"
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
className="w-full bg-black border border-white/10 rounded-lg px-3 py-2 h-28"
/>

<select
value={heard}
onChange={(e)=>setHeard(e.target.value)}
className="w-full bg-black border border-white/10 rounded-lg px-3 py-2"
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
onChange={(e)=>setConsent(e.target.checked)}
/>
I agree to receive text messages regarding my request.
</label>

<button
disabled={missingRequired || status==="sending"}
className={`w-full py-3 rounded-lg font-semibold transition ${
missingRequired
? "bg-gray-600 cursor-not-allowed"
: "bg-yellow-400 hover:bg-yellow-500 text-black"
}`}
>

{status==="sending" ? "Submitting..." : "Get My Free Estimate"}

</button>

{/* success */}

{status==="success" && (
<div className="flex items-center gap-2 text-emerald-400 justify-center text-sm mt-2">
<CheckCircle size={18}/> Request submitted successfully!
</div>
)}

{/* error */}

{status==="error" && (
<div className="flex items-center gap-2 text-red-400 justify-center text-sm mt-2">
<AlertCircle size={18}/> Please fill all fields correctly.
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
