import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

/**
 *  EXAMPLE WITH HOOKS
 */
const Counter = () => {
  // Autmatically sets a subscription to the store for this component.
  // When state changes, this component will be updated.
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const show = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const increaseHandler = () => {
    dispatch({ type: "increase", amount: 5 });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment +5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter; // hooks

// ===============================================================

/**
 *  EXAMPLE WITH CONNECT INJECTING PROPS.
 *  Class and functional component
 */

// const Counter = ({ counter, increment, decrement }) => {
//   const toggleCounterHandler = () => {};

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{counter}</div>
//       <div>
//         <button onClick={increment}>Increment</button>
//         <button onClick={decrement}>Decrement</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" })
//   };
// };

// // Connect returns a new function, which calls with Counter2 as param
// // connect() is a HOC, takes in 2 args,
// // - the first, maps redux state to props
// // - the second,
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
