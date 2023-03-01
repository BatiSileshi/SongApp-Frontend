import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import SongContext from '../context/SongContext'
import styled from '@emotion/styled'
import Container from './Container'

import {
  Box,
  Card,
  Heading,
  Text,
} from 'rebass'

const Button = styled.button`
   color: red;
   float: right;
   margin-left: 8px;
`

// taking item as props
const SingleSong = ({item}) => {

  const {deleteSong, editSong} = useContext(SongContext)


  return (

<Container>
<Box width={400} height={100}>
<Card margin={1}       sx={{
        p: 1,
        borderRadius: 3,
        boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
      }}>
        

<Button onClick={() => deleteSong(item.id)}> 
      <FaTimes />
      </Button>
      <Button onClick={() => editSong(item)}>
        <FaEdit/>
      </Button>

  <Heading paddingBottom={2} paddingLeft={2}>{item.song_title}</Heading>

      <Text paddingBottom={1} paddingLeft={2}>{item.album}</Text>
      <Text fontSize={2} paddingLeft={2}>
      {item.artist_name}
      </Text>
</Card>
</Box>
      
     
      
      
</Container>


  )
} 

export default SingleSong
