import { useState, useContext, useEffect} from "react"
import { useNavigate } from 'react-router-dom'
import SongContext from "../context/SongContext";
import Container from './Container'
import styled from '@emotion/styled'
import {
  Box,
  Flex,
} from 'rebass'

import {
  Label,
  Input,
} from '@rebass/forms'; 


const Image = styled.img`
  width: 70px;
  max-height: 100px;
  margin-bottom: 8px;
  margin-top: 1px;
  padding:6px;
  padding-right:9;
  float: left;
`

const Button = styled.button`
width: 50%;
background-color: gray;
color: white;
padding: 10px;
margin-top: 10px;
margin-left: 10px;
float: center;
border: none;
border-radius: 4px;
cursor: pointer;
`



function SongForm() {
 

    const [song_title, setTitle]=useState('')
    const [album, setAlbum]=useState('')
    const [artist_name, setArtist]=useState('')
    const [btnDisabled, setBtnDisabled]=useState(true)
    const [cover_image, setImage] = useState(null)
    const [message, setMessage]=useState()


    const {songEdit, updateSong} = useContext(SongContext)

    useEffect(() => {
      if( songEdit.edit === true){
        setBtnDisabled(false)
        setTitle(songEdit.item.song_title)
        setAlbum(songEdit.item.album)
        setArtist(songEdit.item.artist_name)
      }
    }, [songEdit])
    
    const navigate = useNavigate();


    const handleSongTitleChange = (e)=> {
        if (e.target.value === '' || e.target.value.length >= 25){
            setBtnDisabled(true)
            setMessage("Song title must be less 25 characters.")

        }else{
            setMessage(null)
            setBtnDisabled(false)
        }
        setTitle(e.target.value)
    }

    const handleSongAlbumChange = (e)=> {
        if (album === '' || album.length >= 20){
            setBtnDisabled(true)
            setMessage('Album name must be less 20 characters.')

        }else{
            setMessage(null)
            setBtnDisabled(false)
        }
        setAlbum(e.target.value)
    }

    const handleSongArtistChange = (e)=> {
        if (artist_name === '' || artist_name.length >= 20){
            setBtnDisabled(true)
            setMessage('Artist name must be less 20 characters.')

        }else{
            setMessage(null)
            setBtnDisabled(false)
        }
        setArtist(e.target.value)
    }

    const handleImageChange = (e) => {
      setImage(e.target.files[0])
  }


    const handleSubmit= async (e) => {
      e.preventDefault()
      if (song_title !== "" && song_title.length <25 && artist_name !== "" && artist_name.length <20 && album.length <20 ) {
        const formData = new FormData();
        formData.append("song_title", song_title);
        formData.append("album", album || '');
        formData.append("artist_name", artist_name);
       


        if (cover_image !== null) {
          formData.append("cover_image", cover_image);
        }

        try {
          if (songEdit.edit === true) {
            const response = await fetch(`/api/songs/${songEdit.item.id}/update/`, {
              method: "PUT",
              body: formData,
            });
            if (response.ok) {
              updateSong(songEdit.item.id, formData);
              setTitle("");
              setAlbum("");
              setArtist("");
              setImage(null);
              navigate("/");
            } else {
              setMessage("Error updating song. Please try again.");
            }
          } else {
           
         
           fetch("/api/songs/add/", {
            method: "POST",
            body: formData,
          })
            .then(() => {
              // handle success
            })
            .catch((error) => {
              // handle error
            }); 

          }
          setTitle("");
          setAlbum("");
          setArtist("");
          setImage(null);
          navigate("/");
        } catch (error) {
          console.error(error);
          setMessage("Error saving song. Please try again.");
        }
      } else {
        setMessage("Please fill all fields correctly.");
      }
    }


  return (
    <Container >
<Box
  as='form'
  onSubmit={handleSubmit}
  py={3}>
  <Flex mx={-2} mb={3} flexWrap='wrap'>
    <Box width={1} px={2} mt={3}  >
      <Label htmlFor='song_title'>Song Title</Label>
      <Input
        type='text'
        value={song_title}
        onChange={handleSongTitleChange}
      />
    </Box>
    
    <Box width={1} px={2} mt={3} >
      <Label htmlFor='album'>Album (optional)</Label>
      <Input
        type='text'
        value={album}
        onChange={handleSongAlbumChange}
      />
    </Box>

    <Box width={1} px={2} mt={3} >
      <Label htmlFor='artist_name'>Artist Name</Label>
      <Input
        type='text'
        value={artist_name}
        onChange={handleSongArtistChange}
      />
    </Box>

    <Box width={1} px={2} mt={3}>
    
    {songEdit.edit && songEdit.item.cover_image && (    
    <Image src={`/static/images/${songEdit.item.cover_image}`} alt={songEdit.item.cover_image} /> 
  )}   
    
     <Label htmlFor="cover_image">Cover Image</Label>
        <Input type="file" onChange={handleImageChange} />
      </Box>


    <Box   width={1/2}  >
      
    <Button type="submit" isDisabled={btnDisabled}>Save</Button>
    </Box>

  </Flex>
  {message && <div className="message">{message} </div>}
</Box>
    </Container>
  )
}

export default SongForm
