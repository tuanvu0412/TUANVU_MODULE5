
import './App.css';
import { useEffect, useState } from 'react';


;

function App() {
  const [counter, setCounter] = useState(0)
  const [count, setCount] = useState(0)
  return (
    <div>
      <h5>Count 1:{counter}</h5>
      <button onClick={() => {
        setCounter((previousCount) => previousCount + 1);
      }}>add 1</button>
      <h5>Count 2:{count}</h5>
      <button onClick={() => {
        setCount((previousCount) => previousCount + 1);
      }}>add 2</button>
    </div>
  );
}

export default App;
