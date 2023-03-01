import React from 'react'

import {
Text,
Box,
Flex,
} from 'rebass'


const Header = () => {
  return (
    <header>

  <Flex
  color='white'
  bg='gray'
  height={60}
  alignItems='center'>
  <Text p={2} fontWeight='bold' fontSize={25} paddingLeft={80}>SongApp</Text>
  <Box mx='auto' />

</Flex>

    </header>
  )
}

export default Header
