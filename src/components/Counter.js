import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const storeCounter = useSelector((state) => state.counter);
  console.log({ storeCounter });
  const showCounter = useSelector((state) => state.showCount);
  console.log({ showCounter });
  // useSelector hook is to access store state & get the store state,it accepts function as a 1st param,it gives the initial state snapshot from the store, it accepts second param also a function - equality function whether the component need to be re-render or not, soto say its check the state, if updated react trigger component to re-render, if not nothing happens... note: it will automatically done the subcriber function under the hood for us...
  const increCount = () => {
    dispatch({ type: "increment" });
  };
  const decreCount = () => {
    dispatch({ type: "decrement" });
  };

  const increCountHun = () => {
    dispatch({ type: "increhun", val: 100 });
  };
  const decreCountHun = () => {
    dispatch({ type: "decrehun", val: 100 });
  };
  const toggleCount = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{storeCounter}</div>}
      <div>
        <button onClick={increCount}>Increment</button>
        <button onClick={increCountHun}>Increment by 100</button>
        <button onClick={decreCount}>Decrement</button>
        <button onClick={decreCountHun}>Decrement by 100</button>
      </div>
      <button onClick={toggleCount}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
