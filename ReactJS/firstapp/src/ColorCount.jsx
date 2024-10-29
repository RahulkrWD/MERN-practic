import React, { useState } from 'react';

function ColorCount() {
    const [value, setValue] = useState({ Blue: 0, Red: 0, Green: 0, Yellow: 0 });
    const [change, setChange] = useState("No Click");
    // pass the color which one can increase
    function increase(color) {
        // setValue((prev) => ({
        //     ...prev,
        //     [color]: prev[color] + 1

        // })
        //setValue({...value, blue: value.blue + 1 });
      // setValue({...value, [color]: value[color] + 1});
      setValue((prev)=>(
        {...prev, [color]: prev[color] + 1}
      ))
      setChange(color)
};

    return (
        <div className='container'>
        <div className='box'>
        <h2>color: {change}</h2>
            <h3 className='text'>Blue Count: {value.Blue}</h3>
            <button className='btn' onClick={() => increase('Blue')} style={{ backgroundColor: 'blue' }}>+1</button>
            <h3 className='text'>Red Count: {value.Red}</h3>
            <button className='btn' onClick={() => increase('Red')} style={{ backgroundColor: 'red' }}>+1</button>
            <h3 className='text'>Green Count: {value.Green}</h3>
            <button className='btn' onClick={() => increase('Green')} style={{ backgroundColor: 'green' }}>+1</button>
            <h3 className='text'>Yellow Count: {value.Yellow}</h3>
            <button className='btn' onClick={() => increase('Yellow')} style={{ backgroundColor: 'yellow',color: 'black' }}>+1</button>
            </div>
        </div>
    );
}

export default ColorCount;
