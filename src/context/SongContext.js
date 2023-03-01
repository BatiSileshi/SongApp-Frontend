import { v4 as uuidv4 } from 'uuid'
import { createContext, useState
 } from "react";

 const SongContext = createContext()

 export const SongProvider = ({children})=>{
    const [song, setSong]=useState([
        {
            id: 1,
            song_title: 'Oh Lord',
            album: 5,
            artist_name: "me"
        }
    ])

    const [songEdit, setSongEdit] = useState({
        item: {},
        edit: false
      })

    const addSong = (newSong) => {
        newSong.id = uuidv4()
        setSong([newSong, ...song])
      }


    const deleteSong = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
          setSong(song.filter((item) => item.id !== id));
        }
    }
      

    //update song 
    const updateSong = (id, updItem) => {
        setSong(
            song.map((item) => (item.id === id ? {...item, ...updItem} : item))
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