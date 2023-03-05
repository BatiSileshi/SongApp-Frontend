import React from 'react'
import { useContext } from 'react';
import SongContext from '../context/SongContext';
import Container from './Container'
import { Link } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'
import styled from '@emotion/styled'


const Button = styled.button`
   margin-left: 200px;
   float: right;
 
` 



function SongStats() {
  const {song} =useContext(SongContext)
  if (song.length === 1){
    return  <Container><h4>{song.length} song</h4>
             


       <br></br>
    </Container>
  }
  return (
    <Container>

      <h4>{song.length} songs</h4>
       <Link to='/songs/add'>
         <Button > <FaPlus/></Button>
       </Link>

       <br></br>
    </Container>
  )
}

export default SongStats
