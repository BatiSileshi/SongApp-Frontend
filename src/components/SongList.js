import {motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react';
import SingleSong from './SingleSong';
import SongContext from '../context/SongContext';
import { Link } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'
import styled from '@emotion/styled'
// taking the props here  and map through them and pass it to SingleSOng



const Button = styled.button`
   color: red;
   float: right;
   margin-left: 8px;
`

function SongList() {

  const {song} =useContext(SongContext)
    if (!song || song.length === 0){
        return <p>No song yet</p>
    }
  return (
    <div className='song-list'>
        <div>      <Link to='/songs/add'>
    <Button > <FaPlus/></Button>

  </Link></div>
      <AnimatePresence>
      {song.map((item) => (
        <motion.div 
        key={item.id}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity:0}}
        >


        <SingleSong key={item.id} item={item} />
        </motion.div>
      ))}
      </AnimatePresence>
    </div>
  )
}

export default SongList
