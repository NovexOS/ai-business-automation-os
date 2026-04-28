import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Settings() {

const [tab,setTab] = useState("business")

const [business,setBusiness] = useState("")
const [phone,setPhone] = useState("")
const [industry,setIndustry] = useState("")
const [city,setCity] = useState("")

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const [teamEmail,setTeamEmail] = useState("")

function saveBusiness(){
alert("Business Info Saved")
}

function updateProfile(){
alert("Profile Updated")
}

function changePassword(){
alert("Password Changed")
}

function connectGmail(){
alert("Gmail Connected")
}

function connectOutlook(){
alert("Outlook Connected")
}

function markAllRead(){
alert("All Notifications Read")
}

function inviteMember(){
if(!teamEmail){
alert("Enter email")
return
}

alert("Invite sent to "+teamEmail)
setTeamEmail("")
}

return(

<>
<Sidebar/>

<div style={{marginLeft:"240px",padding:"40px"}}>

<h1>Settings</h1>

{/* Tabs */}

<div style={{display:"flex",gap:"20px",marginBottom:"30px"}}>

<button onClick={()=>setTab("business")}>Business Info</button>

<button onClick={()=>setTab("profile")}>Profile</button>

<button onClick={()=>setTab("email")}>Email Integrations</button>

<button onClick={()=>setTab("notifications")}>Notifications</button>

<button onClick={()=>setTab("team")}>Team Members</button>

</div>

{/* BUSINESS INFO */}

{tab==="business" && (

<div>

<h2>Business Information</h2>

<input
placeholder="Business Name"
value={business}
onChange={(e)=>setBusiness(e.target.value)}
/>

<br/><br/>

<input
placeholder="Phone Number"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
/>

<br/><br/>

<input
placeholder="Industry"
value={industry}
onChange={(e)=>setIndustry(e.target.value)}
/>

<br/><br/>

<input
placeholder="City"
value={city}
onChange={(e)=>setCity(e.target.value)}
/>

<br/><br/>

<button onClick={saveBusiness}>Save Changes</button>

</div>

)}

{/* PROFILE */}

{tab==="profile" && (

<div>

<h2>Profile Settings</h2>

<input
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<br/><br/>

<input
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<br/><br/>

<button onClick={updateProfile}>Update Profile</button>

<br/><br/>

<input
type="password"
placeholder="New Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<br/><br/>

<button onClick={changePassword}>Change Password</button>

</div>

)}

{/* EMAIL INTEGRATIONS */}

{tab==="email" && (

<div>

<h2>Email Integrations</h2>

<h3>Gmail</h3>

<button onClick={connectGmail}>Connect Gmail</button>

<br/><br/>

<h3>Outlook</h3>

<button onClick={connectOutlook}>Connect Outlook</button>

</div>

)}

{/* NOTIFICATIONS */}

{tab==="notifications" && (

<div>

<h2>Notifications</h2>

<ul>

<li>New Lead Received</li>
<li>Follow-up Pending</li>
<li>Lead Converted</li>
<li>Automation Completed</li>

</ul>

<br/>

<button onClick={markAllRead}>Mark All as Read</button>

</div>

)}

{/* TEAM MEMBERS */}

{tab==="team" && (

<div>

<h2>Team Members</h2>

<input
placeholder="Member Email"
value={teamEmail}
onChange={(e)=>setTeamEmail(e.target.value)}
/>

<br/><br/>

<button onClick={inviteMember}>Invite Member</button>

</div>

)}

</div>

</>

)

}