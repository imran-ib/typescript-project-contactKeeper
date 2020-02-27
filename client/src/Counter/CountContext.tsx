import * as React from "react";

type Action = { type: string; payload?: any };
type Dispatch = (action: Action) => void;

type CountProviderProps = { children: React.ReactNode };

// State Canbe Anything
type State = { count: number };

const CountStateContext = React.createContext<State | undefined>(undefined);
const CountDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
);

function countReducer(state: State, action: Action) {
  switch (action.type) {
    case "increment": {
      // return { count: action.payload };
      return { count: state.count + 1 };
    }
    case "decrement": {
      // return { count: action.payload };
      return { count: state.count - 1 };
    }
    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }
  }
}
const inititialState = { count: 0 };

function CountProvider({ children }: CountProviderProps) {
  const [state, dispatch] = React.useReducer(countReducer, inititialState);
  return (
    <CountStateContext.Provider value={state}>
      <CountDispatchContext.Provider value={dispatch}>
        {children}
      </CountDispatchContext.Provider>
    </CountStateContext.Provider>
  );
}

function useCountState() {
  const context = React.useContext(CountStateContext);
  if (context === undefined) {
    throw new Error("useCountState must be used within a CountProvider");
  }
  return context;
}
function useCountDispatch() {
  const context = React.useContext(CountDispatchContext);
  if (context === undefined) {
    throw new Error("useCountDispatch must be used within a CountProvider");
  }
  return context;
}
export { CountProvider, useCountState, useCountDispatch };
