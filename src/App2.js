import { useState } from 'react';

function App2() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const onChange = (event) => setTodo(event.target.value);
    const onSubmit = (event) => {
        // 어떤 이벤트를 명시적으로 처리하지 않은 경우 기본 동작을 실행하지 않음
        event.preventDefault();
        if (todo === "") {
            return;
        }
        setTodos((currentArray) => [todo, ...currentArray]);
        setTodo("");
    };
    return (
    <div>
        <h2>My To dos {todos.length} </h2>
        <form onSubmit={onSubmit}>
            <input onChange={onChange} value={todo} type="text" placeholder="Write your to do.." />
            <button type="submit">Add todo</button>
        </form>
        <hr />
        <ul>
            {todos.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
    );
}
export default App2;