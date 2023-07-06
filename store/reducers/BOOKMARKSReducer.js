import { BOOKMARKMINUS, BOOKMARKPLUS } from "../actions/Bookmarks-action";

//Reducers
export const BOOKMARKSReducer = (state=1000, action) => {
    switch (action.type) { 
      case BOOKMARKPLUS:
        return state + action.payload;
      case BOOKMARKMINUS:
        return state - action.payload;
      default:
        return state;
    }
  }