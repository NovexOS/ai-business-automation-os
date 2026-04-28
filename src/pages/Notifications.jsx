import Sidebar from "../components/Sidebar";

export default function Notifications(){

const markAllRead=()=>{
alert("All notifications marked as read")
}

return(
<>
<Sidebar/>

<div style={{marginLeft:"240px",padding:"40px"}}>

<h1>Notifications</h1>

<ul>

<li>New Lead Received</li>
<li>Follow-up Pending</li>
<li>Lead Converted</li>
<li>Automation Completed</li>

</ul>

<button onClick={markAllRead}>Mark all as read</button>

</div>

</>
)

}