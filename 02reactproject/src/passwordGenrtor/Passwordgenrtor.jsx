import { useCallback, useEffect, useRef, useState } from "react";

function PasswordGen() {
    const [lenght, setLenght] = useState(4);
    const [allowNum, setAllowNum] = useState(false);
    const [allwedChar, setAllowChar] = useState(false);
    const [password, setPassword] = useState();
    // useRef hook
    const passwordRef=useRef(null)
    const passwordgenrator = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (allowNum) str += "01234567890"
        if (allwedChar) str += "!@#$%^&**()_+{}[]"
        for (let index = 1; index <=length; index++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char)
            setPassword(pass)

        }


    }, [lenght, allwedChar, allowNum, setPassword])
    const copypasswordToclipBorad=useCallback(()=>{
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0,100)
        window.navigator.clipboard.writeText(password)

    },[password])
    useEffect(()=>{passwordgenrator()},[length,allowNum,allwedChar,setPassword])
    return (
        <div className='w-full max-w-md mx-auto  rounded-lg
         px-4 my-8 text-blue-100 bg-gray-500'
        > <h1 className="text-white text-center my-4 mx-3"
        >Passwordgenrator</h1>
            <div className='className="flex shadow rounded-lg overFlow-hidden
         mb-4"'
            >
                <input type="text"
                    value={password}
                    className="outline-none  w-full px-3 py-1"
                    placeholder="Password"
                    readOnly
                    ref={passwordRef}
                />
                <button onClick={copypasswordToclipBorad}
                 className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0
                 ">Copy</button>



            </div>
            <div className="'flex text-sm gap-x-2">
                <div className="flex items-center gap-x-1">
                    <input type="range"
                        min={6}
                        max={100}
                        value={lenght}
                        className="cursor-pointer"
                        onChange={(e) => { setLenght(e.target.value) }}
                    />
                    <label >lenght:{lenght}</label>
                </div>
                <div className="flex items-center gap-x-1">
                    <input type="checkbox"
                        defaultChecked={allowNum}
                        id="NumberInput"
                        onChange={() => {
                            setAllowNum(pre => !pre);

                        }}
                    />
                    <label htmlFor="NumberInput">:Numbers</label>

                </div>
                <div className="flex items-center gap-x-1">
                    <input type="checkbox"
                        defaultChecked={allwedChar}
                        id="Charinput"
                        onChange={() => {
                            setAllowChar(pre => !pre);

                        }}
                    />
                    <label htmlFor="charinput">:Char</label>

                </div>

            </div>
        </div>
    )
}
export default PasswordGen;