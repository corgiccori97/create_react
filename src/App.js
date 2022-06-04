// import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("created :)");
    return () => console.log("destroyed :(");
  }, []);
  return <h1>Hello</h1>;
}
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  const onShow = () => setShowing((prev) => !prev);
  
  console.log("i run all the time");
  // rerender 될때마다 매번 실행시키고 싶지 않을 때 딱 한 번만 실행(이를테면 api 호출이라던가)하고 싶다면 useeffect []를 빈칸으로 둘 것, counter나 keyword가 바뀔 때마다(dependency) 실행하고 싶다면 []에 넣어줄 것.
  useEffect(() => {
    console.log("I run only once.");
  }, []);
  useEffect(() => {
    if (keyword !== "") {
      console.log("I run when 'keyword' changes.");
    }
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);

  return (
    <div>
      <h1 className={styles.title}>WELCOME</h1>
      <input value={keyword} onChange={onChange} placeholder="Search here" type="text" />
      <h2>{counter}</h2>
      <button onClick={onClick}>click me</button>
      {showing ? <Hello /> : null}
      <button onClick={onShow}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
