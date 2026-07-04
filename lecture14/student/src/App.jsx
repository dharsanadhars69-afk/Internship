import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(3);

  const students = [
    {
      id: 1,
      name: "Rahul",
      age: 20,
      city: "Chennai",
      marks: 95,
      course: "React",
    },
    {
      id: 2,
      name: "Priya",
      age: 21,
      city: "Coimbatore",
      marks: 82,
      course: "",
    },
    {
      id: 3,
      name: "Arun",
      age: 22,
      city: "Madurai",
      marks: 70,
      course: "Java",
    },
    {
      id: 4,
      name: "Meena",
      age: 19,
      city: "Salem",
      marks: 91,
      course: "Python",
    },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Student Details</h1>

      <h3>Student Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase Student Count
      </button>

      <hr />

      {students
        .filter((student) => student.marks > 75)
        .map((student) => (
          <div
            key={student.id}
            style={{
              border: "1px solid black",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h2>{student.name}</h2>

            <p>Age: {student.age}</p>

            <p>City: {student.city}</p>

            <p>Marks: {student.marks}</p>

            {student.marks > 90 && (
              <p style={{ color: "green" }}>
                <b>Topper</b>
              </p>
            )}

            {student.course && <p>Course: {student.course}</p>}
          </div>
        ))}
    </div>
  );
}

export default App;