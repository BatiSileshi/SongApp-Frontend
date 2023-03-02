
import { createContext, useState, useEffect
 } from "react";

 const SongContext = createContext()

 export const SongProvider = ({children, history})=>{
    const [song, setSong]=useState([])

    const [songEdit, setSongEdit] = useState({
        item: {},
        edit: false
      })

      useEffect(() =>{
        fetchSong()
      }, [])

      // fetching data
    const fetchSong = async ()=>{
        const response = await fetch (`/api/songs?_sort=id$_order=desc/`)

    const data = await response.json()
            // Fetch the cover image for each song
    const songWithData = await Promise.all(
      data.map(async (song) => {
        const response = await fetch(song.coverUrl);
        const coverData = await response.blob();
        const coverUrl = URL.createObjectURL(coverData);
        return { ...song, coverUrl };
      })
    );
        setSong(songWithData)
    }

    const addSong = async (newSong) => {
        const response = await fetch('/api/songs/add/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(newSong)
        })
        const data = await response.json()
        const responseCover = await fetch(data.coverUrl);
        const coverData = await responseCover.blob();
        const coverUrl = URL.createObjectURL(coverData);
        setSong([{ ...data, coverUrl }, ...song]);

      }


    const deleteSong = async(id) => {
        if(window.confirm('Are you sure you want to delete?')){

          await fetch(`/api/songs/${id}/delete/`,
          {method: 'DELETE'}
          )
          setSong(song.filter((item) => item.id !== id));
        }
    }
      

    //update song 
    const updateSong = async(id, updItem) => {

        const response = await fetch (`/api/songs/${id}/update/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updItem)
        })

        const data = await response.json()

        setSong(
            song.map((item) => (item.id === id ? {...item, ...data} : item))
        )
    }

    const editSong = (item)=> {
        setSongEdit({
          item,
          edit:true
        })
      }



    return <SongContext.Provider value={{
       song,
       songEdit,
       deleteSong,
       addSong,
       editSong,
       updateSong,
    }}>
        {children}

    </SongContext.Provider>
 }

export default SongContext