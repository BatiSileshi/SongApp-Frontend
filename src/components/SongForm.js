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
    const [message, setMessage]=useState()


    const {addSong, songEdit, updateSong} = useContext(SongContext)

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
        if(songEdit.edit === true){
          updateSong(songEdit.item.id, newSong);
        }else{
          addSong(newSong)
        }
        


        setTitle('')
        setAlbum('')
        setArtist('')
        
        navigate('/');
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
      <Label htmlFor='album'>Album</Label>
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
