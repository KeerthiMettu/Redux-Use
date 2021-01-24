import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from './Actions/actions'

function App() {

  const counter = useSelector(state => state.counter);
  const logged = useSelector(state => state.islogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter : {counter}</h1>
      <button onClick={() => dispatch(increment(3))} >+</button> 
      <button onClick={() => dispatch(decrement())} >-</button>
      {logged ? <h3>you are logged in</h3>: ""}
    </div>
  );
}

export default App;
