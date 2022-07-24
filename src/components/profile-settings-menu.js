import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Icon,
  Badge,
  Flex,
} from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
import { FaDoorClosed } from "react-icons/fa";

function ProfileSettingsMenu() {
  return (
    <Menu>
      <MenuButton mt={2} as={Button} >
        <Flex alignItems={'center'} justifyContent="space-between" >
        <Icon as={SettingsIcon} mr={1}/>
        {" "}Settings
        </Flex>
      </MenuButton>
      <MenuList>
        <MenuGroup textAlign={'left'} title="Profile">
          <MenuItem>My Account</MenuItem>
        </MenuGroup>
         <MenuDivider />
         <MenuGroup>
          <MenuItem color="red.400"><Icon as={FaDoorClosed} mr={2} />Log out</MenuItem>

         </MenuGroup>
       {/* <MenuGroup textAlign={'left'} title="Help">
          <MenuItem>Docs</MenuItem>
          <MenuItem>FAQ</MenuItem>
        </MenuGroup> */}
      </MenuList>
    </Menu>
  );
}

export default ProfileSettingsMenu;
