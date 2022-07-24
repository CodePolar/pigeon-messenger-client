import React, { useContext } from "react";
import userContext from "../services/context/UserContext";
import Notifications from "./Notifications";
import roomsContext from "../services/context/RoomContext";
import { api } from "../services/config";
import {
  Avatar,
  Badge,
  Box,
  Flex,
  Heading,
  Highlight,
  Icon,
  IconButton,
  Text,
} from "@chakra-ui/react";
import ProfileSettingsMenu from "./profile-settings-menu";
import { BellIcon, Search2Icon } from "@chakra-ui/icons";
import { css } from "@emotion/react";
import BadgeButton from "./badge";

function Profile() {
  const { user, token } = useContext(userContext);
  const { setFocus } = useContext(roomsContext);

  return (
    <>
      <div className="profile">
        <div className="profile-opts">
          <img src={`${api}/upload/user/${user.img}?token=${token}`} alt="" />
          <div>
            <h3>
              <span>
                <i className="bi bi-at"></i>
              </span>
              {user.username}
            </h3>
            <p onClick={() => setFocus(true, "settings")}>
              <span>
                <i className="bi bi-box"></i>
              </span>{" "}
              Settings
            </p>
          </div>
        </div>

        <div className="notifications-panel">
          <Notifications />
        </div>
      </div>
      <Box p={5}>
        <Flex alignItems={"center"} justifyContent="space-between">
          <Flex>
            <Avatar
              size="lg"
              src={`${api}/upload/user/${user.img}?token=${token}`}
            />
            <Flex flexDirection={"column"} alignItems={"flex-start"} pl={2}>
              <Heading
                px={2}
                py={1}
                rounded={"full"}
                bg="red.100"
                fontSize={"xl"}
              >
                @{user.username}
              </Heading>
              <ProfileSettingsMenu />
            </Flex>
          </Flex>
          <Box>
           
          <BadgeButton count={2} />
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Profile;
