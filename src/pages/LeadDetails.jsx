import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react"

export default function LeadDetail(){

const {id} = useParams()
const navigate = useNavigate()

const saved = JSON.parse(localStorage.getItem("leads")) || []

const lead = saved.find((l)=>l.id === Number(id))

const [message,setMessage] = useState("")
const [chat,setChat] = useState([
{sender:"AI",text:"Hello! Thanks for contacting us."}
])

const [tab,setTab] = useState("conversation")

if(!lead){

return(
<div style={{padding:"40px"}}>
<h2>Lead not found</h2>
<button onClick={()=>navigate("/leads")}>
Back to Leads
</button>
</div>
)

}

const sendMessage = ()=>{

if(!message) return

const updated = [
...chat,
{sender:lead.name,text:message},
{sender:"AI",text:"Thanks for your message! Our team will contact you soon."}
]

setChat(updated)
setMessage("")

}

return(

<div style={{padding:"40px"}}>

<button
onClick={()=>navigate("/leads")}
style={{marginBottom:"20px"}}
>
← Back to Leads
</button>

<h1>Lead Details</h1>

<div style={{display:"flex",gap:"40px"}}>

{/* LEFT PANEL */}

<div style={{
border:"1px solid #ddd",
padding:"20px",
width:"350px",
borderRadius:"6px"
}}>

<h2>{lead.name}</h2>

<p><b>Status:</b> {lead.status}</p>
<p><b>Phone:</b> {lead.phone}</p>
<p><b>Email:</b> {lead.email}</p>
<p><b>Source:</b> {lead.source}</p>
<p><b>Date:</b> {lead.date}</p>

</div>


{/* RIGHT PANEL */}

<div style={{
border:"1px solid #ddd",
padding:"20px",
width:"500px",
borderRadius:"6px"
}}>

<div style={{marginBottom:"10px"}}>

<button
onClick={()=>setTab("conversation")}
style={{marginRight:"10px"}}
>
Conversation
</button>

<button
onClick={()=>setTab("activity")}
>
Activity
</button>

</div>

{/* Conversation */}

{tab === "conversation" && (

<div>

<div style={{
height:"200px",
overflowY:"auto",
marginBottom:"10px"
}}>

{chat.map((c,i)=>(
<p key={i}>
<b>{c.sender}:</b> {c.text}
</p>
))}

</div>

<div style={{display:"flex",gap:"10px"}}>

<input
value={message}
onChange={(e)=>setMessage(e.target.value)}
placeholder="Type a message..."
style={{flex:1,padding:"8px"}}
/>

<button onClick={sendMessage}>
Send
</button>

</div>

</div>

)}

{/* Activity */}

{tab === "activity" && (

<div>

<p>Lead created on {lead.date}</p>
<p>Status: {lead.status}</p>
<p>Source: {lead.source}</p>

</div>

)}

</div>

</div>

</div>

)

}