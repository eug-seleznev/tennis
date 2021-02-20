import {innerBackend} from '../../components/utils/axios'

import { CLIENT_ERROR, EDIT_PROFILE } from "../types";





export const editProfile = (formData) => async (dispatch) => {
  try {
    const res = await innerBackend.put('/players/me/edit', formData);

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


