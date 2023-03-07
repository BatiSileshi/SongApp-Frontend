
import { createContext, useState, useEffect
 } from "react";


 const SongContext = createContext()

 export const SongProvider = ({children, history})=>{
    const [song, setSong]=useState([])

    const [songEdit, setSongEdit] = useState({
        item: {},
        edit: false
      })


      useEffect(() => {
        const fetchSong = async () => {
            const response = await fetch('/api/songs/');
            const data = await response.json();
            setSong(data);
        };
        fetchSong();
    });





    const addSong = async (formData) => {
        const response = await fetch('/api/songs/add/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: formData
        })
        const data = await response.json()
        setSong([...song, data])
        
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