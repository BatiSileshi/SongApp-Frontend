import { useState } from "react"

function SongForm({handleAdd}) {
    const [song_title, setTitle]=useState('')
    const [album, setAlbum]=useState('')
    const [artist_name, setArtist]=useState('')

    const [btnDisabled, setBtnDisabled]=useState(true)
    const [message, setMessage]=useState()

    const handleSongTitleChange = (e)=> {
        if (song_title === ''){
            setBtnDisabled(true)
            setMessage(null)

        }else{
            setMessage(null)
            setBtnDisabled(false)
        }
        setTitle(e.target.value)
    }

    const handleSongAlbumChange = (e)=> {
        if (album === ''){
            setBtnDisabled(true)
            setMessage(null)

        }else{
            setMessage(null)
            setBtnDisabled(false)
        }
        setAlbum(e.target.value)
    }

    const handleSongArtistChange = (e)=> {
        if (artist_name === ''){
            setBtnDisabled(true)
            setMessage(null)

        }else{
            setMessage(null)
            setBtnDisabled(false)
        }
        setArtist(e.target.value)
    }

    const handleSubmit=(e) => {
      e.preventDefault()
      if (song_title !== ''){
        const newSong = {
          song_title,
          album,
          artist_name

        }
        handleAdd(newSong)

        setTitle('')
        setAlbum('')
        setArtist('')
      }
       
    }

  return (
    <div className='song'>
      <form onSubmit={handleSubmit}>
        <div>
            <input onChange={handleSongTitleChange} type="text" name="" placeholder='Song title' value={song_title}/>

            <input onChange={handleSongAlbumChange} type="text" name="" placeholder='Song album' value={album}/>

            <input onChange={handleSongArtistChange} type="text" name="" placeholder='Artist name' value={artist_name} />

            <button type="submit" isdisabled={btnDisabled}>Save</button>
        </div>

        {message && <div className="message">{message} </div>}
      </form>
    </div>
  )
}

export default SongForm
