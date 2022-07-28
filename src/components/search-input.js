import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import { BiSearch } from 'react-icons/bi'

function SearchInput() {
  return (
    
    <InputGroup >
    <InputLeftElement
      pointerEvents="none"
      children={<BiSearch color="gray.300" />}
    />
    <Input type="text" placeholder="Search" />
  </InputGroup>
  )
}

export default SearchInput