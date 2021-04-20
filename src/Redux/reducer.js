import { SET_STATE } from './action';

const INIT = {
  fname: '',
  lname: '',
  email: '',
  password: '',
  cpassword: '',
};

export const rootReducer = (state = INIT, action) => {
  switch (action.type) {
    case SET_STATE: {
      return {
        ...action.state,
      };
    }
    default: {
      return state;
    }
  }
};
