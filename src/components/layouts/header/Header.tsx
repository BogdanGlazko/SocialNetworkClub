import React from "react";
import s from "./header.module.sass"
import {logoutUser} from "store/reduxToolkit/features/app/appThunk";
import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";
import club from "club.png";
import {AppDispatch} from "store/reduxToolkit";
import MouseOverPopover from "../../shared/additionalComponents/MouseOverPopover";
import HelperSVG from "../../../assets/svg components/helpSVG";
import NotificationSVG from "../../../assets/svg components/notificationSVG";
import LogoutSVG from "../../../assets/svg components/logOutSVG";
import ChangeThemeSVG from "../../../assets/svg components/changeThemeSVG";

function Header() {
    const dispatch = useDispatch<AppDispatch>()
    return (
        <>
            <header className={s.header}>
                <div className={s.headerLogo}>
                    <div className={s.logo}>
                        <img src={club} alt="club"/>
                        <div  className={s.appearancePosition}>
                            <MouseOverPopover
                                name={"Sorry.. this feature will be avaliable soon"}
                                svg={<ChangeThemeSVG/>}
                                position={{
                                    position: "fixed",
                                    left:"5%",
                                    top:"8%",
                                    pointerEvents: 'none',
                                    width:"33%"}}
                                sx={{ fontSize:"16px", p: 2.5 }}
                            />
                        </div>
                    </div>
                </div>
                <div className={s.elementHover}>
                    <div>
                      <NotificationSVG/>
                    </div>
                    <div className={s.elementHover}>
                        <MouseOverPopover
                            name={"Hey guys if you have any question please write me via this email : bhlazko@gmail.com  Thanks so much!"}
                            svg={<HelperSVG/>}
                            position={{
                                position: "fixed",
                                left:"65%",
                                top:"8%",
                                pointerEvents: 'none',
                                width:"33%"}}
                            sx={{ fontSize:"16px", p: 2.5 }}
                        />
                    </div>
                    <div className={s.elementHover}
                         onClick={() => dispatch(logoutUser())}
                    >
                        <NavLink to="/login">
                           <LogoutSVG/>
                        </NavLink>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
