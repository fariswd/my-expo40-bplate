interface RequestAction {
  type: 'SET_LOADING' | string;
  loading: boolean;
}

export interface RequestState {
  request: {
    loading: boolean;
  };
}

const initialState = {
  loading: false,
};

const counterReducer = (
  state = initialState,
  action: RequestAction
) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.loading };
    default:
      return state;
  }
};

export default counterReducer;
