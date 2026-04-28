import Sidebar from "../components/Sidebar"
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, PieChart, Pie, Cell } from "recharts"

export default function Dashboard(){

const leads = JSON.parse(localStorage.getItem("leads")) || []

const totalLeads = leads.length

const newLeads = leads.filter(l=>l.status==="New").length

const contacted = leads.filter(l=>l.status==="Contacted").length

const converted = leads.filter(l=>l.status==="Converted").length


const leadGrowthData = [

{month:"Jan",leads:5},
{month:"Feb",leads:8},
{month:"Mar",leads:12},
{month:"Apr",leads:20},
{month:"May",leads:30}

]


const automationData = [

{name:"Sent",value:120},
{name:"Delivered",value:90},
{name:"Failed",value:30}

]

const COLORS = ["#6366F1","#22C55E","#EF4444"]


return(

<div style={{display:"flex"}}>

<Sidebar/>

<div style={{marginLeft:"240px",padding:"40px",width:"100%"}}>

<h1>Dashboard</h1>


{/* Stats Cards */}

<div style={{
display:"grid",
gridTemplateColumns:"repeat(4,1fr)",
gap:"20px",
marginTop:"30px"
}}>

<div style={{border:"1px solid #ddd",padding:"20px"}}>
<h3>Total Leads</h3>
<h1>{totalLeads}</h1>
</div>

<div style={{border:"1px solid #ddd",padding:"20px"}}>
<h3>New Leads</h3>
<h1>{newLeads}</h1>
</div>

<div style={{border:"1px solid #ddd",padding:"20px"}}>
<h3>AI Replied</h3>
<h1>{contacted}</h1>
</div>

<div style={{border:"1px solid #ddd",padding:"20px"}}>
<h3>Pending Followups</h3>
<h1>{converted}</h1>
</div>

</div>


{/* Charts */}

<div style={{
display:"flex",
gap:"40px",
marginTop:"40px"
}}>

<div>

<h3>Lead Growth</h3>

<LineChart width={400} height={250} data={leadGrowthData}>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="month" />
<YAxis />
<Tooltip />
<Line type="monotone" dataKey="leads" />
</LineChart>

</div>


<div>

<h3>Automation Activity</h3>

<PieChart width={300} height={250}>

<Pie
data={automationData}
dataKey="value"
cx="50%"
cy="50%"
outerRadius={80}
label
>

{automationData.map((entry,index)=>(
<Cell key={index} fill={COLORS[index]} />
))}

</Pie>

<Tooltip />

</PieChart>

</div>

</div>

</div>

</div>

)

}