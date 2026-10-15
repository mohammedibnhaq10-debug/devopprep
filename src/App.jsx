import { useState } from "react";
function App(){
const [contact,usecontact]=useState([])
const [name,usename]=useState("")
const [email,useemail]=useState("")
const [phone,usephone]=useState("")

function add(e){
  e.preventDefault();
  const user={
    name,email,phone
  }
  usecontact([...contact,user]);
  e.target.reset();
}
return(
  <div>
    <form onSubmit={add}>
      <input type="text" value ={name}  onChange={(e)=>usename(e.target.value)}></input>
      <input type="email" value ={email}  onChange={(e)=>useemail(e.target.value)}></input>
      <input type="number" value ={phone}  onChange={(e)=>usephone(e.target.value)} min="600000000" max="9999999999"></input>
      <button type="submit">Add</button>      
    </form>
    {contact.map((m)=>(
      
        <p>{m.name}-------{m.email}-------{m.phone}</p>
        
    ))}
    </div>
)
}
export default App;