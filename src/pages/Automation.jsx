import { useState } from "react"
import Sidebar from "../components/Sidebar"

export default function Automation(){

const [trigger,setTrigger] = useState("New Lead")
const [action,setAction] = useState("Send Message")
const [delay,setDelay] = useState("24 Hours")

const [conditions,setConditions] = useState([])
const [steps,setSteps] = useState([])

const addCondition = () => {

setConditions([
...conditions,
{ id: Date.now(), field:"Lead Status", value:"Interested" }
])

}

const addStep = () => {

setSteps([
...steps,
{ id: Date.now(), type:"Send Follow-up Message" }
])

}

const removeCondition = (id) => {
setConditions(conditions.filter(c => c.id !== id))
}

const removeStep = (id) => {
setSteps(steps.filter(s => s.id !== id))
}

const saveAutomation = () => {

const data = {trigger,action,delay,conditions,steps}

console.log("Automation Saved:",data)

alert("Automation Saved")

}

const activateAutomation = () => {
alert("Automation Activated")
}

return(

<div>

<Sidebar/>

<div style={{
marginLeft:"240px",
padding:"40px",
background:"#f6f7fb",
minHeight:"100vh"
}}>

<h2>Automation Builder</h2>

<div style={{
background:"white",
padding:"30px",
borderRadius:"10px",
width:"650px",
boxShadow:"0 0 10px rgba(0,0,0,0.1)"
}}>

<label>Trigger</label>

<select
value={trigger}
onChange={(e)=>setTrigger(e.target.value)}
style={{width:"100%",padding:"10px",marginBottom:"20px"}}
>

<option>New Lead</option>
<option>Lead Replied</option>
<option>Email Opened</option>

</select>

<label>Action</label>

<select
value={action}
onChange={(e)=>setAction(e.target.value)}
style={{width:"100%",padding:"10px",marginBottom:"20px"}}
>

<option>Send Message</option>
<option>Send Email</option>
<option>Assign Agent</option>

</select>

<label>Delay</label>

<select
value={delay}
onChange={(e)=>setDelay(e.target.value)}
style={{width:"100%",padding:"10px",marginBottom:"20px"}}
>

<option>Immediately</option>
<option>1 Hour</option>
<option>24 Hours</option>

</select>

<button
onClick={addCondition}
style={{
background:"none",
border:"none",
color:"#4f46e5",
cursor:"pointer",
marginBottom:"10px"
}}
>

+ Add Condition (Optional)

</button>

{conditions.map(c => (

<div key={c.id} style={{
display:"flex",
gap:"10px",
marginBottom:"10px"
}}>

<select style={{padding:"8px"}}>

<option>Lead Status</option>
<option>Lead Source</option>
<option>Lead Score</option>

</select>

<input
placeholder="Value"
style={{padding:"8px"}}
/>

<button
onClick={()=>removeCondition(c.id)}
style={{background:"red",color:"white",border:"none",cursor:"pointer"}}
>

X

</button>

</div>

))}

<h3 style={{marginTop:"20px"}}>Then</h3>

<button
onClick={addStep}
style={{
background:"none",
border:"none",
color:"#4f46e5",
cursor:"pointer",
marginBottom:"10px"
}}
>

+ Add Next Step

</button>

{steps.map(step => (

<div key={step.id} style={{
display:"flex",
gap:"10px",
marginBottom:"10px"
}}>

<select style={{padding:"8px"}}>

<option>Send Follow-up Message</option>
<option>Send Email</option>
<option>Create Task</option>

</select>

<button
onClick={()=>removeStep(step.id)}
style={{background:"red",color:"white",border:"none",cursor:"pointer"}}
>

X

</button>

</div>

))}

<div style={{marginTop:"20px"}}>

<button
onClick={saveAutomation}
style={{
padding:"10px 20px",
background:"#6366f1",
color:"white",
border:"none",
marginRight:"10px",
cursor:"pointer"
}}
>

Save

</button>

<button
onClick={activateAutomation}
style={{
padding:"10px 20px",
background:"green",
color:"white",
border:"none",
cursor:"pointer"
}}
>

Activate

</button>

</div>

</div>

</div>

</div>

)

}