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
  Icon
} from "@chakra-ui/react";
import { FaUser, FaUserAstronaut } from "react-icons/fa";

const ContactMenu = () => {
  return (
    <Menu>
      <MenuButton as={Button} >
        <Icon as={FaUser} />
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ContactMenu;
