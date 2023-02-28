import { useState } from "react"

function SongForm() {
    const [title, setTitle]=useState('')
    const [album, setAlbum]=useState('')
    const [artist, setArtist]=useState('')

    const [btnDisabled, setBtnDisabled]=useState(true)
    const [message, setMessage]=useState()

    const handleSongTitleChange = (e)=> {
        if (title === ''){
            setBtnDisabled(true)
            setMessage(null)

        }else{
            setMessage(null)
            setBtnDisabled(false)
        }
        setTitle(e.target.value)
    }

    const handleSongAlbumChange = (e)=> {
        setAlbum(e.target.value)
    }

    const handleSongArtistChange = (e)=> {
        setArtist(e.target.value)
    }

  return (
    <div className='song'>
      <form>
        <div>
            <input onChange={handleSongTitleChange} type="text" name="" placeholder='Song title' value={title}/>

            <input onChange={handleSongAlbumChange} type="text" name="" placeholder='Song album' value={album}/>

            <input onChange={handleSongArtistChange} type="text" name="" placeholder='Artist name' value={artist} />

            <button type="submit" isdisabled={btnDisabled}>Save</button>
        </div>

        {message && <div className="message">{message} </div>}
      </form>
    </div>
  )
}

export default SongForm
