import styled from '@emotion/styled'
import React from 'react'
import { Link } from 'react-router-dom'
import {
Text,
Box,
Flex,
} from 'rebass'


const H3 = styled.h3`
text-decoration: none;
color: black;
cursor: pointer;
`

const Header = () => {
  return (
    <header>

  <Flex
  color='white'
  bg='gray'
  height={60}
  alignItems='center'>
     <Link to='/' style={{ textDecoration: 'none' }}>
  <Text p={2} fontWeight='bold' fontSize={25} paddingLeft={80} ><H3>SongApp</H3></Text>
  </Link>

  <Box mx='auto' />

</Flex>

    </header>
  )
}

export default Header
