import React from 'react'
import { useContext } from 'react';
import SongContext from '../context/SongContext';


function SongStats() {
  const {song} =useContext(SongContext)

  return (
    <div>
      <h4>{song.length} songs</h4>
    </div>
  )
}

export default SongStats
