import React from "react";
import s from "./messages.module.sass"
import {useDispatch, useSelector} from 'react-redux'
import {addMessage, changeArea} from "store/reduxToolkit/features/messages-page/messagesSlice"
import {AppDispatch} from "store/reduxToolkit";
import {
    currentMessage,
    currentUser,
    messagesPage,
    messageTextArea
} from "store/reduxToolkit/features/messages-page/messagesSelectors";

const ListOfChats = () => {

    const getCurrentUser = useSelector(currentUser)
    const getMessagesPage = useSelector(messagesPage)
    const getCurrentMessage = useSelector(currentMessage)
    const getMessageTextArea = useSelector(messageTextArea)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <>
            {!getCurrentUser ? "" :
                <div className={s.wrapper}>
                    <div className={s.currentUserMessages}>
                        <div className={s.currentUserWrapper}>
                            {!getCurrentUser ? "" : <> <img alt={"UserCurrent"} src={getCurrentUser["img"]}/>
                                <div className={s.userStatusWrapper}>
                                    <div>{getCurrentUser["name"]}</div>
                                    <div className={s.isOnlineUser}> is online</div>
                                </div>
                            </>}

                        </div>
                        <div className={s.currentUserWrapperDeleteMessage}>
                            <div className={s.svgDeleteMediaSmall}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     width="20"
                                     height="20"
                                     fill="currentColor"
                                     viewBox="0 0 20 20">
                                    <path fillRule="evenodd"
                                          d="M6.84 4H2.75a.75.75 0 0 0 0 1.5h.55l.9 9.25c.05.52.1.96.16 1.31.06.37.16.71.35 1.03a2.9 2.9 0 0 0 1.25 1.13c.33.16.68.22 1.06.25.36.03.8.03 1.32.03h3.32c.53 0 .96 0 1.32-.03.38-.03.73-.1 1.06-.25a2.9 2.9 0 0 0 1.25-1.13c.19-.32.29-.66.35-1.03.06-.35.1-.79.16-1.31l.9-9.25h.55a.75.75 0 0 0 0-1.5h-4.09a3.25 3.25 0 0 0-6.32 0Zm1.58 0h3.16a1.75 1.75 0 0 0-3.16 0Zm6.78 1.5H4.8l.9 9.07c.05.56.08.94.13 1.23.05.28.1.42.17.52a1.4 1.4 0 0 0 .6.55c.1.04.25.08.53.1.3.03.68.03 1.24.03h3.26c.56 0 .94 0 1.23-.02.29-.03.43-.07.54-.11a1.4 1.4 0 0 0 .6-.55c.06-.1.11-.24.16-.52.05-.3.1-.67.15-1.23l.89-9.07Zm-2.89 2a.75.75 0 0 1 .69.81l-.5 6a.75.75 0 0 1-1.5-.12l.5-6a.75.75 0 0 1 .81-.69Zm-4.62 0a.75.75 0 0 1 .8.69l.5 6a.75.75 0 0 1-1.49.13l-.5-6a.75.75 0 0 1 .69-.82Z"
                                          clipRule="evenodd">
                                    </path>
                                </svg>
                            </div>
                            <div className={s.deleteConversationText}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     width="20"
                                     height="20"
                                     fill="currentColor"
                                     viewBox="0 0 20 20">
                                    <path fillRule="evenodd"
                                          d="M6.84 4H2.75a.75.75 0 0 0 0 1.5h.55l.9 9.25c.05.52.1.96.16 1.31.06.37.16.71.35 1.03a2.9 2.9 0 0 0 1.25 1.13c.33.16.68.22 1.06.25.36.03.8.03 1.32.03h3.32c.53 0 .96 0 1.32-.03.38-.03.73-.1 1.06-.25a2.9 2.9 0 0 0 1.25-1.13c.19-.32.29-.66.35-1.03.06-.35.1-.79.16-1.31l.9-9.25h.55a.75.75 0 0 0 0-1.5h-4.09a3.25 3.25 0 0 0-6.32 0Zm1.58 0h3.16a1.75 1.75 0 0 0-3.16 0Zm6.78 1.5H4.8l.9 9.07c.05.56.08.94.13 1.23.05.28.1.42.17.52a1.4 1.4 0 0 0 .6.55c.1.04.25.08.53.1.3.03.68.03 1.24.03h3.26c.56 0 .94 0 1.23-.02.29-.03.43-.07.54-.11a1.4 1.4 0 0 0 .6-.55c.06-.1.11-.24.16-.52.05-.3.1-.67.15-1.23l.89-9.07Zm-2.89 2a.75.75 0 0 1 .69.81l-.5 6a.75.75 0 0 1-1.5-.12l.5-6a.75.75 0 0 1 .81-.69Zm-4.62 0a.75.75 0 0 1 .8.69l.5 6a.75.75 0 0 1-1.49.13l-.5-6a.75.75 0 0 1 .69-.82Z"
                                          clipRule="evenodd">
                                    </path>
                                </svg>
                                Delete conversation
                            </div>


                        </div>
                    </div>
                    <div className={s.messages}>
                        <div className={s.messagesScroll}>
                            {Object.values(getMessagesPage.users[getCurrentMessage])[0]
                                .map((e: { id: number; date: string; message: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) =>
                                <div
                                    className={e.id === 1 ? s.one : e.id === 2 ? s.two : e.id === 3 ? s.three : undefined}
                                    key={e.id + Math.random()}>
                                    {e.message}
                                    {e.date}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={s.inputMessages}>
                        <textarea
                            className={s.textAreaClass}
                            placeholder={"Your message"}
                            onChange={(e) => {
                                dispatch(changeArea(e.target.value))
                            }}
                            value={getMessageTextArea}
                        />
                        <button
                            onClick={(e) => dispatch(addMessage({id: 1, string: ""}))}>Send
                        </button>
                    </div>
                </div>
            }
        </>
    );
}
export default ListOfChats;




















