import React, { useState } from 'react'

const App = () =>{

const [user, setchangeUser] = useState("Anil Kumar")
const [num, setNum] = useState(0)

const changeUser = () =>{
  console.log("Done")
  setchangeUser("Rahul Sharma")
}
const changeUser = () =>{
  console.log("Done")
  setchangeUser("Babita Bhabhi"
}
  return(
    <div>
      <h1>UserName is {user}</h1>
      <button onClick={changeUser}>Change User Name</button>


      <h3>Number is {num}</h3>
      <button onClick={ ()=>setNum(num+1)}>Increment</button>
      <button onClick={ ()=>setNum(num-1)}>Decrement</button>
    </div>

  )
}

export default App
