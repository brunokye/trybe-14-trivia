import {
  SAVE_PLAYER_INFO, SCORE,
  RESET_SCORE,
  ADD_ASSERTIONS,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_PLAYER_INFO:
    return {
      ...state,
      name: action.payload.inputName,
      gravatarEmail: action.payload.inputEmail,
    };
  case SCORE: {
    return {
      ...state,
      score: state.score + action.payload,
    };
  }

  case RESET_SCORE:
    return {
      ...state,
      score: 0,
    };
  case ADD_ASSERTIONS: {
    return {
      ...state,
      assertions: action.payload,
    };
  }
  default:
    return state;
  }
};

export default player;
