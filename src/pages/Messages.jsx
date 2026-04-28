import Sidebar from "../components/Sidebar"

export default function Messages(){

return(

<div>

<Sidebar/>

<div style={{
marginLeft:"240px",
padding:"40px"
}}>

<h1>Messages</h1>

<div style={{
background:"white",
padding:"30px",
width:"600px",
borderRadius:"8px",
boxShadow:"0 0 10px rgba(0,0,0,0.1)"
}}>

<p>No messages yet</p>

</div>

</div>

</div>

)

}