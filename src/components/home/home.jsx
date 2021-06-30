import React, { useEffect } from 'react'
import Media from '../media/media.container'
import Player from '../player/player'
import { getMediaList } from '../../Api'
import { useSelector } from 'react-redux'
import './home.scss'


const Home = ({ token, addMediaList }) => {
  let mediaList = useSelector(state => state.media.mediaList);

  useEffect(() => {
    async function fetchData() {
      let result = await getMediaList(`Bearer ${token}`, 6);
      addMediaList(result.data.Entities)
      result = await getMediaList(`Bearer ${token}`, 3);
      addMediaList(result.data.Entities)
    }
    fetchData();
  }, [addMediaList, token])

  return (
    <div className='home__container'>
      <Player />
      {mediaList 
        ? mediaList.map(media => (
          <>
      
          <h1>scale-down</h1>
          <Media media={media}/>
          </>
        )) : ''
      }
    </div>
  )
}

export default Home