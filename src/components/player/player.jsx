import React from 'react'
import ReactHlsPlayer from 'react-hls-player';
import { useSelector } from 'react-redux'
import './player.scss'

const Player = () => {
  let video = useSelector(state => state.video);

  return (
    <div className="player__container">
      <ReactHlsPlayer
        src={video.currentVideo && video.currentVideo.ContentUrl ? video.currentVideo.ContentUrl : ''}
        autoPlay={true}
        controls={true}
        className='player'
      />
      <p className="player_error">{!video.currentVideo ? 'Pick a movie, I only work for files in m3u8 format' : ''}{video.currentVideo && !video.currentVideo.ContentUrl ? 'Video unavailable - try a different one!': ''}</p>
    </div>
  )
}

export default Player