import React, { createContext, useReducer} from 'react';

export const StoreContext = createContext({});

const initialState ={fruits:['Oke']};

function reducer(state, action){
  switch(action.type){
    case 'addFruit':
      return {
        fruits: [
          ...state.fruits, action.payload
        ]
      };
    case 'addVegetable':
      return {
        vegetables: [
          ...state.vegetables, action.payload
        ]
      }
    default: throw new Error('Action type must be defined');
  }
}

const Store = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      { children }
    </StoreContext.Provider>
  )
}

export default Store;