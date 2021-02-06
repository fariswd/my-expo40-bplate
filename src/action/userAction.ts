import { AppDispatch } from '../config/redux/store';
import { fetchData } from './requestAction';

export const getUser = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const data = await fetchData(dispatch);
      console.log(data);
      return dispatch({
        type: 'USER_GETDATA',
        payload: data,
      });
    } catch (error) {
      return {
        type: 'ERROR',
      };
    }
  };
};
