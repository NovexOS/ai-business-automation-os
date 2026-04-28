import { useNavigate } from "react-router-dom"

export default function BusinessSetup(){

const navigate = useNavigate()

function continueSetup(){
navigate("/dashboard")
}

return(

<div style={{
display:"flex",
justifyContent:"center",
alignItems:"center",
height:"100vh"
}}>

<div style={{
width:"500px",
padding:"40px",
border:"1px solid #eee",
borderRadius:"10px"
}}>

<h2>Let's set up your business</h2>

<input placeholder="Business Name" style={{width:"100%",marginTop:"20px",padding:"10px"}}/>

<input placeholder="Industry" style={{width:"100%",marginTop:"10px",padding:"10px"}}/>

<input placeholder="Phone Number" style={{width:"100%",marginTop:"10px",padding:"10px"}}/>

<input placeholder="Business Email" style={{width:"100%",marginTop:"10px",padding:"10px"}}/>

<input placeholder="Website (optional)" style={{width:"100%",marginTop:"10px",padding:"10px"}}/>

<input placeholder="City" style={{width:"100%",marginTop:"10px",padding:"10px"}}/>

<button
onClick={continueSetup}
style={{
width:"100%",
marginTop:"20px",
padding:"12px",
background:"#5b5bf7",
color:"white",
border:"none",
borderRadius:"6px"
}}
>
Continue
</button>

</div>

</div>

)
}