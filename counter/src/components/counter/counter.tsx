import { useState } from "react";
import React from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function minus() {
    setCount(count - 1);
  }

  function plus() {
    setCount(count + 1);
  }

  return(
  <div className="counter">
    <button onClick={minus}>-</button>
    <input type="text" value={count}></input> 
    <button onClick={plus}>+</button>
  </div>
  )
}

export default Counter;