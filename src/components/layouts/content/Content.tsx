import React from "react";
import s from "./content.module.sass"
import Messages from "./messages/Messages";
import Friends from "./friends/Friends";
import Feed from "./feed/Feed";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import MyProfile from "./myProfile/MyProfile";
import {useSelector} from "react-redux";
import Loader from "../../shared/additionalComponents/Loader";
import Chat from "./chat/Chat";
import {IAppInitialState} from "interfaces/appInterfaces/appInterfaces";
import Settings from "./settings/Settings";
import ScrollButton from "../../shared/additionalComponents/ScrollUp";
import Marketplace from "./marketplace/Marketplace";


function Content() {
    const isLoading = useSelector((state: IAppInitialState) => state.loading)
    const location = useLocation();
    return (
        isLoading ?
            <div className={s.loader}><Loader/></div> :
            <div className={s.contentWrapper}>
                <div id="content" className={s.content}>
                    <div id="scroll"></div>
                    <ScrollButton/>
                    <Routes location={location}>
                        <Route path="profile" element={<MyProfile/>}/>
                        <Route path="*" element={<Navigate to="/profile"/>}/>
                        <Route path="messages" element={<Messages/>}/>
                        <Route path="feed" element={<Feed/>}/>
                        <Route path="friends" element={<Friends/>}/>
                        <Route path="chat" element={<Chat/>}/>
                        <Route path="marketplace" element={<Marketplace/>}/>
                        <Route path="settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
    );
}

export default Content;
