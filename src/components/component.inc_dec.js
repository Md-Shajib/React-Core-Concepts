import { useState } from "react";

function IncDec(){
    const ProductStyle = {
        backgroundColor: '#636e72',
        padding: '10px',
        border: '1px solid #fafafa',
        borderRadius: '8px',
        height: '200px',
        width: '200px',
    }
    const ButtonStyle = {
        backgroundColor: 'skyblue',
        height: '35px',
        padding: '8px 10px',
        borderRadius: '5px'
    }
    const [count, setCount] = useState(5);
    const Decrement = () => {
        setCount(count-1);
    }
    return(
        <div style={ProductStyle}>
            <h3>Count is: {count}</h3>
            <button onClick={() => setCount(count+1)} style={ButtonStyle}>Increment</button>
            <button onClick={Decrement} style={ButtonStyle}>Decrement</button>
        </div>
    );

    
}

export default IncDec;