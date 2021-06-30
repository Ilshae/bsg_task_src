import { ADD_TOKEN, ADD_REDIRECT, ADD_MEDIALIST, ADD_VIDEO, SIGNIN_USER } from './actions'
import { initialState } from './store'
import {addMediaToMediaList} from '../Api'

export const mediaListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MEDIALIST:
      return {
        ...state,
        mediaList: addMediaToMediaList(state.mediaList, action.payload),
      };
    default:
      return state;
  }
};

export const videoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_VIDEO:
      return {
        ...state,
        currentVideo: action.payload,
      };
    default:
      return state;
  }
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOKEN:
      return {
        ...state,
        user: action.payload,
      };
    case SIGNIN_USER:
        return {
          ...state,
          user: action.payload,
        };
    default:
      return state;
  }
};

export const redirectReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REDIRECT:
      return {
        ...state,
        redirect: action.payload,
      };

    default:
      return state;
  }
};
export default userReducer;