import React from 'react'
import { getMediaPlayerInfo } from '../../Api'
import './media.scss'

const Media = ({media, token, addVideo }) => {

  let userName = token.User.UserName;
  let StreamType = '';
  userName === 'Anonymous' 
    ? StreamType = 'TRIAL' 
    : StreamType = 'MAIN'

  const handleOnClick = async (e, token, mediaId, streamType) => {
    let result = await getMediaPlayerInfo(`Bearer ${token}`, mediaId, streamType)
    addVideo(result.data);
  }

  return (
    <div className="movies__row" >  
      {media.length ? (
        media.map(item => ( item.MediaTypeCode !== "PACKAGE" ?
        <div className="movie__tile" onClick={(e) => (handleOnClick(e, token.AuthorizationToken.Token, item.Id, StreamType))}>
          <h1 className="movie__title">{item.Title}</h1>
          <p>{item.Images && item.Images.length ? (item.Images.slice(0,1).map(img => (<img className="movie__cover" src={`${img.Url}`} alt={`${img}`}/>))) : ""}</p>
        </div>
        : "" ))
      ) : ""}
    </div>
  )
}

export default Media