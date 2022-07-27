import React, { useEffect, useState } from 'react'

function Counter(){
   let count =0;
    const [counter,setCounter] = useState(count);

    useEffect(()=>{
        console.log('I re-rendered');
    });


    function increment(){
        return setCounter(counter+1)
    }
    function decrement(){
        return setCounter(counter-1);
    }
  
    return (
    <div>
        <h1>Counter</h1>
        <h2>{counter}</h2>
        <div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            
        </div>

    </div>
  )
}

export default Counter;

