import React, { useEffect, useState } from 'react'
import SingleSong from '../components/SingleSong'



const SongList = () => {

    let [songs, setSongs] = useState([])

    useEffect(() => {
        getSongs()

    }, [])

    let getSongs = async () => {
        let response = await fetch('/api/songs/')
        let data = await response.json()
        setSongs(data)

    }




  return (
    <div>
      <div>
        {songs.map((song, index) => (
            <SingleSong key={index} song={song} />
        ))}
      </div>
    </div>
  )
}

export default SongList

