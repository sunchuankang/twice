import { useState } from "react";
import { Button } from "antd";
import "./App.css";
import Theader from "./Theader";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="h-screen flex flex-col gap-4">
      <Theader></Theader>

      <div>{count}</div>
      <div>
        <Button onClick={() => setCount(count + 1)}>+1</Button>
      </div>
    </div>
  );
}

export default App;
