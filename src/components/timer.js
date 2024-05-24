import { useState, useEffect } from "react";

function Timeranzeige() {
    const [timer,setTimer] = useState(Math.floor(Math.random()* 10));
    
    useEffect(() => {
    
    const ticker = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
    }, 1000);
    return () => clearInterval(ticker);
}, [timer]);

    
    return (
        <div>
            <h1>Verbleibende Zeit: {timer > 0 ? `${timer} Sekunden` : "Angebot abgelaufen"}</h1>
        </div>
    )
};

export default Timeranzeige;