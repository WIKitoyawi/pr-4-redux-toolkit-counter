import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, addValue } from './store/slices/counterSlice';
import './App.css';

const App = () => {
  const count = useSelector((state) => state.counter.value); 
  const dispatch = useDispatch(); 

  const [inputValue, setInputValue] = useState(0); 

  const handleAddValue = () => {
    dispatch(addValue(Number(inputValue)));  
    setInputValue(0);  
  };

  return (
    <div className="app-container">
      <h1 className="counter-heading">Счётчик: {count}</h1>
      <div className="buttons-container">
        <button className="button" onClick={() => dispatch(increment())}>
          <span role="img" aria-label="increase">➕</span> Увеличить на 1
        </button>
        <button className="button" onClick={() => dispatch(decrement())}>
          <span role="img" aria-label="decrease">➖</span> Уменьшить на 1
        </button>
        <button className="button" onClick={() => dispatch(addValue(3))}>
          <span role="img" aria-label="increase by 3">➕</span> Увеличить на 3
        </button>
      </div>
      <div className="input-container">
        <input
          type="number"
          className="input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="add-button" onClick={handleAddValue}>Добавить произвольное значение</button>
      </div>
    </div>
  );
};

export default App;
