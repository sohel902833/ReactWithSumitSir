import React from "react";
import { useReducer } from "react";
import Counter from "./components/Counter";
import ComplexCounter from "./components/ComplexCounter";
import Counter3 from "./components/Counter3";
import ComponentA from "./components/ComponentA";

export const counterContext = React.createContext();


const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
      break;
    case "decrement":
      return state - 1;
      break;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, 9);

  return (
    <>
      <h1>Use Reducer.</h1>
      <h1>Global State </h1>
      <h2>Count: {count}</h2>
      <counterContext.Provider value={{countDispatch:dispatch}}>
        <ComponentA />
      </counterContext.Provider>
      <Counter />
      <h1>Complex Counter</h1>
      <ComplexCounter />
      <h1>Counter 3</h1>
      <Counter3 />
    </>
  );
}
export default App;
