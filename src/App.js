// import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState();
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  // rerender 될때마다 매번 실행시키고 싶지 않을 때 딱 한 번만 실행(이를테면 api 호출이라던가)
  useEffect(() => {
    console.log("CALL THE API...");
  }, []);
  return (
    <div>
      <h1 className={styles.title}>WELCOME</h1>
      <input value={keyword} onChange={onChange} placeholder="Search here" type="text" />
      <h2>{counter}</h2>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
