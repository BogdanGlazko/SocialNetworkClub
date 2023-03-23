import React from "react";
import s from "./chat.module.sass"
import ListOfChats from "./ListOfChats";

const Chat = () => {
    return (
        <>
            <h2>Public Chat</h2>
            <div className={s.chatPage}>
                <ListOfChats/>
            </div>
        </>

    );
}

export default Chat;
