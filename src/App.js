import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";

function App() {
  const [count, setCount] = useState(0);

  const arttir = () => setCount(count + 1);

  return (
    <div className="container mx-5">
      <div className="my-5 mx-5 baslik">
        <h1>Counter:{count}</h1>
      </div>

      <div className="mx-5 buton">
        <button className="btn btn-warning mx-2 rounded-5" onClick={arttir}>
          Increment
        </button>
        <button
          className="btn btn-dark mx-3 rounded-5"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
        <button
          className="btn btn-danger mx-3 rounded-5 text-dark"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
