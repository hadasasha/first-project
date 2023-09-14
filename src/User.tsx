import { useState } from "react"


interface UserProps{

  firstName: string
  lastName : string
}



export default function User({firstName, lastName}: UserProps) {
  const  [count, setCount]= useState(0)
  return (
    <div>
<p>hi {firstName} {lastName}</p>
<div>{count}</div>
    </div>
  )
}
