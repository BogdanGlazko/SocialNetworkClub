import React from "react";
import s from "./messages.module.sass"
import {useSelector, useDispatch} from 'react-redux'
import {changeStateOfMessage} from "store/reduxToolkit/features/messages-page/messagesSlice"
import {messagesPage} from "store/reduxToolkit/features/messages-page/messagesSelectors";

const ListOfUsers = () => {

    const messages = useSelector(messagesPage)
    const dispatch = useDispatch()
    const arrNum = messages.users.length;

    const result = [];
    for (let i = 0; ; i++) {
        if (i === arrNum) break;
        const name = {
            name: Object.values(messages.users[i])[0][0].name,
            img: Object.values(messages.users[i])[0][0].img,
            id: i
        };
        result.push(name);
    }

    return (
        <>
            <div className={s.listOfUsers}>
                <input
                    className={s.searchInput}
                    type="text"
                    placeholder={"Search"}
                    defaultValue={""}
                />

                {result.map(e =>
                    <div
                    className={s.usersInMessages}
                    onClick={() => dispatch(changeStateOfMessage({
                                          id: e.id,
                                          img: e.img,
                                          name: e.name
                                      }))}
                    key={e.id}>
                    <img alt={""}
                         key={e.id}
                         src={e.img}
                    />
                    <div key={e.id + Math.random()}> {e.name}</div>
                </div>)}

                {result.map(e =>
                    <div
                    className={s.usersInMessages}
                    onClick={() => dispatch(changeStateOfMessage({
                        id: e.id,
                        img: e.img,
                        name: e.name
                    }))}
                    key={e.id}>
                    <img alt={""}
                         key={e.id}
                         src={e.img}
                    />
                    <div key={e.id + Math.random()}> {e.name}</div>
                </div>)}
            </div>
        </>
    );
}
export default ListOfUsers;
