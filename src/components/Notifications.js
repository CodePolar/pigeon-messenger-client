/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import bellsContext from "../services/context/BellContext";
import userContext from "../services/context/UserContext";
import { useSpring, animated } from "react-spring";
import {
  acceptContact,
  rejectContact,
  declined_room,
  acceptRoom,
  roomSettings,
} from "../services/sockets/sockets";
import roomsContext from "../services/context/RoomContext";
import { api } from "../services/config";

import * as Vibrant from "node-vibrant/dist/vibrant";
import useWindowSize from "../hooks/useWindowSize";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  MenuIcon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaCheck, FaNapster } from "react-icons/fa";
import { BiCheck, BiGroup, BiMenuAltRight, BiX } from "react-icons/bi";

function Notifications({ menu, show }) {
  const { bells, setBells } = useContext(bellsContext);
  const { setBell, bellState } = useContext(roomsContext);
  const [width] = useWindowSize();

  const spring = useSpring({
    to: { padding: "3rem", opacity: 1 },
    from: { padding: "0rem", opacity: 0 },
    reverse: !show,
  });
  const springDisplay = useSpring({
    to: { display: "flex", delay: 100 },
    from: { display: "none", delay: 200 },
    reverse: !show,
  });
  const springMobile = useSpring({
    to: { padding: "3rem 1rem", opacity: 1 },
    from: { padding: "0rem 0rem", opacity: 0 },
    reverse: !show,
  });

  useEffect(() => {
    if (show) {
      console.log("beelss");
      setBells();
    }
  }, [show]);

  return (
    // <div className="notifications">
    //     <div onClick={() => {

    //         }} className="bell-icon">
    //         <p className="bells-count">{bells.filter(e => e.watched === false).length > 0? bells.filter(e => e.watched === false).length : ""}</p>
    //         <i className="bi bi-bell-fill"></i>
    //     </div>
    //         <animated.div style={springDisplay}>
    //             <animated.div style={ width <= 430? {...springMobile} : {...spring}} className="bells">
    //                 <div  className="bells-scroll">
    //                     <div className="bellsContain">
    //                         {bells.length > 0? (
    //                             bells.map((e, i) => {
    //                                 return <Bell key={i} data={e} />
    //                             })
    //                         ) : (
    //                             <p className="bells-clean">All Clean 😎</p>
    //                         )}
    //                     </div>
    //                 </div>

    //                 <h3>Notifications</h3>
    //             </animated.div>
    //         </animated.div>
    // </div>
    <Box
      borderRightRadius={10}
      px={3}
      bg={"white"}
      boxShadow="lg"
      w={470}
      maxH={"90%"}
      pb={3}
    >
      <Text py={5} fontSize={"2xl"}>
        Notifications
      </Text>
      <Box className="scrollable">
        {bells.length > 0 ? (
          bells.map((e, i) => {
            return <Bell key={i} data={e} />;
          })
        ) : (
          <p className="bells-clean">Clear</p>
        )}
      </Box>
    </Box>
  );
}

function Bell({ data }) {
  const { request } = data;

  switch (request) {
    case "REQUEST":
      return <BellComponent data={data} request={request} opts={true} />;

    case "REQUEST_ACCEPTED":
      return <BellComponent data={data} request={request} opts={false} />;

    case "CONTACT_ADDED":
      return <BellComponent data={data} request={request} opts={false} />;

    case "REQUEST_DECLINED":
      return <BellComponent data={data} request={request} opts={false} />;

    case "REQUEST_ROOM":
      return <BellComponent data={data} request={request} opts={true} />;

    case "ROOM_DECLINED":
      return <BellComponent data={data} request={request} />;

    case "ADDED_TO_ROOM":
      return <BellComponent data={data} request={request} />;

    default:
      return "";
  }
}

function BellComponent({ data, request, opts }) {
  const { img, requester, title, _id } = data;
  const [color, setColor] = useState("");

  const { token, user, setAlert } = useContext(userContext);

  let requesterFormatted = requester.split("/")[0];

  const spring = useSpring({
    to: { opacity: 1, transform: "translate(0px, 0px)" },
    from: { transform: "translate(-33px, 0px)", opacity: 0 },
    delay: 500,
  });

  const joinRoom = () => {
    acceptRoom({ id: _id, img: user.img }, (res) => {
      if (!res.ok) {
        setAlert({ show: true, text: res.err });
        return;
      }
    });
    roomSettings(
      {
        type: "add_member",
        value: `${user.username} joins`,
        room_id: data.room_id ? data.room_id : "",
        author: user,
      },
      (res) => {}
    );
  };

  useEffect(() => {
    if (img) {
      let v = new Vibrant(
        `${api}/upload/${data.room_id ? "room" : "user"}/${img}?token=${token}`,
        {}
      );
      v.getPalette((err, palette) => {
        if (err) {
          console.log(err);
        }
        setColor({
          light: palette.LightVibrant.hex,
          dark: palette.DarkVibrant.hex,
          mute: palette.Muted.hex,
        });
      });
    }
  }, []);

  return (
    // <animated.div style={spring} className={`bell ${request.toLowerCase()}`}>
    //   <img
    //     src={`${api}/upload/${
    //       data.room_id ? "room" : "user"
    //     }/${img}?token=${token}`}
    //     alt={`${requesterFormatted} img`}
    //   />
    //   <div className="bell-body">
    //     <h4 style={{ ...spring, color: `${color.light}` }}>
    //       {request !== "ADDED_TO_ROOM"
    //         ? `${requesterFormatted}`
    //         : `${requester.split("/")[1]}`}
    //     </h4>
    //     <div className="bell-content">
    //       <p style={{ ...spring, color: `${color.light}` }}>{`${title}`}</p>
    //       {opts ? (
    //         <div className="bell-options">
    //           <button
    //             style={{
    //               ...spring,
    //               color: color.light,
    //               borderColor: color.mute,
    //             }}
    //             onClick={() =>
    //               data.room_id
    //                 ? joinRoom()
    //                 : acceptContact(
    //                     { id: _id, token, img: user.img },
    //                     (res) => {
    //                       if (!res.ok) {
    //                         setAlert({ show: true, text: res.err });
    //                       }
    //                     }
    //                   )
    //             }
    //             className="accept button"
    //           >
    //             Accept
    //           </button>
    //           <button
    //             style={{
    //               ...spring,
    //               color: color.light,
    //               borderColor: color.mute,
    //             }}
    //             onClick={() =>
    //               data.room_id
    //                 ? declined_room({ id: _id, img: user.img }, (res) => {
    //                     if (!res.ok) {
    //                       setAlert({ show: true, text: res.err });
    //                     }
    //                   })
    //                 : rejectContact(
    //                     { id: _id, token, img: user.img },
    //                     (res) => {
    //                       if (!res.ok) {
    //                         setAlert({ show: true, text: res.err });
    //                       }
    //                     }
    //                   )
    //             }
    //             className="reject button"
    //           >
    //             Reject
    //           </button>
    //         </div>
    //       ) : (
    //         ""
    //       )}
    //     </div>
    //   </div>
    // </animated.div>
    <Box>
      <RegularNotification />
      <InteractNotification />
    </Box>
    // <Box w="100%" p={2} bg="blackAlpha.100" borderRadius={10} mb={5}>
    //   <Flex w="100%">
    //     <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
    //     <Stack ml={3} alignItems={"flex-start"} width="100%">
    //       <Flex alignItems={"center"} justifyContent="space-between" width={"100%"}>
    //         <Text fontWeight="bold" borderRadius={100}>
    //           GRUPO ENTRE AMIGOS 1.000000
    //         </Text>
    //         <IconButton size={"sm"} as={BiMenuAltRight} />
    //       </Flex>
    //       <Text mt="0px!important" fontSize="sm">
    //         Sent you a contact request
    //       </Text>
    //     </Stack>
    //   </Flex>
    // </Box>
  );
}

const RegularNotification = () => {
  return (
    <Box w="100%" p={2} bg="blackAlpha.100" borderRadius={10} mb={5}>
      <Flex w="100%">
        <Avatar name="Dan Abrahmov" src="https://www.nationalgeographic.com.es/medio/2019/05/30/alan-turing_51cdd2da.jpg" />
        <Stack ml={3} alignItems={"flex-start"} width="100%">
          <Flex
            alignItems={"center"}
            justifyContent="space-between"
            width={"100%"}
          >
            <Text fontWeight="bold" borderRadius={100}>
              Alan Turing
            </Text>
            <Flex>
              <IconButton size={"sm"} variant="ghost" colorScheme="blue" as={BiCheck} />
              <IconButton size={"sm"} variant="ghost" colorScheme="red" as={BiX} ml={2} />
            </Flex>
          </Flex>
          <Text mt="0px!important" fontSize="sm">
            Sent you a contact request
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
};

const InteractNotification = () => {
  return (
    <Box w="100%" p={2} bg="blackAlpha.100" borderRadius={10} mb={5}>
      <Flex flexDirection={"column"} w="100%">
    <Flex w="100%" justifyContent={"space-between"}>

      <AvatarGroup size="md" max={2}>
              <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
              <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
              <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
              <Avatar
                name="Prosper Otemuyiwa"
                src="https://bit.ly/prosper-baba"
              />
              <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
            </AvatarGroup>
            <IconButton size="sm" colorScheme={"gray"} variant="ghost" color="blue.500" as={BiGroup} />
    </Flex>
        <Stack mt={3} alignItems={"flex-start"} width="100%">
          <Stack w="100%">
            <Flex
              alignItems={"center"}
              justifyContent="space-between"
              width={"100%"}
            >
              <Text fontWeight="bold" borderRadius={100}>
                Science and Engineering School 
              </Text>
              {/* <IconButton size={"sm"} as={BiMenuAltRight} /> */}
            </Flex>
            
          </Stack>
          <Text mt="0px!important" fontSize="sm">
            Request you to join Room
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Notifications;
