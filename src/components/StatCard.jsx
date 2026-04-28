export default function StatCard({title,value}){

return(

<div style={{
border:"1px solid #eee",
padding:"25px",
borderRadius:"10px",
width:"180px"
}}>

<h4>{title}</h4>

<h2>{value}</h2>

</div>

)

}