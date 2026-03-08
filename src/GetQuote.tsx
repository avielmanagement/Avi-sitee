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
const [details,setDetails] = useState("");
const [heard,setHeard] = useState("");

const [consent,setConsent] = useState(false);

/* VALIDATION */

const validPhone = /^\(\d{3}\)\s\d{3}-\d{4}$/.test(phone);
const validEmail = /^[^\s@]+@[^\s@]+\.(com|net|org)$/i.test(email);
const validZip = /^\d{5}$/.test(zip);

const formValid =
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

const handleSubmit = async (e:React.FormEvent)=>{

e.preventDefault();

if(!formValid){
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
zip_code:zip,
estimated_budget:budget,
project_timeline:timeline,
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

{/* glow background */}

<div className="absolute w-[800px] h-[800px] bg-yellow-500/20 blur-[200px] rounded-full -left-64 top-0 animate-pulse"/>

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

{/* services */}

<div className="grid grid-cols-2 gap-4 mt-10">

<div className="service">
<Hammer size={18}/> General Construction
</div>

<div className="service">
<Zap size={18}/> EV Charger Install
</div>

<div className="service">
<Trash2 size={18}/> Junk Removal
</div>

<div className="service">
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

{/* NAME */}

<input
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
className={`input ${!name && status==="error" ? "border-red-500":""}`}
/>

{/* PHONE */}

<input
placeholder="(917) 555-1234"
value={phone}
onChange={(e)=>setPhone(formatPhone(e.target.value))}
className={`input ${!validPhone && status==="error" ? "border-red-500":""}`}
/>

{/* EMAIL */}

<input
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className={`input ${!validEmail && status==="error" ? "border-red-500":""}`}
/>

{/* ADDRESS */}

<input
placeholder="Project Address"
value={address}
onChange={(e)=>setAddress(e.target.value)}
className={`input ${!address && status==="error" ? "border-red-500":""}`}
/>

{/* ZIP */}

<input
placeholder="ZIP Code"
value={zip}
onChange={(e)=>setZip(e.target.value.replace(/\D/g,"").slice(0,5))}
className={`input ${!validZip && status==="error" ? "border-red-500":""}`}
/>

{/* SERVICE */}

<select
value={service}
onChange={(e)=>setService(e.target.value)}
className={`input ${!service && status==="error" ? "border-red-500":""}`}
>
<option value="">Service Requested</option>
<option>General Construction</option>
<option>Roofing</option>
<option>Junk Removal</option>
<option>EV Charger Installation</option>
</select>

{/* BUDGET */}

<select
value={budget}
onChange={(e)=>setBudget(e.target.value)}
className={`input ${!budget && status==="error" ? "border-red-500":""}`}
>
<option value="">Estimated Budget</option>
<option>$1k-$5k</option>
<option>$5k-$15k</option>
<option>$15k-$50k</option>
<option>$50k+</option>
</select>

{/* TIMELINE */}

<select
value={timeline}
onChange={(e)=>setTimeline(e.target.value)}
className={`input ${!timeline && status==="error" ? "border-red-500":""}`}
>
<option value="">Project Timeline</option>
<option>ASAP</option>
<option>1-2 weeks</option>
<option>2-4 weeks</option>
<option>1-3 months</option>
</select>

{/* DETAILS */}

<textarea
placeholder="Project details"
value={details}
onChange={(e)=>setDetails(e.target.value)}
className={`input h-28 ${!details && status==="error" ? "border-red-500":""}`}
/>

{/* HEARD */}

<select
value={heard}
onChange={(e)=>setHeard(e.target.value)}
className={`input ${!heard && status==="error" ? "border-red-500":""}`}
>
<option value="">How did you hear about us?</option>
<option>Google</option>
<option>Referral</option>
<option>Instagram</option>
<option>Facebook</option>
<option>Other</option>
</select>

{/* CONSENT */}

<label className="flex items-center gap-2 text-xs text-white/70">
<input
type="checkbox"
checked={consent}
onChange={(e)=>setConsent(e.target.checked)}
/>
I agree to receive text messages regarding my request.
</label>

<button
disabled={!formValid || status==="sending"}
className={`w-full py-3 rounded-lg font-semibold transition ${
!formValid
? "bg-gray-600 cursor-not-allowed"
: "bg-yellow-400 hover:bg-yellow-500 text-black"
}`}
>

{status==="sending" ? "Submitting..." : "Get My Free Estimate"}

</button>

{/* SUCCESS */}

{status==="success" && (

<div className="flex items-center gap-2 text-emerald-400 text-sm justify-center mt-2">

<CheckCircle size={18}/>
Request submitted successfully!

</div>

)}

{/* ERROR */}

{status==="error" && !formValid && (

<div className="flex items-center gap-2 text-red-400 text-sm justify-center mt-2">

<AlertCircle size={18}/>
Please fill all fields correctly.

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
