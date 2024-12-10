import React, { useState } from "react";

function Filter() {
  const data = [
    {
      name: "Rahul",
      age: 21,
      city: "Gaya",
    },
    {
      name: "Vishal",
      age: 25,
      city: "Patna",
    },
    {
      name: "Shubham",
      age: 31,
      city: "Kolkata",
    },
    {
      name: "Hiritk",
      age: 18,
      city: "Jaipur",
    },
    {
      name: "Taaniya",
      age: 23,
      city: "Kolkata",
    },
    {
      name: "Rohan",
      age: 22,
      city: "Mumbai",
    },
  ];

  const [sorts, setSorts] = useState(data);

  function handleSort(key) {
    const sorted = [...sorts];
    for (let i = 0; i < sorted.length; i++) {
      for (let j = 0; j < sorted.length; j++) {
        if (sorted[i][key] < sorted[j][key]) {
          const temp = sorted[i];
          sorted[i] = sorted[j];
          sorted[j] = temp;
        }
      }
    }
    setSorts(sorted);
  }

  return (
    <div>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="radio"
          name="sort"
          value="name"
          onChange={() => handleSort("name")}
        />
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="radio"
          name="sort"
          value="age"
          onChange={() => handleSort("age")}
        />
        <label htmlFor="city">City</label>
        <input
          id="city"
          type="radio"
          name="sort"
          value="city"
          onChange={() => handleSort("city")}
        />
      </div>

      <table border="1" style={{ borderCollapse: "collapse", width: "50%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {sorts.map((x, index) => (
            <tr key={index}>
              <td>{x.name}</td>
              <td>{x.age}</td>
              <td>{x.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Filter;
