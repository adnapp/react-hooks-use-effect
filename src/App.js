import React, { useState, useEffect } from "react";
import Clock from "./Clock";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [showClock, setShowClock] = useState(true);

  useEffect(() => {
    document.title = text;
  }, [text]);

  useEffect(() => {
    setTimeout(() => setCount(0), 5000);
  }, []);

  console.log("Component rendering");

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        I've been clicked {count} times
      </button>
      <input
        type="text"
        placeholder="Type away..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {showClock ? <Clock /> : null}
      <button onClick={() => setShowClock(false)}>Hide Clock</button>
    </div>
  );
}

export default App;
