
import './App.css';
import { useEffect, useState } from 'react';

function useCounter() {
  const [count, setCount] = useState(0);

  const fisrtNum = () => {
    setCount(count + 1);
  };

  const secondNum = () => {
    setCount(count + 2);
  };

  return [count, fisrtNum, secondNum];
}

function Counter1() {
  const [count, fisrtNum, secondNum] = useCounter();

  return (
    <>
      <div>
        <h2>Counter 1</h2>
        <p>Count: {count}</p>
        <button onClick={fisrtNum}>Add 1</button>
      </div>
      <div>
        <h2>Counter 2</h2>
        <p>Count: {count}</p>
        <button onClick={secondNum}>Add 2</button>
      </div>
    </>
  );
}

function App() {
  return (
    <div>
      <Counter1 />
    </div>
  );
}

export default App;
