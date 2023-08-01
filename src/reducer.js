//reducer.js

import { actionTypes } from "./actionTypes.js";

export const initialState = {
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return { ...state, user: action.user };
    default:
      return state;
  }
};

export default reducer;
