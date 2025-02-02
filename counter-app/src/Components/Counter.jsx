import React, { useState } from 'react';

function Counter() {

    const [count, setCount] = useState(0);

    const onIncrementClicked = () => {  
        setCount(count + 1);
    };

    const onDecrementClicked = () => {  
      if (count > 0) {
          setCount(count - 1);
      }
  };

    const onResetClicked = () => {  
        setCount(0);
    };

  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={onDecrementClicked}>-</button>
        <button onClick={onResetClicked}>Reset</button>
        <button onClick={onIncrementClicked}>+</button>
      </div>
    </div>
  )
}

export default Counter;