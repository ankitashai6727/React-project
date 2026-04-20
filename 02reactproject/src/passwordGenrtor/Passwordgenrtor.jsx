import { useCallback, useState } from "react";

function PasswordGen(){
    const[lenght,setLenght]=useState(4);
    const[allowNum,setAllowNum]=useState(false);
    const[allwedChar,setAllowChar]=useState(false);
    const[password,setPassword]=useState(true);
    const passwordGenrator=useCallback(fn,[])
    return(
        <div style={{backgroundColor:"grey",height:"100vh"}}>
        <h1 className="text-4xl text-center text-white px-3 py-4"> PasswordGenrtor
        </h1>
        </div>
    )
}
export default PasswordGen;