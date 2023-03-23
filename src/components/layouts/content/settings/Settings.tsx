import * as React from 'react';
import CropperModal from "./CropperModal";
import UserInfo from "../../sidebar/UserInfo";
import s from "./settings.module.sass"
import SocialInfoAboutUser from "../../../shared/additionalComponents/SocialInfoAboutUser";
export default function Settings() {
    return (
        <div className={s.settingsWrapper}>
           <div className={s.userInfoWrapper}>
               <UserInfo/>
           </div>
            <CropperModal/>
            <SocialInfoAboutUser/>

        </div>
    );
}