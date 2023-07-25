const initialState = {
    users: [],
    userlogined: {}
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_USER_SUCCESS":
        return { ...state, users: action.payload };
    }
  
    return state;
  };
  
  export default rootReducer;