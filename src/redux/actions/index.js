import {
  TOKEN_REQUEST_STARTED,
  TOKEN_REQUEST_SUCCESSFUL,
  TOKEN_REQUEST_FAILED,
  SAVE_PLAYER_INFO,
} from './actionTypes';

import getToken from '../../services/TriviaAPI/requestToken';

export const tokenRequiredStarted = () => ({
  type: TOKEN_REQUEST_STARTED,
});

export const tokenRequiredSuccessfull = (playerTokenObj) => ({
  type: TOKEN_REQUEST_SUCCESSFUL,
  payload: playerTokenObj,
});

export const tokenRequiredFailed = (error) => ({
  type: TOKEN_REQUEST_FAILED,
  payload: error,
});

export const savePlayerInfo = (playerInfo) => ({
  type: SAVE_PLAYER_INFO,
  payload: playerInfo,
});

export const fetchTokenPlayer = () => async (dispatch) => {
  try {
    dispatch(tokenRequiredStarted);
    const tokenPlayerObj = await getToken();
    dispatch(tokenRequiredSuccessfull(tokenPlayerObj));
  } catch (error) {
    dispatch(tokenRequiredFailed(error));
  }
};
