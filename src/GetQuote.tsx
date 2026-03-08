import React, { useState } from "react";

const GHL_WEBHOOK = "PASTE_YOUR_WEBHOOK_URL";

export default function QuoteForm() {

const [form, setForm] = useState({
name: "",
phone: "",
email: "",
zip: "",
service: "",
details: "",
heard: ""
});

const [status, setStatus] = useState("");
const [errors, setErrors] = useState<any>({});

const validate = () => {

let newErrors:any = {};

if (!form.name) newErrors.name = "Full name required";

if (!form.phone) newErrors.phone = "Phone required";

if (!form.email.includes("@") || !form.email.includes(".com"))
newErrors.email = "Enter valid email";

if (!/^\d{5}$/.test(form.zip))
newErrors.zip = "ZIP must be 5 numbers";

if (!form.service) newErrors.service = "Select a service";

if (!form.details) newErrors.details = "Project details required";

setErrors(newErrors);

return Object.keys(newErrors).length === 0;

};

const handleChange = (e:any) => {

setForm({
...form,
[e.target.name]: e.target.value
});

};

const handleSubmit = async (e:any) => {

e.preventDefault();

if (!validate()) return;

setStatus("sending");

try {

const payload = {
name: form.name,
phone: form.phone,
email: form.email,
"contact.zip_code": form.zip,
"contact.service_requested": form.service,
"contact.project_details": form.details,
"contact.how_did_you_hear_about_us": form.heard,
source: "Website Quote"
};

const res = await fetch(GHL_WEBHOOK, {
method: "POST",
headers: {
"Content-Type": "application/x-www-form-urlencoded"
},
body: new URLSearchParams(payload).toString()
});

if (!res.ok) throw new Error("Webhook error");

setStatus("success");

setForm({
name:"",
phone:"",
email:"",
zip:"",
service:"",
details:"",
heard:""
});

} catch {
setStatus("error");
}

};

return (

<div style={{
background:"#0b0b0b",
padding:"30px",
borderRadius:"14px",
boxShadow:"0 0 30px rgba(255,193,7,0.08)",
border:"1px solid rgba(255,255,255,0.05)"
}}>

<h2 style={{
color:"#fff",
marginBottom:"5px",
fontSize:"22px"
}}>
Request Callback
</h2>

<p style={{color:"#aaa",marginBottom:"20px"}}>
Fill this out and we'll contact you shortly.
</p>

<form onSubmit={handleSubmit}>

<div className="row">

<input
name="name"
placeholder="Full Name"
value={form.name}
onChange={handleChange}
/>

{errors.name && <span className="error">{errors.name}</span>}

<input
name="phone"
placeholder="Phone"
value={form.phone}
onChange={handleChange}
/>

{errors.phone && <span className="error">{errors.phone}</span>}

</div>

<div className="row">

<input
name="email"
placeholder="Email"
value={form.email}
onChange={handleChange}
/>

{errors.email && <span className="error">{errors.email}</span>}

<input
name="zip"
placeholder="ZIP Code"
value={form.zip}
onChange={handleChange}
/>

{errors.zip && <span className="error">{errors.zip}</span>}

</div>

<select
name="service"
value={form.service}
onChange={handleChange}
>
<option value="">Service Requested</option>
<option value="General Construction">General Construction</option>
<option value="EV Charger Installation">EV Charger Installation</option>
<option value="Junk Removal & Demo">Junk Removal & Demo</option>
<option value="Roofing">Roofing</option>
</select>

{errors.service && <span className="error">{errors.service}</span>}

<textarea
name="details"
placeholder="Project details"
value={form.details}
onChange={handleChange}
/>

{errors.details && <span className="error">{errors.details}</span>}

<select
name="heard"
value={form.heard}
onChange={handleChange}
>
<option value="">How Did You Hear About Us?</option>
<option value="Google">Google</option>
<option value="Referral">Referral</option>
<option value="Instagram">Instagram</option>
<option value="Facebook">Facebook</option>
<option value="Other">Other</option>
</select>

<button
type="submit"
className="submit"
disabled={status === "sending"}
>

{status === "sending"
? "Sending..."
: "Get My FREE Estimate"}

</button>

{status === "success" &&
<p className="success">
Your request was sent. We'll contact you shortly.
</p>}

{status === "error" &&
<p className="error">
Something went wrong. Please try again.
</p>}

</form>

<style>{`

.row{
display:grid;
grid-template-columns:1fr 1fr;
gap:10px;
margin-bottom:10px;
}

input,select,textarea{
width:100%;
padding:12px;
background:#111;
border:1px solid #2a2a2a;
border-radius:8px;
color:white;
outline:none;
transition:all .25s ease;
}

input:focus,
select:focus,
textarea:focus{
border-color:#ffc107;
box-shadow:0 0 10px rgba(255,193,7,.3);
}

textarea{
height:90px;
resize:none;
margin-top:10px;
}

.submit{
margin-top:15px;
width:100%;
padding:14px;
background:#4b5563;
border:none;
border-radius:8px;
color:white;
font-weight:600;
cursor:pointer;
transition:all .3s ease;
}

.submit:hover{
background:#ffc107;
color:black;
box-shadow:0 0 20px rgba(255,193,7,.5);
}

.error{
color:#ff4d4d;
font-size:12px;
display:block;
margin-bottom:6px;
}

.success{
color:#00e676;
margin-top:10px;
font-size:14px;
}

`}</style>

</div>
);

}
