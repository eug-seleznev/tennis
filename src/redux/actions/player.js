import {innerBackend} from '../../components/utils/axios'

import { ALL_PLAYERS, CLIENT_ERROR, EDIT_PROFILE,MY_INFO, GET_PROFILE, FIND_GAME } from "../types";



export const allPlayers = (find, city) => async (dispatch) => {
  console.log(city,'resp')
  try {
    const res = await innerBackend.get(`/players/find?field=${find==='all'?find:find+'&value='+city}`);

    dispatch({
      type: ALL_PLAYERS,
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

export const findMatch = () => async (dispatch) => {
  try {
    const res = await innerBackend.put('/players/go');

    dispatch({
      type: FIND_GAME,
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
export const myInfo = () => async (dispatch) => {
  try {
    const res = await innerBackend.get('/players/me');

    dispatch({
      type: MY_INFO,
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


