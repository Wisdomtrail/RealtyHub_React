import { createStore } from 'redux';

const initialState = {
  isLoggedIn: false,
  accessToken: null,
  errorMessage: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoggedIn: true,
        accessToken: action.payload,
        errorMessage: null,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isLoggedIn: false,
        accessToken: null,
        errorMessage: action.payload,
      };
    case 'LOGOUT': 
      return {
        ...state,
        isLoggedIn: false,
        accessToken: null,
        errorMessage: null,
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
