import { useState } from "react"

function BgColorChange(){
    const[color,setColor]=useState("green")
    return(
  <div className="w-full h-screen duration-200"
  style={{backgroundColor:color}}>

  </div>
    )
}
export default BgColorChange