import { useState } from "react";
import "./App.css";

// Small Project Counter 1

function App() {
  let [counter, setCounter] = useState(0);
  const addValue = () => {
    if (counter <= 19) {
      counter = counter + 1;
      setCounter(counter);
    } else {
      alert("Uour Value is 20 Plus");
    }
  };

  const removeValue = () => {
    if (counter >= 1) {
      setCounter(counter - 1);
    } else {
      alert("Increase Your  Value b/c your value is 0 ");
    }
  };

  return (
    <>
      <h1>Counter App with React</h1>
      <h2>Counter Value: {counter}</h2>
      <div style={{display:"flex",alignItems:"center",padding:"73px"}}>
        <button onClick={addValue}>Add Value</button>
        <button onClick={removeValue}>Remove Value</button>
      </div>
    </>
  );
}

export default App;
