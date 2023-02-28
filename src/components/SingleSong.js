
// taking item as props
const SingleSong = ({item}) => {
  return (
    <div className='card'>
      <div>{item.song_title}</div>
      <div>{item.album}</div>
      <div>{item.artist_name}</div>
    </div>
  )
} 

export default SingleSong
