import { AppDispatch } from '../config/redux/store';

const setLoading = (loading: boolean) => {
  return {
    type: 'SET_LOADING',
    loading,
  };
};

export const fetchData = async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));
  try {
    const rawfetch = await fetch(
      'https://jsonplaceholder.typicode.com/todos/1'
    );
    const result = await rawfetch.json();
    dispatch(setLoading(false));
    return result;
  } catch (error) {
    dispatch(setLoading(false));
    return {
      error: true,
      data: error,
    };
  }
};
