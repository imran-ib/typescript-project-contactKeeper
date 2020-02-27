import React from "react";

import { CountProvider, useCountDispatch, useCountState } from "./CountContext";

const Counter = () => {
  // Consider it Seperate Component
  const ShowCount = () => {
    const { count } = useCountState();
    return <h1>Counter: {count}</h1>;
  };
  // Consider it Seperate Component
  const CountFunctinality = () => {
    const dispatch = useCountDispatch();
    return (
      <>
        <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
          Increase
        </button>
        <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
          Descrease
        </button>
      </>
    );
  };
  // Parent Component
  return (
    <CountProvider>
      <ShowCount />
      <CountFunctinality />
    </CountProvider>
  );
};

export default Counter;
