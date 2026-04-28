import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Profile(){

const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")

const updateProfile=()=>{
alert("Profile Updated")
}

const changePassword=()=>{
alert("Password Changed")
}

return(
<>
<Sidebar/>

<div style={{marginLeft:"240px",padding:"40px"}}>

<h1>Profile Settings</h1>

<input placeholder="Full Name" value={name} onChange={(e)=>setName(e.target.value)} />
<br/><br/>

<input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
<br/><br/>

<button onClick={updateProfile}>Update</button>

<br/><br/>

<input placeholder="New Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />

<br/><br/>

<button onClick={changePassword}>Change Password</button>

</div>

</>
)

}