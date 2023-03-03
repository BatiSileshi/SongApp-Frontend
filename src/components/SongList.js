import {motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react';
import SingleSong from './SingleSong';
import SongContext from '../context/SongContext';
import Container from './Container';

// taking the props here  and map through them and pass it to SingleSOng



function SongList() {

  const {song} =useContext(SongContext)
    if (!song || song.length === 0){
        return <Container><p>No song yet</p></Container>
    }
  return (
    <div className='song-list'>
 
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
