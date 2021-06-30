import { combineReducers, createStore } from 'redux';
import { userReducer, mediaListReducer, redirectReducer, videoReducer } from './reducers'

export const initialState = {
  userInfo: [], 
  redirect: false,
  media: [],
  video: []
}

const rootReducer = combineReducers({
  userInfo: userReducer,
  redirect: redirectReducer,
  media: mediaListReducer,
  video: videoReducer
});

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store;