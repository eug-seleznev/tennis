import {innerBackend} from '../../components/utils/axios'

import { CLIENT_ERROR, EDIT_PROFILE, GET_PROFILE } from "../types";





export const editProfile = () => async (dispatch) => {
  try {
    const res = await innerBackend.put('/players/me/edit');

    dispatch({
      type: EDIT_PROFILE,
      payload: res.data,
    });

    console.log(res.data, 'respnse')

  } catch (err) {
      console.log(err.response.data)
    const errors = err.response.data;
    dispatch({
      type: CLIENT_ERROR,
      payload: errors,
    });
  }
};

export const getProfile = (formData) => async (dispatch) => {
  try {
    const res = await innerBackend.get('/players/me', formData);

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });

    console.log(res.data, 'respnse')

  } catch (err) {
      console.log(err.response.data)
    const errors = err.response.data;
    dispatch({
      type: CLIENT_ERROR,
      payload: errors,
    });
  }
};


