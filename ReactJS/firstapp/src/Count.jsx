import React, { useState } from 'react'

function Count() {
    const [count, setCount] = useState(0);
  function inc()
  {
   setCount(count + 1)
  }
  return (
    <div>
       <h1>Count: {count}</h1>
       <button onClick={inc}>Increase</button>
    </div>
  )
}

export default Count
