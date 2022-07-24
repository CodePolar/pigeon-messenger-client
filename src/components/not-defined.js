import React from "react";
import { Flex } from "@chakra-ui/react";

const NotDefined = ({item}) => {
   return <Flex alignItems={'center'} justifyContent={'center'} w="100%" h="100%">{item}s Empty</Flex>
}

export default NotDefined;