import { useNavigate } from "react-router-dom"

export default function LeadTable({leads,search,setLeads}){

const navigate = useNavigate()

const deleteLead = (id)=>{

const confirmDelete = window.confirm("Delete this lead?")

if(!confirmDelete) return

const updated = leads.filter((lead)=>lead.id !== id)

setLeads(updated)

}

const changeStatus = (id,newStatus)=>{

const updated = leads.map((lead)=>{

if(lead.id === id){
return {...lead,status:newStatus}
}

return lead

})

setLeads(updated)

}

const filtered = leads.filter((lead)=>
lead.name.toLowerCase().includes(search.toLowerCase())
)

return(

<table border="1" width="100%" cellPadding="10">

<thead>

<tr>
<th>Name</th>
<th>Phone</th>
<th>Email</th>
<th>Source</th>
<th>Status</th>
<th>Date</th>
<th>Action</th>
</tr>

</thead>

<tbody>

{filtered.map((lead)=>(

<tr key={lead.id}>

<td>{lead.name}</td>
<td>{lead.phone}</td>
<td>{lead.email}</td>
<td>{lead.source}</td>

<td>

<select
value={lead.status}
onChange={(e)=>changeStatus(lead.id,e.target.value)}
>

<option>New</option>
<option>Contacted</option>
<option>Qualified</option>
<option>Converted</option>

</select>

</td>

<td>{lead.date}</td>

<td>

<button
onClick={()=>navigate(`/leads/${lead.id}`)}
style={{marginRight:"10px"}}
>
View
</button>

<button
onClick={()=>deleteLead(lead.id)}
style={{
background:"red",
color:"white",
border:"none",
padding:"5px 10px",
borderRadius:"4px"
}}
>
Delete
</button>

</td>

</tr>

))}

</tbody>

</table>

)

}