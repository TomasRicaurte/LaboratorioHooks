  import { useEffect, useState } from "react";
  import "./App.css";
  import { getColor } from "./color-service";

  export function App() {
    const [counter, setCounter] = useState(0);
    const [color, setColor] = useState("red");

useEffect(() => {
  if (counter >= 3) {
    getColor("blue").then((newColor) => {
      setColor(newColor)
    })
  }
}, [counter])

    return (
      <div>
        <h1>Ada School - React Hooks</h1>

        <div>
          <span className={color}>{`Counter:${counter}`}</span>
        </div>

        <button onClick={() => setCounter(counter + 1)}>Increase</button>
        <button onClick={() => setCounter(counter -1)}>Decrease</button>
        <button onClick={() => setCounter(0)}>Reset</button>
      </div>
    );
  }
