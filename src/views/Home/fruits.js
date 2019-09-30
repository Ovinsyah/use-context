import React, { useContext } from 'react';
import {StoreContext} from 'store';

const Fruits = () => {
  const [state, dispatch] = useContext(StoreContext);

  return (
    <div>
      <h1>Fruits</h1>
      <button onClick={() => dispatch({ type: 'addFruit', payload:'suee'})}>Add</button>
      <ul>
        {
          state.fruits.map(fruit => <li>{fruit}</li>)
        }
      </ul>
    </div>
  )
}

export default Fruits;