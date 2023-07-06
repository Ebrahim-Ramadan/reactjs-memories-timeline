// actions consts
export const LIKEPLUS = 'LIKEPLUS';
export const LIKEMINUS = 'LIKEMINUS';

//action creators
export const likesPLUS = (itemId, times) => {
    return {
      type: LIKEPLUS,
      itemId: itemId,
      payload: times
    }
  }

  export const likesMINUS = (itemId, times) => {
    return {
      type: LIKEMINUS,
      itemId: itemId,
      payload: times
    }
  }