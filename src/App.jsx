import { useState } from "react";
import { Button } from "antd";
import "./App.css";
import Theader from "./Theader";
import Tsider from "./Tsider";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="h-screen flex flex-col ">
      <Theader></Theader>

      <div className="flex h-full">
        <div className=" w-30 bg-amber-900">
          <Tsider></Tsider>
        </div>

        <div className="text-center m-auto ">
          <div>{count}</div>
          <div>
            <Button onClick={() => setCount(count + 1)}>+1</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
