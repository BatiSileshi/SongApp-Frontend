import React from 'react'
import { Link } from 'react-router-dom'

const SingleSong = ({song}) => {
  return (
    <div>
      <h3>{song.song_title}</h3>
      <Link to={`/song/${song.id}`}>
      <button>Update</button>
      </Link>
    </div>
  )
} 

export default SingleSong
