import { Box, Button, Fade, Flex, ScaleFade, Text } from '@chakra-ui/react';
import React, {useState} from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import Notifications from '../components/Notifications';

function Playground() {

    const leftRef = useRef();
    const menuRef = useRef();
    const [pressed, setPressed] = useState(false);
    
    const [menu, setMenu] = useState(0);
    const [sideBar, setSideBar] = useState(0);
    

    useEffect(() =>{
        if(menuRef.current) {
            setMenu((leftRef.current?.offsetWidth - (leftRef.current?.offsetWidth - menuRef.current?.offsetWidth)) * -1)
            console.log(menu < 0)
        }
        if(sideBar.current) {
            setSideBar(sideBar.current.offsetWidth)
        }
    }, [pressed])

  return (
    <Flex flex="1" w={"100%"} minH={"100vh"} bg={"white"}>
        <Flex ref={leftRef} flexBasis={"calc(22%)"} position="relative" bg={"blueviolet"}>
            <Box>
            <Button onClick={() => {
                setPressed(!pressed)

            }}>

                Press me
            </Button>
            </Box>

            <Flex ref={menuRef} w={470} position="absolute" zIndex={menu < 0 && pressed? 1 : 0} right={`${menu}px`} minH="100vh"  opacity={menu < 0 && pressed? 1 : 0} >
                <Fade  in={menu < 0 && pressed? true : false}>
                    <Box w={470} minH="100vh" bg="red">
                        
                    </Box>

                </Fade>
            </Flex>
        </Flex>
        <Flex flexBasis={"calc(78%)"}  bg={"purple"}>
            <Button>23</Button>
        </Flex>
    </Flex>
  )
}

export default Playground;