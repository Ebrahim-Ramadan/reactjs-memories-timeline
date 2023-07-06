// actions consts
export const followON = 'LIKEPLUS';
export const followOFF = 'LIKEMINUS';

//action creators
export const FollowON = (times) => {
    return {
      type: followON,
      payload: times
    }
  }

  export const FollowOFF = (times) => {
    return {
      type: followOFF,
      payload: times
    }
  }