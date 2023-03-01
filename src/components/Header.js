import React from 'react'
import { Link } from 'react-router-dom'
import {
Text,
Box,
Flex,
} from 'rebass'

import styled from '@emotion/styled'




const Header = () => {
  return (
    <header>

  <Flex
  color='white'
  bg='gray'
  height={60}
  alignItems='center'>
     <Link to='/'>
  <Text p={2} fontWeight='bold' fontSize={25} paddingLeft={80}>SongApp</Text>
  </Link>



  <Box mx='auto' />

</Flex>

    </header>
  )
}

export default Header
