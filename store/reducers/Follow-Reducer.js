import { followON, followOFF } from "../actions/Follow-action";

//Reducers
export const Followreducer = (state=100, action) => {
    switch (action.type) { 
      case followON:
        return state + action.payload;
      case followOFF:
        return state - action.payload;
      default:
        return state;
    }
  }