import { useState } from "react";

export default function App() {
  const [Count, setCount] = useState(0);
  const [Message, setMessage] = useState("");
  const Increment = () => {
    if (Count < 10) {
      setCount(Count + 1);
    } else {
      setMessage("The maximum count is 10")
      setTimeout(() => {
        setMessage("")
      }, 3200);
    }
  }

  const Decrement = () => {
    if (Count > 0) {
      setCount(Count - 1);
    } else {
      setMessage("The minimum count is 0")
      setTimeout(() => {
        setMessage("")
      }, 3200);
    }
  }

  return (
    <>
      <h1>{`The Count is ${Count}`}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <p>{Message}</p>
    </>
  );
}