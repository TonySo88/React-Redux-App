const initialState = {
  title: "'My greatest pain in life is that I will never be able to see myself perform in life.'",
  isFetching: false,
  joke: "",
  error: "",
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_QUOTE_START":
      return {
        ...state,
        isFetching: true
      };
    case "FETCHING_QUOTE_SUCCESS":
      return {
        ...state,
        isFetching: false,
        error: "",
        quote: action.payload
      };
    case "FETCHING_QUOTE_ERROR":
      return {
        ...state,
        isFetching: false,
        error: action.payload 
      };
    default:
      return state;
  }
};
