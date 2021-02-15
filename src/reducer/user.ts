interface UserAction {
  type: 'USER_GETDATA' | 'USER_LOGIN' | 'USER_LOGOUT';
  payload?: any;
}

export interface UserState {
  user: any;
  logged: boolean;
}

const initialState = {
  user: {},
  logged: false,
};

const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case 'USER_GETDATA':
      return { ...state, user: action.payload };
    case 'USER_LOGIN':
      return { ...state, logged: true };
    case 'USER_LOGOUT':
      return { ...state, logged: false };
    default:
      return state;
  }
};

export default userReducer;
