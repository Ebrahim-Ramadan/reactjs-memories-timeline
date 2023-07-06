// actions consts
export const BOOKMARKPLUS = 'LIKEPLUS';
export const BOOKMARKMINUS = 'LIKEMINUS';

//action creators
export const bookmarkPLUS = (id) => {
    return {
      type: BOOKMARKPLUS,
      payload: id
    }
  }

  export const bookmarkMINUS = (id) => {
    return {
      type: BOOKMARKMINUS,
      payload: id
    }
  }