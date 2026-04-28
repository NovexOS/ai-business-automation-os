import { useState, useEffect } from "react"
import Sidebar from "../components/Sidebar"
import LeadTable from "../components/LeadTable"

export default function Leads(){

const [search,setSearch] = useState("")

const [leads,setLeads] = useState(()=>{

const saved = localStorage.getItem("leads")
return saved ? JSON.parse(saved) : []

})

useEffect(()=>{

localStorage.setItem("leads",JSON.stringify(leads))

},[leads])

const addLead = ()=>{

const name = prompt("Enter name")
const phone = prompt("Enter phone")
const email = prompt("Enter email")
const source = prompt("Enter source")

if(!name) return

const newLead = {

id: Date.now(),
name,
phone,
email,
source,
status:"New",
date:new Date().toLocaleDateString()

}

setLeads([...leads,newLead])

}

return(

<div style={{display:"flex"}}>

<Sidebar/>

<div style={{marginLeft:"240px",padding:"40px",width:"100%"}}>

<h1>Leads</h1>

<p style={{color:"gray"}}>
Manage and follow up with your leads
</p>

<div style={{
display:"flex",
gap:"10px",
marginTop:"20px",
marginBottom:"20px"
}}>

<input
placeholder="Search leads..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
style={{padding:"10px",width:"300px"}}
/>

<button>Filter</button>

<button
onClick={addLead}
style={{
marginLeft:"auto",
background:"#4F46E5",
color:"white",
padding:"10px 16px",
border:"none",
borderRadius:"6px"
}}
>
+ Add Lead
</button>

</div>

<LeadTable
leads={leads}
search={search}
setLeads={setLeads}
/>

</div>

</div>

)

}