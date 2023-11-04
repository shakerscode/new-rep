import { useState } from "react";
import "./App.css";
import SyllabusGenerator from "./generator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <SyllabusGenerator />
      </div>
    </>
  );
}

export default App;
