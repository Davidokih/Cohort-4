import React, { useEffect } from "react";

const CallbackMemo = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  useEffect(() => {
    console.log("hello ");
  }, [count]);
  return (
    <div>
      <div>count: {count}</div>
      <div>count: {count}</div>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CallbackMemo;
