import React, { useMemo, useState } from "react";

function Memocomponent(props) {
  const {a,b} = props;
  const result = useMemo(() => {
    return a+b;
  }, [a, b])
  return <h1>{a} + {b} = {result}</h1>
}

export default function App() {
  const [Count, setCount] = useState(0);

  const a = Count;
  const b = Count * 2;


  return (
    <>
      <h1>{a}</h1>
      <h1>{b}</h1>
      <h1>The Count is: { Count }</h1>
      <button onClick={() => setCount(Count + 1)}>Increment</button>
      <Memocomponent a = {a} b = {b}/>
    </>
  );
}