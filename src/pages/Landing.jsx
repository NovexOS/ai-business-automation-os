import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"

export default function Landing(){

return(

<div>

<Navbar/>

{/* HERO SECTION */}

<section style={{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
padding:"80px"
}}>

<div>

<h1 style={{fontSize:"48px"}}>
Automate Your Business with AI
</h1>

<p style={{marginTop:"20px"}}>
Capture leads, reply instantly and automate follow-ups.
</p>

<div style={{marginTop:"30px"}}>

<Link to="/signup">
<button style={{
padding:"14px 28px",
background:"#5b5bf7",
color:"white",
border:"none",
borderRadius:"6px"
}}>
Start Free
</button>
</Link>

<Link to="/login">

<button style={{
padding:"14px 28px",
marginLeft:"10px"
}}>
See Demo
</button>

</Link>

</div>

</div>

<img
src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png"
width="280"
/>

</section>


{/* FEATURES SECTION */}

<section
id="features"
style={{padding:"60px"}}
>

<h2>Features</h2>

<div style={{
display:"flex",
gap:"30px",
marginTop:"30px"
}}>

<div>
<h3>Lead Capture</h3>
<p>Collect leads automatically</p>
</div>

<div>
<h3>AI Reply</h3>
<p>Instant AI responses</p>
</div>

<div>
<h3>Follow Ups</h3>
<p>Automated follow ups</p>
</div>

<div>
<h3>Analytics</h3>
<p>Track growth and conversion</p>
</div>

</div>

</section>


{/* SOLUTIONS SECTION */}

<section
id="solutions"
style={{padding:"60px",background:"#f7f7f7"}}
>

<h2>Solutions</h2>

<div style={{
display:"flex",
gap:"30px",
marginTop:"30px"
}}>

<div>
<h3>Lead Management</h3>
<p>Organize and track all leads in one place.</p>
</div>

<div>
<h3>AI Chat Automation</h3>
<p>Automatically respond to customers using AI.</p>
</div>

<div>
<h3>Sales Automation</h3>
<p>Automate follow-ups and close deals faster.</p>
</div>

</div>

</section>


{/* PRICING SECTION */}

<section
id="pricing"
style={{padding:"60px"}}
>

<h2>Pricing</h2>

<div style={{
display:"flex",
gap:"40px",
marginTop:"30px"
}}>

<div style={{
border:"1px solid #ddd",
padding:"30px",
borderRadius:"10px"
}}>

<h3>Starter</h3>
<h2>$19/mo</h2>

<p>Basic CRM</p>
<p>Lead Capture</p>
<p>Email Support</p>

<button style={{
marginTop:"20px",
padding:"10px 20px"
}}>
Choose Plan
</button>

</div>


<div style={{
border:"1px solid #ddd",
padding:"30px",
borderRadius:"10px"
}}>

<h3>Pro</h3>
<h2>$49/mo</h2>

<p>AI Replies</p>
<p>Automation Builder</p>
<p>Analytics</p>

<button style={{
marginTop:"20px",
padding:"10px 20px"
}}>
Choose Plan
</button>

</div>

</div>

</section>


</div>

)

}