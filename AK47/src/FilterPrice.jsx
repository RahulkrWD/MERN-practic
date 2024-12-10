import React, { useState } from "react";

function FilterPrice() {
  const data = [
    {
      items: "Pizza",
      price: 149,
    },
    {
      items: "Burgur",
      price: 99,
    },
    {
      items: "Chawming",
      price: 40,
    },
    {
      items: "Sandwich",
      price: 199,
    },
    {
      items: "ladu",
      price: 19,
    },
    {
      items: "Samosa",
      price: 29,
    },
  ];

  const [value, setValue] = useState(data);

  function handleSort(index) {
    const sorted = [...value];
    for (let i = 0; i < value.length; i++) {
      for (let j = 0; j < value.length; j++) {
        if (sorted[i][index] < sorted[j][index]) {
          const swap = sorted[j];
          sorted[j] = sorted[i];
          sorted[i] = swap;
        }
      }
    }
    setValue(sorted);
  }

  return (
    <div>
      <div>
        <h4>Sort By</h4>
        <label htmlFor="items">Items</label>
        <input
          name="sort"
          id="items"
          value="items"
          type="radio"
          onChange={() => handleSort("items")}
        />

        <label htmlFor="price">Price</label>
        <input
          name="sort"
          type="radio"
          id="price"
          value="price"
          onChange={() => handleSort("price")}
        />
      </div>
      <table border={1} style={{ width: "50%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Items</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {value.map((x, index) => (
            <tr key={index}>
              <td>{x.items}</td>
              <td>{x.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FilterPrice;
