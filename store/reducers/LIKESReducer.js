import { LIKEMINUS, LIKEPLUS } from "../actions/Likes-action";

//Reducers
export const LIKESReducer = (state=1000, action) => {
    switch (action.type) { 
      case LIKEPLUS:
        return {
          ...state,
          [action.itemId]: (state[action.itemId] || 0) + 1,
        };
      case LIKEMINUS:
        return {
          ...state,
          [action.itemId]: Math.max((state[action.itemId] || 0) - 1, 0),
        };
      default:
        return state;
    }
  }