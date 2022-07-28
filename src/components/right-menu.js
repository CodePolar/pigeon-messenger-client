import { Box, Fade, Flex, SlideFade } from "@chakra-ui/react";
import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Notifications from "./Notifications";

const RightMenu = ({leftRef}) => {
  const menuRef = useRef();
  const show = useSelector((state) => state.menu.show);

  const [menu, setMenu] = useState(0);
  const [sideBar, setSideBar] = useState(0);
  const [flow, setFlow] = useState(false);


  useEffect(() => {
    var timeout;
    if(!show) {
      timeout = setTimeout(() => {
        setFlow(false);
      }, 1000)
    } else {
      setFlow(true)
    }
    if (menuRef.current) {
      setMenu(
        (leftRef.current?.offsetWidth -
          (leftRef.current?.offsetWidth - menuRef.current?.offsetWidth)) *
          -1
      );
    }
    if (sideBar.current) {
      setSideBar(sideBar.current.offsetWidth);
    }
    return () => {
      clearTimeout(timeout);
    }
  }, [show]);

  return (
    <Flex
      ref={menuRef}
      w={470}
      position="absolute"
      zIndex={flow ? 9 : -1}
      right={`${menu}px`}
      minH="100vh"
      opacity={flow ? 9 : 0}
    > 
      <SlideFade offsetY="0px" offsetX="-20px" in={menu < 0 && show ? true : false}>
        <Notifications menu={menu} show={show} />
      </SlideFade>
    </Flex>
  );
};

export default RightMenu;
