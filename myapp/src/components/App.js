import React, { createContext, useContext, useState } from "react";
import External from "./External";

const userGlobal = createContext();

export default function App () {
  const [user] = useState("React");
  return (
    <userGlobal.Provider value={user}>
      <h1>Parent Component {user}</h1>
      <Child1 />
      <External userGlobal = {userGlobal}/>
    </userGlobal.Provider>
  );
}

const Child1 = () => {
  const user1 = useContext(userGlobal);
  return (
    <>
      <h1>Child 1 Component {user1}</h1>
      <Child2 />
    </>
  );
}

const Child2 = () => {
  const user = useContext(userGlobal)
  return (
    <>
      <h1>Child 2 Component {user}</h1>
    </>
  );
}