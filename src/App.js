import TypeSection from "./TypeSection";
import "./App.css";
import Stage from "./Stage";
import { useState } from "react";
function App() {
  const [option, setOption] = useState("hiragana");
  return (
    <div className="App">
      <h1 className="title">ppx's kana learning website</h1>
      <TypeSection setOption={setOption} />
      <Stage option={option} />
    </div>
  );
}

export default App;
