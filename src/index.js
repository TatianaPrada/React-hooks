import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { FaStar } from "react-icons/fa";

const createArray = (length) => [...Array(length)];

function Star({ selected = false, onSelect }) {
  return <FaStar color={selected ? "blue" : "gray"} onClick={onSelect} />;
}

function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStarts] = useState(0);
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStarts(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars}
      </p>
    </>
  ); 
}

function App() {
  const [checked, setChecked] = useState();
  const [name, setName] = useState("Jan")
  useEffect(()=>{
    document.title = `Celebrate ${name}`
  })
  return (
    <>
    <div>
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked(!checked)}
      />
      <p>{checked ? "checked" : "not checked"}</p>
      <StarRating totalStars={10} />
    </div>
    <section>
      <p> Congratulations {name}</p>
      <button onClick={() =>setName("Will")}> Change Winner</button>
    </section>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById("root")
);
