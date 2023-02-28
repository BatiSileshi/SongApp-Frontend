
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

const Song = ({ history }) => {

    let { id } = useParams();
    let [song, setSong] = useState(null)
    useEffect(()=> {

        let getSong = async () => {
            let response = await fetch(`/api/songs/${id}/`)
            let data = await response.json()
            setSong(data)
        }

        getSong()

    }, [id])


    let updateSong = async () => {
      fetch(`/api/songs/${id}/update/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(song)

      });
      if (history) {
        history.push('/');
      }
    };






  return (
    <div>
      <p>{ song?.song_title } </p>
      <input defaultValue={ song?.song_title } ></input>
    
       <div>
       <button onClick={updateSong}>Done</button>
       </div>
    </div>
  )
}

export default Song
