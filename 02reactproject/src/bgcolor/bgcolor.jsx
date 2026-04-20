import { useState } from "react"

function BgColorChange(){
    const[color,setColor]=useState("green")
    return(
  <div className="w-full h-screen duration-200"
  style={{backgroundColor:color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 bg-white px-4 py-4 rounded-xl ">
        <button onClick={()=>setColor("red")}
        className="  outline-none px-2 py-2 rounded-full"
          style={{backgroundColor:"red"}}>Red </button>
           <button onClick={()=>setColor("blue")} 
           className="  outline-none px-2 py-2 rounded-full"
          style={{backgroundColor:"blue"}}>blue </button>
           <button onClick={()=>setColor("yellow")}
           className="  outline-none px-2 py-2 rounded-full"
          style={{backgroundColor:"yellow"}}>yellow</button>
               <button onClick={()=>setColor("pink")}
               className="  outline-none px-2 py-2 rounded-full"
          style={{backgroundColor:"pink"}}>pink</button>
               <button onClick={()=>setColor("olive")}
                className="  outline-none px-2 py-2 rounded-full"
          style={{backgroundColor:"olive"}}>olive</button>
          <button onClick={()=>setColor("orange")}
           className="  outline-none px-2 py-2 rounded-full"
          style={{backgroundColor:"orange"}}>orange</button>
          <button onClick={()=>setColor("darkgreen")}
           className="  outline-none px-2 py-2 rounded-full"
          style={{backgroundColor:"darkgreen"}}>darkgreen</button>
              
      </div>

    </div>

  </div>
    )
}
export default BgColorChange