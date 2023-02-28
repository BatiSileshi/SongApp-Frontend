import { FaTimes } from 'react-icons/fa'


// taking item as props
const SingleSong = ({item, handleDelete}) => {


  return (
    <div className='card'>
      <button onClick={() => handleDelete(item.id)}> 
      <FaTimes />
      </button>
      <div>{item.song_title}</div>
      <div>{item.album}</div>
      <div>{item.artist_name}</div>
    </div>
  )
} 

export default SingleSong
