import { PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Fade,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  ScaleFade,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Notifications from "../components/Notifications";
import Profile from "../components/Profile";
import RightMenu from "../components/right-menu";
import RoomList from "../components/room-list";
import SearchInput from "../components/search-input";
import { show } from "../features/menuSlice";

function Playground() {
  const leftRef = useRef();
  const dispatch = useDispatch();
  const showVal = useSelector((state) => state.menu.show);

  return (
    <Flex flex="1" w={"100%"} minH={"100vh"} bg={"white"}>
      <Flex
        ref={leftRef}
        flexBasis={"calc(22%)"}
        position="relative"
        bg={"white"}
      >
        {/* <Box>
          <Button
            onClick={() => {
              console.log(showVal);
                dispatch(show(!showVal));
            }}
          >
            Press me
          </Button>
        </Box> */}
        <RightMenu leftRef={leftRef} />
        <Stack w="100%">
          <Profile />
          <Container>
          <SearchInput />
            <RoomList />
          </Container>

        </Stack>
      </Flex>
      <Flex flexBasis={"calc(78%)"} bg={"blackAlpha.200"}>

      </Flex>
    </Flex>
  );
}

export default Playground;
