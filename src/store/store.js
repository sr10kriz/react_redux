import { createStore } from "redux";

const initialState = { counter: 0, showCount: true };

const storeReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1, showCount: state.showCount };
  }
  if (action.type === "decrement") {
    return { counter: state.counter - 1, showCount: state.showCount };
  }
  if (action.type === "increhun") {
    return { counter: state.counter + action.val, showCount: state.showCount };
  }
  if (action.type === "decrehun") {
    return { counter: state.counter - action.val, showCount: state.showCount };
  }
  if (action.type === "toggle") {
    return {
      counter: state.counter,
      showCount: !state.showCount,
    };
  }

  return state;

  // note: the object we returned in reducer function it always create a brand new object not affect the existing one or cant be merged with the existing one, means we override the old state not updates the old state

  // its super important in redux you will never mutates the existing state, only you can override by returning a new state its only a good practice, even though if we mutates the existing state it will working fine but its not a best practice

  // this is something you absolutely you cant do while working with redux

  // bcoz in js objects and arrays are reference values,
};

const store = createStore(storeReducer);

export default store;
