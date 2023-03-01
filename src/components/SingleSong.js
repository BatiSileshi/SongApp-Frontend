import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import SongContext from '../context/SongContext'
// taking item as props
const SingleSong = ({item}) => {

  const {deleteSong, editSong} = useContext(SongContext)


  return (
    <div className='card'>
      <button onClick={() => editSong(item)}>
        <FaEdit/>
      </button>

      <button onClick={() => deleteSong(item.id)}> 
      <FaTimes />
      </button>
      <div>{item.song_title}</div>
      <div>{item.album}</div>
      <div>{item.artist_name}</div>
    </div>
  )
} 

export default SingleSong
