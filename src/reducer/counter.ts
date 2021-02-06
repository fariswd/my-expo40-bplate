interface CounterAction {
  type: 'COUNTER_INCREMENT' | 'COUNTER_DECREMENT';
}

export interface CounterState {
  counter: {
    count: number;
  };
}

const initialState = {
  count: 0,
};

const counterReducer = (
  state = initialState,
  action: CounterAction
) => {
  switch (action.type) {
    case 'COUNTER_INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'COUNTER_DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default counterReducer;
