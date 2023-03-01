import React from 'react'
import { useContext } from 'react';
import SongContext from '../context/SongContext';
import Container from './Container'

function SongStats() {
  const {song} =useContext(SongContext)

  return (
    <Container>
      <h4>{song.length} songs</h4>
    </Container>
  )
}

export default SongStats
