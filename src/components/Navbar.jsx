import { Link } from "react-router-dom"

export default function Navbar(){

return(

<div style={{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
padding:"20px 40px",
borderBottom:"1px solid #eee"
}}>

<h2>AI BUSINESS AUTOMATION OS</h2>

<div style={{
display:"flex",
gap:"25px",
alignItems:"center"
}}>

<a href="#features">Features</a>
<a href="#solutions">Solutions</a>
<a href="#pricing">Pricing</a>

<Link to="/login">
<button style={{
padding:"8px 16px",
border:"1px solid #ccc",
background:"white",
borderRadius:"6px",
cursor:"pointer"
}}>
Login
</button>
</Link>

<Link to="/signup">
<button style={{
padding:"8px 18px",
background:"#5b5bf7",
color:"white",
border:"none",
borderRadius:"6px",
cursor:"pointer"
}}>
Get Started
</button>
</Link>

</div>

</div>

)

}