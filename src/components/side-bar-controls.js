import React, {useContext} from "react";
import roomsContext from "../services/context/RoomContext";
import ContactMenu from "./contacts-menu";

const SideBarControls = () => {
    const { setFocus } = useContext(roomsContext);

    return (
        <div className="bar">
        <h2>Chats</h2>
        <div className="bar-controls">
            <div className="create-room">
                <i onClick={() => setFocus(true, "room")} className="bi bi-collection"></i>
            </div>
            <ContactMenu />
            <div className="add-contact">
                <i onClick={() => setFocus(true, "request")} className="bi bi-person-plus"></i>
            </div>
        </div>
    </div>
    );
}

export default SideBarControls;