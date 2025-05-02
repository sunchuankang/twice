import { useState } from "react";
import { Button } from "antd";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="h-screen flex gap-4 justify-center items-center">
      <div>{count}</div>
      <div>
        <Button onClick={() => setCount(count + 1)}>+1</Button>
      </div>
    </div>
  );
}

export default App;
