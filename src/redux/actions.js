export const ADD_TOKEN = 'ADD_TOKEN'
export const ADD_REDIRECT = 'ADD_REDIRECT'
export const ADD_MEDIALIST = 'ADD_MEDIALIST'
export const ADD_VIDEO = 'ADD_VIDEO'
export const SIGNIN_USER = 'SIGNIN_USER'

export const addToken = token => ({
  type: ADD_TOKEN,
  payload: token
});

export const addSignedInUser = user => ({
  type: SIGNIN_USER,
  payload: user
});

export const addRedirect = redirect => ({
  type: ADD_REDIRECT,
  payload: redirect
})

export const addMediaList = mediaList => ({
  type: ADD_MEDIALIST,
  payload: mediaList 
})

export const addVideo = video => ({
  type: ADD_VIDEO,
  payload: video 
})