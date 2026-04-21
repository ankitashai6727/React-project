import { useCallback, useState } from "react";

function PasswordGen(){
    const[lenght,setLenght]=useState(4);
    const[allowNum,setAllowNum]=useState(false);
    const[allwedChar,setAllowChar]=useState(false);
    const[password,setPassword]=useState();
    const passwordgenrator= useCallback(()=>{
        let pass=""
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (allowNum) str+="01234567890"
        if(allwedChar)str+="!@#$%^&**()_+{}[]"
        for (let index = 1; index <= array.length; index++) {
            let char= Math.floor(Math.random()*str.length+1);
            pass= str.charAt(char)
            setPassword(pass)
            
        }
            
        
    },[lenght, allwedChar,allowNum,setPassword])
    return(
        <div className='w-full max-w-md mx-auto  rounded-lg
         px-4 my-8 text-pink-600 bg-gray-500'
        > <h1 className="text-white text-center my-4 mx-3"
        >Passgenrator</h1>
             <div className='className="flex shadow rounded-lg overFlow-hidden
         mb-4"'
        >
            <input type="text"
             value={password}
             className="outline-none  w-full px-3 py-1"
             placeholder="Password"
             readOnly
             />
                 <button className="outline-none bg-blue-500 text-white px-3 py-1
                 srink-0 text-center ">Copy</button>
            
           
        </div>
        <div >

        </div>
        </div>
    )
}
export default PasswordGen;