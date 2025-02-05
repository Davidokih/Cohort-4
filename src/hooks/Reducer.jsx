import { useReducer } from "react";

const reducer = (state, action)   => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - 1 };

    default:
      break;
  }
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  // const [change,setChange]= useState(name)

  // const changeState = ()=>{
  //   setChange('Grace')
  // }
  // console.log(name)

  console.log(state);
  return (
    <div>
      <div>{state.count}</div>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        increse by 1
      </button>
      <button onClick={() => dispatch({ type: "increment", payload: 2 })}>
        increase by 2
      </button>
      <button onClick={() => dispatch({ type: "increment", payload: 3 })}>
        increase by 3
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>minus</button>
    </div>
  );
};

export default Reducer;
