import { Box, Progress, Skeleton } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import roomsContext from "../services/context/RoomContext";
import { ContactIcon, RoomIcon } from "./Rooms";

function RoomList() {
  const { chats, chatPeeks, showBar, refresh_rooms } = useContext(roomsContext);
  const [isLoaded, setIsLoaded] = React.useState(false)
  const skeletons = [1,2,3,4,5,6];

  useEffect(() => {
    refresh_rooms(() => {
        setIsLoaded(true);
    });
  }, [])

  return (
    <>
    
    {isLoaded? (
        chats.map((e, i) => {
          return e.user_id ? (
            <ContactIcon
              key={i}
              
              data={e}
              peeks={chatPeeks[e.room_id]}
            />
          ) : (
            <RoomIcon
              key={i}
              
              data={e}
              peeks={chatPeeks[e.room_id]}
            />
          );
        })

    ) : (
        <Progress mt={2} borderRadius={10} size="md" isIndeterminate />
    )}    
    </>
  );
}

export default RoomList;
