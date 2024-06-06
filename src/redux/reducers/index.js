import { combineReducers } from 'redux';

// Ejemplo de reducer
const initialState = {};

const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  example: exampleReducer,
});