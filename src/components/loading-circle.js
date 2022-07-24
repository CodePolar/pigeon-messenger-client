import React from 'react'
import { Flex, CircularProgress} from '@chakra-ui/react'

function LoadingCircle() {
  return (
    <Flex alignItems={'center'} justifyContent={'center'} w="100%" h="100%">
            <CircularProgress isIndeterminate color={'white'} />
          </Flex>
  )
}

export default LoadingCircle