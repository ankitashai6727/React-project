import { useState } from "react"

function Counter() {
    const[counter, setCounter]=useState(15)
    //let counter = 15

    const AddValue = () => {
        setCounter(counter + 1)

    }
    const RemoveValue = () => {
        setCounter(counter-1)

    }

    return (<div style={{
        backgroundColor: "#b7afaf",
        color: "red",
        alignContent: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "100vh"
    }}>
        <h1>React Project Counter!</h1>
        <h2>Counter value:{counter}</h2>

        <button style={{
            color: "black",
            backgroundColor: "aqua",
            padding: "20px",
            borderRadius: "10px",
            borderStyle:"none"
        }} onClick={AddValue}> Add value: {counter}</button>
        <br />
        <button 
        style={{color: "black",
            backgroundColor: "aqua",
            padding: "20px",
            borderRadius: "10px",
            borderStyle:"none"}}
         onClick={RemoveValue}> Remove Value: {counter}</button>
    </div>

    )
}
export default Counter;