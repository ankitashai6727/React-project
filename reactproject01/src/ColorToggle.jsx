import { useState } from "react";

function ColorToogle() {
    const [color, setColor] = useState("pink")
    const Toggle = () => {
        setColor(color === "pink" ? "green" : "pink")
    }
    return (
        <div style={{
            backgroundColor: color, height: "100vh",
            justifyContent: "center", alignItems: "center", display: "flex"
        }}>
            <button style={{
                backgroundColor: color === "pink" ? "green" : "pink",
                padding: "30px", borderRadius:"10px"
            }} onClick={Toggle}>Click Here</button>
        </div>
    )
}