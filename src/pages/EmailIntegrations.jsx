import Sidebar from "../components/Sidebar";

export default function EmailIntegrations(){

const connectGmail=()=>{
alert("Gmail Connected")
}

const connectOutlook=()=>{
alert("Outlook Connected")
}

return(
<>
<Sidebar/>

<div style={{marginLeft:"240px",padding:"40px"}}>

<h1>Email Integrations</h1>

<h3>Gmail</h3>
<button onClick={connectGmail}>Connect</button>

<br/><br/>

<h3>Outlook</h3>
<button onClick={connectOutlook}>Connect</button>

</div>

</>
)

}