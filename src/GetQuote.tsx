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

export default function GetQuote() {

const [status,setStatus] = useState<Status>("idle");

const [name,setName] = useState("");
const [phone,setPhone] = useState("");
const [email,setEmail] = useState("");
const [zip,setZip] = useState("");

const [service,setService] = useState("");
const [details,setDetails] = useState("");
const [heard,setHeard] = useState("");

const [consent,setConsent] = useState(false);
const [errors,setErrors] = useState<any>({});

const [utm,setUtm] = useState<any>({});
const [spam,setSpam] = useState("");

useEffect(()=>{

const params = new URLSearchParams(window.location.search);

setUtm({
utm_source:params.get("utm_source") || "",
utm_campaign:params.get("utm_campaign") || "",
utm_medium:params.get("utm_medium") || "",
utm_term:params.get("utm_term") || ""
});

},[]);

const validPhone = /^\(\d{3}\)\s\d{3}-\d{4}$/.test(phone);
const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validZip = /^\d{5}$/.test(zip);

const formatPhone = (value:string) => {

const numbers = value.replace(/\D/g,"").slice(0,10);

if(numbers.length <= 3) return numbers;

if(numbers.length <= 6)
return `(${numbers.slice(0,3)}) ${numbers.slice(3)}`;

return `(${numbers.slice(0,3)}) ${numbers.slice(3,6)}-${numbers.slice(6)}`;

};

const handleSubmit = async(e:React.FormEvent) => {

e.preventDefault();

if(spam) return;

let newErrors:any = {};

if(!name) newErrors.name="Enter name";
if(!validPhone) newErrors.phone="Invalid phone";
if(!validEmail) newErrors.email="Invalid email";
if(!validZip) newErrors.zip="ZIP must be 5 digits";
if(!service) newErrors.service="Select service";
if(!details) newErrors.details="Describe project";
if(!heard) newErrors.heard="Select option";
if(!consent) newErrors.consent="Consent required";

setErrors(newErrors);

if(Object.keys(newErrors).length > 0){
setStatus("error");
return;
}

setStatus("sending");

try{

const payload = {

name,
phone,
email,

zip_code:zip,
service_requested:service,
project_details:details,
how_did_you_hear_about_us:heard,

source:"Website Quote Form",

...utm

};

const res = await fetch(GHL_WEBHOOK,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(payload)
});

if(!res.ok) throw new Error();

if(typeof window!=="undefined" && (window as any).gtag){

(window as any).gtag("event","conversion",{
send_to:"AW-17974479001/RmVccVy4XvCeTmn8_pC"
});

}

setStatus("success");

setName("");
setPhone("");
setEmail("");
setZip("");
setService("");
setDetails("");
setHeard("");
setConsent(false);

}catch{

setStatus("error");

}

};

return(

<div className="bg-black min-h-screen">

<Navbar/>

<section className="hero">

<div className="heroText">

<p className="tag">AVIEL MANAGEMENT INC</p>

<h1>
<span className="white">FREE</span>
<br/>
<span className="yellow">ESTIMATES</span>
</h1>

<p className="desc">
Tell us about your project and receive a fast estimate,
timeline and next steps from experienced NYC contractors.
</p>

<div className="badges">

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

<div className="services">

<div className="service">
<Hammer/> General Construction
</div>

<div className="service">
<Zap/> EV Charger Installation
</div>

<div className="service">
<Trash2/> Junk Removal & Demo
</div>

<div className="service">
<Shield/> Roofing
</div>

</div>

</div>

<div className="formCard">

<h2>Request Callback</h2>

<form onSubmit={handleSubmit}>

<input
value={spam}
onChange={(e)=>setSpam(e.target.value)}
className="hidden"
/>

<div className="grid">

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

<div className="grid">

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
placeholder="Project Details"
value={details}
onChange={(e)=>setDetails(e.target.value)}
className="input textarea"
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

</select>

<label className="consent">

<input
type="checkbox"
checked={consent}
onChange={(e)=>setConsent(e.target.checked)}
/>

<span>
I agree to receive SMS regarding my estimate.
</span>

</label>

<button className="cta">
{status==="sending" ? "Sending..." : "Get My FREE Estimate"}
</button>

</form>

</div>

</section>

<Footer/>

<style jsx>{`

.hero{
max-width:1200px;
margin:auto;
padding:120px 30px;
display:grid;
grid-template-columns:1fr 1fr;
gap:80px;
}

.tag{
letter-spacing:4px;
color:#888;
font-size:12px;
}

h1{
font-size:64px;
line-height:1.1;
}

.white{color:white}
.yellow{color:#facc15}

.desc{
color:#9ca3af;
margin-top:20px;
max-width:500px;
}

.badges{
display:flex;
gap:10px;
margin-top:30px;
flex-wrap:wrap;
}

.badge{
background:#0e0e0e;
border:1px solid #222;
padding:8px 12px;
border-radius:8px;
font-size:13px;
display:flex;
gap:6px;
align-items:center;
}

.services{
display:grid;
grid-template-columns:1fr 1fr;
gap:12px;
margin-top:40px;
}

.service{
background:#0b0b0b;
border:1px solid #222;
padding:14px;
border-radius:10px;
display:flex;
gap:8px;
align-items:center;
transition:.2s;
}

.service:hover{
border-color:#facc15;
transform:translateY(-3px);
box-shadow:0 10px 25px rgba(250,204,21,.15);
}

.formCard{
background:#060606;
padding:40px;
border-radius:16px;
border:1px solid #1a1a1a;
box-shadow:0 0 40px rgba(255,215,0,.06);
}

.formCard h2{
color:white;
margin-bottom:20px;
}

.grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:12px;
}

.input{
width:100%;
padding:14px;
background:#0d0d0d;
border:1px solid #1f1f1f;
border-radius:10px;
color:white;
margin-bottom:12px;
transition:.2s;
}

.input:focus{
border-color:#facc15;
box-shadow:0 0 15px rgba(250,204,21,.35);
outline:none;
}

.textarea{
height:120px;
}

.cta{
width:100%;
padding:16px;
background:#facc15;
border:none;
border-radius:10px;
font-weight:700;
color:black;
margin-top:10px;
transition:.2s;
}

.cta:hover{
transform:translateY(-2px);
box-shadow:0 10px 30px rgba(250,204,21,.35);
}

.consent{
font-size:12px;
color:#999;
display:flex;
gap:6px;
margin:10px 0;
}

`}</style>

</div>

);

}
