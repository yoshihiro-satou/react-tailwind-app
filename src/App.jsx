import { useState, useEffect } from "react";
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
  }); // 依存配列がない

  return (
    <>
      <div>{count}</div>
    </>
  )
}

export default App
