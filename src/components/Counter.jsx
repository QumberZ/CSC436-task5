import { useState, useReducer } from 'react';


const Counter = () => {
const initialState = {
  count: 0,
  numberToChangeBy: 1,
  error: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'Increment':
      return {
        ...state,
        count: state.count + state.numberToChangeBy,
      };
    case 'Decrement':
      return {
        ...state,
        count: state.count - state.numberToChangeBy,
      };
    case 'Value to Inc/Dec':
      return {
        ...state,
        numberToChangeBy: action.value,
      };
    default:
      return state;
  }
};


  const [state, dispatch] = useReducer(reducer, initialState);

  const UpdateValueField = (e) => {
    dispatch({ type: 'Value to Inc/Dec', value: parseInt(e.target.value) });
  };

  return (
    <div className="App">
      <pre className="rainbow box text-center">Value {state.count}</pre>
      <div className="flex gap center">
        <button
          className="button-box"
          value={state.count}
          onClick={() => dispatch({ type: 'Increment' })}
        >
          <span className="huge">+</span>Increment by {state.numberToChangeBy}
        </button>
        <button
          className="button-box"
          value={state.count}
          onClick={() => dispatch({ type: 'Decrement' })}
        >
          <span className="huge">-</span>Decrement by {state.numberToChangeBy}
        </button>
      </div>
      <p className="flex gap center">
        <label className="button-box" htmlFor="number">
          Number to Increment/Decrement by{' '}
        </label>
        <input
          className="input-box"
          onChange={UpdateValueField}
          type="number"
          value={state.numberToChangeBy}
          name="number"
          id="number"
        />
      </p>
    </div>
  );
};

export default Counter;