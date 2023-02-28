import React from 'react'
import SingleSong from './SingleSong';


// taking the props here  and map through them and pass it to SingleSOng
function SongList({song}) {
    if (!song || song.length === 0){
        return <p>No song yet</p>
    }
  return (
    <div className='song-list'>
      {song.map((item) => (
        <SingleSong key={item.id} item={item} />
      ))}
    </div>
  )
}

export default SongList
