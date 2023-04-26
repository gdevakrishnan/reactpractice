import React, { useReducer } from "react";

function Counter(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      alert("Invalid action");
  }
}

export default function App() {
  const [Count, dispatch] = useReducer(Counter, 0);
  
  return (
    <>
      <h1>The Counter is: {Count}</h1>
      <button onClick={() => dispatch({type: "increment"})}>increment</button>
      <button onClick={() => dispatch({type: "decrement"})}>decrement</button>
    </>
  );
}