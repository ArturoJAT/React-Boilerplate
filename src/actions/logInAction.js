import axios from 'axios';

export const AUTHENTICATED = 'authenticated_user';
export const UNAUTHENTICATED = 'unauthenticated_user';
export const AUTHENTICATION_ERROR = 'authentication_error';

const URL = 'http://www.sample-website.com';

export function logInAction({ email, password }, history) {
  return async (dispatch) => {
    try {
      console.log({email,password});
      //const res = await axios.post(`${URL}/signin`, { email, password });

      dispatch({ type: AUTHENTICATED });
      //localStorage.setItem('user', res.data.token);
      history.push('/');
    } catch(error) {
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: 'Invalid email or password'
      });
    }
  };
}