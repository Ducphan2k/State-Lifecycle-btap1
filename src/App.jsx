import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [isExpand, setIsExpand] = useState(false);
  const handler = () => {
    setIsExpand(!isExpand);
  };

  return (
    <div>
      <h2>Conditional Rendering</h2>
      {isExpand === false ? (
        <button onClick={handler}>Xem giới thiệu</button>
      ) : (
        <div>
          <button onClick={handler}>Đóng giới thiệu</button>
          <p>Nội dung giới thiệu</p>
        </div>
      )}
    </div>
  );

}

export default App;
