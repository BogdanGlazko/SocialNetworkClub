import React from "react";
import s from "./messages.module.sass"
import ListOfUsers from "./ListOfUsers";
import ListOfMessages from "./ListOfMessages";


const Messages = () => {
    return (
        <>
                <h2>Messages</h2>
                <div className={s.messagesPage}>
                    <ListOfUsers />
                    <ListOfMessages />
                </div>
        </>

    );
}

export default Messages;
