import {useState} from "react";
import Sidebar from "../components/Sidebar";

export default function TeamMembers(){

const [email,setEmail]=useState("")

const inviteMember=()=>{
if(!email){
alert("Enter email")
return
}

alert("Invitation sent to "+email)
setEmail("")
}

return(
<>
<Sidebar/>

<div style={{marginLeft:"240px",padding:"40px"}}>

<h1>Team Members</h1>

<input
placeholder="Member Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<br/><br/>

<button onClick={inviteMember}>Invite Member</button>

</div>

</>
)

}