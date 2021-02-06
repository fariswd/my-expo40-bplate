interface UserAction {
  type: 'USER_GETDATA';
  payload?: any;
}

export interface UserState {
  user: any;
}

const initialState = {
  user: {},
};

const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case 'USER_GETDATA':
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default userReducer;
