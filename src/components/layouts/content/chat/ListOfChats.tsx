import React, {ChangeEvent, useEffect, useRef, useState} from "react";
import s from "./chat.module.sass"
import Avatar from "@mui/material/Avatar";
import {useSelector} from "react-redux";
import {changeValueTextArea,} from "store/reduxToolkit/features/chat-page/chatSlice";
import {
    getDataLoadedFlag,
    getMessages,
    getStatusWS,
    getTextArea
} from "store/reduxToolkit/features/chat-page/chatSelectors";
import {
    sendMessageToServer,
    startListeningNewMessages
} from "store/reduxToolkit/features/chat-page/chatThunks";
import {getDefaultAvatar} from "util/stringAvatar";
import {useTypeDispatch} from "hooks/useTypeDispatch";
import Button from "@mui/material/Button";


const ListOfChats: React.FC = () => {
    //autoscroll code
    const [isScrolled, setScrolling] = useState(true)
    const messagesEndRef: any = useRef(null)
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({behavior: "smooth"});
    };
    const scrollHandler = (e: React.UIEvent) => {
        const target = e.currentTarget
        if ((target.scrollHeight - target.scrollTop) - target.clientHeight < 300) {
            setScrolling(true)
        } else {
            setScrolling(false)
        }
    }
    //end of autoscroll code

    const dispatch = useTypeDispatch()
    const usersMessages = useSelector(getMessages)
    const checker = useSelector(getDataLoadedFlag)
    const textArea = useSelector(getTextArea)
    const statusWS = useSelector(getStatusWS)


    useEffect(() => {
        dispatch(startListeningNewMessages())
    }, [])

    useEffect(() => {
        if (isScrolled) {
            scrollToBottom()
        }
    }, [usersMessages])

    return (
        <>
            <div className={s.wrapper}>
                <div className={s.currentUserMessages}>
                    <div>Public Chat IT-CAMASUTRA</div>
                </div>
                <div className={s.messages}
                     onScroll={scrollHandler}>
                    <div>

                        {checker ?
                            null
                            : usersMessages!.map((e) =>
                                (
                                    <div
                                        key={Math.random()}
                                        className={s.userMessage}>
                                        {!e.photo ?
                                            <Avatar
                                                key={e.userId + "ava"} {...getDefaultAvatar(e.userName, 40, 40, .5)}
                                            /> :
                                            <img key={e.userId + "imgAva"} src={e.photo} alt="userfoto"/>
                                        }
                                        <div key={e.userId + "userId"}
                                             className={s.messageStyleName}>
                                            <div key={e.userId + "name"}
                                                 className={s.nameUser}>{e.userName}</div>
                                            <div key={e.userId + "message"}
                                                 className={s.messageUser}>{e.messageUser}</div>
                                        </div>
                                    </div>))}
                    </div>
                    <span ref={messagesEndRef}></span>
                </div>
            </div>
            <div className={s.inputMessages}>
                <textarea
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                        dispatch(changeValueTextArea(e.currentTarget.value))
                    }}
                    value={textArea}
                    placeholder={"Your message"}
                />
                <Button
                    disabled={statusWS === "pending"}
                    onClick={() => {
                        dispatch(sendMessageToServer(textArea))
                    }}>Send</Button>
            </div>
        </>
    );
}
export default ListOfChats;
