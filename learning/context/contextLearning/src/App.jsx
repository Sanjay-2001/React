
import "./App.css";
import Counter from "./components/Counter";
import {  useCounter } from "./context/CounterContext";

function App() {
  const counterState = useCounter();
  console.log(counterState);
  return (
    <>
      <h1>Count is {counterState.count}</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </>
  );
}

export default App;
