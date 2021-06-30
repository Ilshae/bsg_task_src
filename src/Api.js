import axios from 'axios';

const ROOT_URL = 'https://thebetter.bsgroup.eu/';

const makeAxiosInstance = () => {
  const instance = axios.create({
    baseURL: ROOT_URL,
    headers: { 'Content-Type': 'application/json' },
  });
  return instance;
};

export const api = makeAxiosInstance();

export const getAnonymousToken = async () => {
  const resp = await api.post('Authorization/SignIn', {
    User: {
      Id: 0,
      UserName: 'string',
      FullName: 'string',
      Email: 'string',
      Initials: 'string',
      AvatarUrl: 'string',
      PhoneNumber: 'string',
      ClientRoles: [
        'string',
      ],
    },
  })
  return resp
};

export const getMediaList = async (token, listId) => {
  const resp = await api.post('Media/GetMediaList', {
    "MediaListId": listId,
    "IncludeCategories": false,
    "IncludeImages": true,
    "IncludeMedia": false,
    "PageNumber": 1,
    "PageSize": 15
  },
  {
    headers: { Authorization: token }
  }).catch(function (error) {
    // handle error
  })
  return resp
}

export const addMediaToMediaList = (stateMediaList, mediaListToAdd) => {
  if(!stateMediaList) {
    return mediaListToAdd;
  }
  return [stateMediaList, mediaListToAdd];
}

export const getMediaPlayerInfo = async (token, mediaId, streamType) => {
  const resp = await api.post('Media/GetMediaPlayInfo', {
    "MediaId": mediaId,
    "StreamType": streamType
  },
  {
    headers: { Authorization: token }
  })
  .catch(function (error) {
    // handle error
  })
  return resp
}

export const signInUser = async (username, password) => {
  const resp = await api.post('Authorization/SignIn', {
    UserName: username,
    Password: password,
  }, {
    headers: { "Content-Type": "multipart/form-data" }
  }).catch(function (error) {
    //
  })
  return resp
};