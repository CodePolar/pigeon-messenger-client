import React, { useContext } from 'react'
import { animated } from 'react-spring';
import userContext from '../services/context/UserContext'
import {api} from "../services/config";
import { Avatar } from '@chakra-ui/react';

function Message({ data }) {

    const { user, token } = useContext(userContext);


    return (
        <>
            {data.global ? (
                <div className="global-message">
                    <p> <i className="bi bi-broadcast"></i> {data.text}</p>
                </div>
            ) : (
                <animated.div className={`message ${user.username === data.author.username ? "right" : ""}`}>
                    <div className="user">
                        <Avatar ml={user.username === data.author.username ? 2 : 0} mr={user.username === data.author.username ? 0 : 2} src={data.author.img == "default.png"? false : `${api}/upload/user/${data.author.img}?token=${token}`} alt="" />
                        <p>{data.author.username}</p>
                    </div>

                    {data.files.length > 0 ? (
                        <>
                            <div className="image">
                                {data.files.map((e, i) => {
                                    return <img key={i} src={`${api}/upload/docs/${e.path}?token=${token}`} alt={`loading`} />
                                })}
                            </div>
                            <div className="message-content">
                                <div className="date">
                                    {(() => {
                                        if (new Date(data.msgDate).getDate() === new Date().getDate()) {
                                            let date = new Date(data.msgDate);
                                            let formatted = `${date.getHours()}:${date.getMinutes()}`;

                                            return <p className="pdate">{formatted}</p>;
                                        }
                                    })()}
                                </div>
                                <div className="text">
                                    <p>{data.text}</p>
                                </div>
                            </div>
                        </>

                    ) : (
                        <div className="message-content">
                            <div className="date">
                                {(() => {
                                    if (new Date(data.msgDate).getDate() === new Date().getDate()) {
                                        let date = new Date(data.msgDate);
                                        let formatted = `${date.getHours()}:${date.getMinutes().toString().length > 1 ? date.getMinutes().toString() : "0" + date.getMinutes().toString()}`;

                                        return <p className="pdate">{formatted}</p>;
                                    }
                                })()}
                            </div>
                            {data.text.length > 0 ? (
                                <div className="text">
                                    <p>{data.text}</p>
                                </div>
                            ) : ""}

                        </div>
                    )}
                </animated.div>
            )}
        </>




    )
}

export default Message
