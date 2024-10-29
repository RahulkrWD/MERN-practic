import React, { useState } from "react";
const data = [
    { name: "Apple", price: 50, quantity: 0 },
    { name: "Banana", price: 30, quantity: 0 }
]
export default function Obj() {
    const [value, setValue] = useState(data);
    

    // const increment = (index) => {
    //     const updatedValue = value.map((item) => 
    //        item.name  === index ? { ...item, quantity: item.quantity + 1 } : item
    //     );
    //     setValue(updatedValue);
    // };
    function increment(index){
        const update = value.map((x)=>{
            if(x.name === index){
                const basePrice = data.find(item => item.name === x.name).price;
                return {...x, quantity: x.quantity + 1 , price: basePrice * (x.quantity + 1)}
            }
            return x;
             
    })
    setValue(update)   
    
        
    }
    return (
        <div>
            {value.map((x, index) => (
                <div key={index}>
                    <h3>Fruit: {x.name}</h3>
                    <h3>Price: {x.price}</h3>
                    <h3>Quantity: {x.quantity}</h3>
                    <button onClick={() => increment(x.name)}>Click</button>
                </div>
            ))}
        </div>
    );
}
