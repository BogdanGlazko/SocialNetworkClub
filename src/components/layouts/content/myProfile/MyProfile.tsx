import React, {useEffect, useRef} from "react";
import s from "./myProfile.module.sass"
import Button from '@mui/material/Button';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import {NavLink, useLocation} from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import {useTypeDispatch} from "hooks/useTypeDispatch";
import {useSelector} from "react-redux";
import {getIsFollower, getUserDataForProfilePage} from "store/reduxToolkit/features/myProfile-page/myProfileSelectors";
import {getUserData} from "store/reduxToolkit/features/app/appSelectors";
import {
    followUser,
    getUserForMyProfile,
    unFollowUser
} from "store/reduxToolkit/features/myProfile-page/myProfileThunks";
import {getDefaultAvatar} from "util/stringAvatar";
import Avatar from "@mui/material/Avatar";
import Loader from "../../../shared/additionalComponents/Loader";

function MyProfile() {
    const dispatch = useTypeDispatch()
    const location = useLocation();
    const {state}: any = location;
    const dataAboutUser = useSelector(getUserDataForProfilePage)
    const isFollowerUser = useSelector(getIsFollower)
    const infoAboutLoggedUser = useSelector(getUserData)


    useEffect(() => {
        if (state) {
            dispatch(getUserForMyProfile(state.id))
        } else {
            dispatch(getUserForMyProfile(infoAboutLoggedUser!.id))
        }
    }, [state])


    useEffect(() => {
        const element = document.getElementById('scroll');
        console.log(element)
        if (element) {
            element.scrollIntoView({ behavior:"auto" });
        }
    },[]);


    if (dataAboutUser!.fullName) {
        return (
            <div id={"userMainInfoWrapper"}>
                <div className={s.userMainInfo} id={"userMainInfo"}>
                    <div className={s.userMainInfoContainer}>
                        <div className={s.circleAvatar}>
                            {(dataAboutUser?.photos.large === null) ?
                                <Avatar {...getDefaultAvatar(dataAboutUser.fullName, 235, 235, 2.5)}/> :
                                <img src={dataAboutUser?.photos.large} alt="userPhoto"/>
                            }
                        </div>
                        <div className={s.userInfo}>
                            <div className={s.nameOfUser}>{dataAboutUser?.fullName}</div>
                            <div className={s.aboutUser}>
                                {(dataAboutUser?.status === null) ?
                                    "I'am without status:(" :
                                    dataAboutUser?.status
                                }
                            </div>

                            <div className={s.buttons}>
                                <>
                                    {state === null ?
                                        <NavLink to={"/friends"}>
                                            <Button
                                                variant="contained"
                                                color={"secondary"}
                                                sx={{marginRight: "25px",}}
                                            > Add Friends
                                            </Button>
                                        </NavLink> :

                                        isFollowerUser ?
                                            <Button
                                                sx={{marginRight: "25px",}}
                                                onClick={() => dispatch(unFollowUser(state.id))}> Unfollow </Button>
                                            : <Button
                                                className={s.buttonMargin}
                                                sx={{marginRight: "25px",}}
                                                variant="contained"
                                                onClick={() => dispatch(followUser(state.id))}>Follow</Button>
                                    }
                                </>
                                <NavLink to={"/messages"}>
                                    <Button
                                        className={s.buttonMessage}
                                        variant="contained"
                                        color={"success"}> Send Message
                                    </Button>
                                </NavLink>
                            </div>
                            <div className={s.infoAboutFollowers}>
                                <div>120k <span>posts</span></div>
                                |
                                <div>420k <span>followers</span></div>
                                |
                                <div> 530k <span>followers</span></div>
                            </div>
                        </div>
                    </div>
                    <br/><br/>
                    <div className={`${s.recent} ${s.boldHeader}`}>


                        <div>Recent Photos</div>

                        <div className={s.imagesWrapper}>
                            <div className={s.imagesRecent}>
                                <div className={s.addPhotoBlock}>
                                    <div>
                                        <div>
                                            <svg fill="none" height="20" viewBox="0 0 20 20" width="20"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path clipRule="evenodd"
                                                      d="M10 2c.41 0 .75.34.75.75v6.5h6.5a.75.75 0 0 1 0 1.5h-6.5v6.5a.75.75 0 0 1-1.5 0v-6.5h-6.5a.75.75 0 0 1 0-1.5h6.5v-6.5c0-.41.34-.75.75-.75z"
                                                      fill="currentColor" fillRule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <div>Add new</div>
                                    </div>

                                </div>
                                <img src="http://demo.foxthemes.net/instellohtml/assets/images/avatars/avatar-lg-1.jpg"
                                     alt=""/>
                                <img src="http://demo.foxthemes.net/instellohtml/assets/images/post/img2.jpg" alt=""/>
                                <img src="http://demo.foxthemes.net/instellohtml/assets/images/post/img7.jpg" alt=""/>
                            </div>
                        </div>

                        <div className={`${s.explore} ${s.boldHeader}`}>
                            <div className={s.exploreWrapperButtons}>
                                <div>Explore</div>
                                <div className={s.exploreLine}></div>
                                <div className={s.buttonsChangeLayout}>
                                    <div>
                                        <FormatListBulletedIcon/>
                                        <span className={s.tooltipText}>Grid View</span>
                                    </div>
                                    <div>
                                        <ViewCompactIcon/>
                                        <span className={s.tooltipText}>List View</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={s.imagesExplore}>
                                    <div className={s.imagesExploreElement}>
                                        <img src="http://demo.foxthemes.net/instellohtml/assets/images/post/img3.jpg"
                                             alt=""/>
                                        <div className={s.likesComments}>
                                            <div className={s.like}>
                                                <svg height="24" viewBox="0 0 24 24" width="24"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="none" fillRule="evenodd">
                                                        <path d="M0 0h24v24H0z"></path>
                                                        <path
                                                            d="M16 4a5.95 5.95 0 0 0-3.89 1.7l-.12.11-.12-.11A5.96 5.96 0 0 0 7.73 4 5.73 5.73 0 0 0 2 9.72c0 3.08 1.13 4.55 6.18 8.54l2.69 2.1c.66.52 1.6.52 2.26 0l2.36-1.84.94-.74c4.53-3.64 5.57-5.1 5.57-8.06A5.73 5.73 0 0 0 16.27 4zm.27 1.8a3.93 3.93 0 0 1 3.93 3.92v.3c-.08 2.15-1.07 3.33-5.51 6.84l-2.67 2.08a.04.04 0 0 1-.04 0L9.6 17.1l-.87-.7C4.6 13.1 3.8 11.98 3.8 9.73A3.93 3.93 0 0 1 7.73 5.8c1.34 0 2.51.62 3.57 1.92a.9.9 0 0 0 1.4-.01c1.04-1.3 2.2-1.91 3.57-1.91z"
                                                            fill="currentColor" fillRule="nonzero"></path>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className={s.comment}>
                                                <svg height="24" viewBox="0 0 24 24" width="24"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="none" fillRule="evenodd">
                                                        <path d="M0 0h24v24H0z"></path>
                                                        <path
                                                            d="M16.9 4H7.1c-1.15 0-1.73.11-2.35.44-.56.3-1 .75-1.31 1.31C3.11 6.37 3 6.95 3 8.1v5.8c0 1.15.11 1.73.44 2.35.3.56.75 1 1.31 1.31l.15.07c.51.25 1.04.35 1.95.37h.25v2.21c0 .44.17.85.47 1.16l.12.1c.64.55 1.6.52 2.21-.08L13.37 18h3.53c1.15 0 1.73-.11 2.35-.44.56-.3 1-.75 1.31-1.31.33-.62.44-1.2.44-2.35V8.1c0-1.15-.11-1.73-.44-2.35a3.17 3.17 0 0 0-1.31-1.31A4.51 4.51 0 0 0 16.9 4zM6.9 5.8h9.99c.88 0 1.18.06 1.5.23.25.13.44.32.57.57.17.32.23.62.23 1.5v6.16c-.02.61-.09.87-.23 1.14-.13.25-.32.44-.57.57-.32.17-.62.23-1.5.23h-4.02a.9.9 0 0 0-.51.26l-3.47 3.4V17.1c0-.5-.4-.9-.9-.9H6.74a2.3 2.3 0 0 1-1.14-.23 1.37 1.37 0 0 1-.57-.57c-.17-.32-.23-.62-.23-1.5V7.74c.02-.61.09-.87.23-1.14.13-.25.32-.44.57-.57.3-.16.58-.22 1.31-.23z"
                                                            fill="currentColor" fillRule="nonzero"></path>
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={s.imagesExploreElement}>
                                        <img src="http://demo.foxthemes.net/instellohtml/assets/images/post/img8.jpg"
                                             alt=""/>
                                        <div className={s.likesComments}>
                                            <div className={s.like}>
                                                <svg height="24" viewBox="0 0 24 24" width="24"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="none" fillRule="evenodd">
                                                        <path d="M0 0h24v24H0z"></path>
                                                        <path
                                                            d="M16 4a5.95 5.95 0 0 0-3.89 1.7l-.12.11-.12-.11A5.96 5.96 0 0 0 7.73 4 5.73 5.73 0 0 0 2 9.72c0 3.08 1.13 4.55 6.18 8.54l2.69 2.1c.66.52 1.6.52 2.26 0l2.36-1.84.94-.74c4.53-3.64 5.57-5.1 5.57-8.06A5.73 5.73 0 0 0 16.27 4zm.27 1.8a3.93 3.93 0 0 1 3.93 3.92v.3c-.08 2.15-1.07 3.33-5.51 6.84l-2.67 2.08a.04.04 0 0 1-.04 0L9.6 17.1l-.87-.7C4.6 13.1 3.8 11.98 3.8 9.73A3.93 3.93 0 0 1 7.73 5.8c1.34 0 2.51.62 3.57 1.92a.9.9 0 0 0 1.4-.01c1.04-1.3 2.2-1.91 3.57-1.91z"
                                                            fill="currentColor" fillRule="nonzero"></path>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className={s.comment}>
                                                <svg height="24" viewBox="0 0 24 24" width="24"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="none" fillRule="evenodd">
                                                        <path d="M0 0h24v24H0z"></path>
                                                        <path
                                                            d="M16.9 4H7.1c-1.15 0-1.73.11-2.35.44-.56.3-1 .75-1.31 1.31C3.11 6.37 3 6.95 3 8.1v5.8c0 1.15.11 1.73.44 2.35.3.56.75 1 1.31 1.31l.15.07c.51.25 1.04.35 1.95.37h.25v2.21c0 .44.17.85.47 1.16l.12.1c.64.55 1.6.52 2.21-.08L13.37 18h3.53c1.15 0 1.73-.11 2.35-.44.56-.3 1-.75 1.31-1.31.33-.62.44-1.2.44-2.35V8.1c0-1.15-.11-1.73-.44-2.35a3.17 3.17 0 0 0-1.31-1.31A4.51 4.51 0 0 0 16.9 4zM6.9 5.8h9.99c.88 0 1.18.06 1.5.23.25.13.44.32.57.57.17.32.23.62.23 1.5v6.16c-.02.61-.09.87-.23 1.14-.13.25-.32.44-.57.57-.32.17-.62.23-1.5.23h-4.02a.9.9 0 0 0-.51.26l-3.47 3.4V17.1c0-.5-.4-.9-.9-.9H6.74a2.3 2.3 0 0 1-1.14-.23 1.37 1.37 0 0 1-.57-.57c-.17-.32-.23-.62-.23-1.5V7.74c.02-.61.09-.87.23-1.14.13-.25.32-.44.57-.57.3-.16.58-.22 1.31-.23z"
                                                            fill="currentColor" fillRule="nonzero"></path>
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={s.imagesExploreElement}>
                                        <img src="http://demo.foxthemes.net/instellohtml/assets/images/post/img7.jpg"
                                             alt=""/>
                                        <div className={s.likesComments}>
                                            <div className={s.like}>
                                                <svg height="24" viewBox="0 0 24 24" width="24"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="none" fillRule="evenodd">
                                                        <path d="M0 0h24v24H0z"></path>
                                                        <path
                                                            d="M16 4a5.95 5.95 0 0 0-3.89 1.7l-.12.11-.12-.11A5.96 5.96 0 0 0 7.73 4 5.73 5.73 0 0 0 2 9.72c0 3.08 1.13 4.55 6.18 8.54l2.69 2.1c.66.52 1.6.52 2.26 0l2.36-1.84.94-.74c4.53-3.64 5.57-5.1 5.57-8.06A5.73 5.73 0 0 0 16.27 4zm.27 1.8a3.93 3.93 0 0 1 3.93 3.92v.3c-.08 2.15-1.07 3.33-5.51 6.84l-2.67 2.08a.04.04 0 0 1-.04 0L9.6 17.1l-.87-.7C4.6 13.1 3.8 11.98 3.8 9.73A3.93 3.93 0 0 1 7.73 5.8c1.34 0 2.51.62 3.57 1.92a.9.9 0 0 0 1.4-.01c1.04-1.3 2.2-1.91 3.57-1.91z"
                                                            fill="currentColor" fillRule="nonzero"></path>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className={s.comment}>
                                                <svg height="24" viewBox="0 0 24 24" width="24"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="none" fillRule="evenodd">
                                                        <path d="M0 0h24v24H0z"></path>
                                                        <path
                                                            d="M16.9 4H7.1c-1.15 0-1.73.11-2.35.44-.56.3-1 .75-1.31 1.31C3.11 6.37 3 6.95 3 8.1v5.8c0 1.15.11 1.73.44 2.35.3.56.75 1 1.31 1.31l.15.07c.51.25 1.04.35 1.95.37h.25v2.21c0 .44.17.85.47 1.16l.12.1c.64.55 1.6.52 2.21-.08L13.37 18h3.53c1.15 0 1.73-.11 2.35-.44.56-.3 1-.75 1.31-1.31.33-.62.44-1.2.44-2.35V8.1c0-1.15-.11-1.73-.44-2.35a3.17 3.17 0 0 0-1.31-1.31A4.51 4.51 0 0 0 16.9 4zM6.9 5.8h9.99c.88 0 1.18.06 1.5.23.25.13.44.32.57.57.17.32.23.62.23 1.5v6.16c-.02.61-.09.87-.23 1.14-.13.25-.32.44-.57.57-.32.17-.62.23-1.5.23h-4.02a.9.9 0 0 0-.51.26l-3.47 3.4V17.1c0-.5-.4-.9-.9-.9H6.74a2.3 2.3 0 0 1-1.14-.23 1.37 1.37 0 0 1-.57-.57c-.17-.32-.23-.62-.23-1.5V7.74c.02-.61.09-.87.23-1.14.13-.25.32-.44.57-.57.3-.16.58-.22 1.31-.23z"
                                                            fill="currentColor" fillRule="nonzero"></path>
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={s.imagesExploreElement}>
                                        <img src="http://demo.foxthemes.net/instellohtml/assets/images/post/img5.jpg"
                                             alt=""/>
                                        <div className={s.likesComments}>
                                            <div className={s.like}>
                                                <svg height="24" viewBox="0 0 24 24" width="24"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="none" fillRule="evenodd">
                                                        <path d="M0 0h24v24H0z"></path>
                                                        <path
                                                            d="M16 4a5.95 5.95 0 0 0-3.89 1.7l-.12.11-.12-.11A5.96 5.96 0 0 0 7.73 4 5.73 5.73 0 0 0 2 9.72c0 3.08 1.13 4.55 6.18 8.54l2.69 2.1c.66.52 1.6.52 2.26 0l2.36-1.84.94-.74c4.53-3.64 5.57-5.1 5.57-8.06A5.73 5.73 0 0 0 16.27 4zm.27 1.8a3.93 3.93 0 0 1 3.93 3.92v.3c-.08 2.15-1.07 3.33-5.51 6.84l-2.67 2.08a.04.04 0 0 1-.04 0L9.6 17.1l-.87-.7C4.6 13.1 3.8 11.98 3.8 9.73A3.93 3.93 0 0 1 7.73 5.8c1.34 0 2.51.62 3.57 1.92a.9.9 0 0 0 1.4-.01c1.04-1.3 2.2-1.91 3.57-1.91z"
                                                            fill="currentColor" fillRule="nonzero"></path>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className={s.comment}>
                                                <svg height="24" viewBox="0 0 24 24" width="24"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="none" fillRule="evenodd">
                                                        <path d="M0 0h24v24H0z"></path>
                                                        <path
                                                            d="M16.9 4H7.1c-1.15 0-1.73.11-2.35.44-.56.3-1 .75-1.31 1.31C3.11 6.37 3 6.95 3 8.1v5.8c0 1.15.11 1.73.44 2.35.3.56.75 1 1.31 1.31l.15.07c.51.25 1.04.35 1.95.37h.25v2.21c0 .44.17.85.47 1.16l.12.1c.64.55 1.6.52 2.21-.08L13.37 18h3.53c1.15 0 1.73-.11 2.35-.44.56-.3 1-.75 1.31-1.31.33-.62.44-1.2.44-2.35V8.1c0-1.15-.11-1.73-.44-2.35a3.17 3.17 0 0 0-1.31-1.31A4.51 4.51 0 0 0 16.9 4zM6.9 5.8h9.99c.88 0 1.18.06 1.5.23.25.13.44.32.57.57.17.32.23.62.23 1.5v6.16c-.02.61-.09.87-.23 1.14-.13.25-.32.44-.57.57-.32.17-.62.23-1.5.23h-4.02a.9.9 0 0 0-.51.26l-3.47 3.4V17.1c0-.5-.4-.9-.9-.9H6.74a2.3 2.3 0 0 1-1.14-.23 1.37 1.37 0 0 1-.57-.57c-.17-.32-.23-.62-.23-1.5V7.74c.02-.61.09-.87.23-1.14.13-.25.32-.44.57-.57.3-.16.58-.22 1.31-.23z"
                                                            fill="currentColor" fillRule="nonzero"></path>
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={s.imagesExploreElement}>
                                        <img
                                            src="http://demo.foxthemes.net/instellohtml/assets/images/avatars/avatar-6.jpg"
                                            alt=""/>

                                        <div className={s.likesComments}>
                                            <div className={s.like}>
                                                <svg height="24" viewBox="0 0 24 24" width="24"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="none" fillRule="evenodd">
                                                        <path d="M0 0h24v24H0z"></path>
                                                        <path
                                                            d="M16 4a5.95 5.95 0 0 0-3.89 1.7l-.12.11-.12-.11A5.96 5.96 0 0 0 7.73 4 5.73 5.73 0 0 0 2 9.72c0 3.08 1.13 4.55 6.18 8.54l2.69 2.1c.66.52 1.6.52 2.26 0l2.36-1.84.94-.74c4.53-3.64 5.57-5.1 5.57-8.06A5.73 5.73 0 0 0 16.27 4zm.27 1.8a3.93 3.93 0 0 1 3.93 3.92v.3c-.08 2.15-1.07 3.33-5.51 6.84l-2.67 2.08a.04.04 0 0 1-.04 0L9.6 17.1l-.87-.7C4.6 13.1 3.8 11.98 3.8 9.73A3.93 3.93 0 0 1 7.73 5.8c1.34 0 2.51.62 3.57 1.92a.9.9 0 0 0 1.4-.01c1.04-1.3 2.2-1.91 3.57-1.91z"
                                                            fill="currentColor" fillRule="nonzero"></path>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className={s.comment}>
                                                <svg height="24" viewBox="0 0 24 24" width="24"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="none" fillRule="evenodd">
                                                        <path d="M0 0h24v24H0z"></path>
                                                        <path
                                                            d="M16.9 4H7.1c-1.15 0-1.73.11-2.35.44-.56.3-1 .75-1.31 1.31C3.11 6.37 3 6.95 3 8.1v5.8c0 1.15.11 1.73.44 2.35.3.56.75 1 1.31 1.31l.15.07c.51.25 1.04.35 1.95.37h.25v2.21c0 .44.17.85.47 1.16l.12.1c.64.55 1.6.52 2.21-.08L13.37 18h3.53c1.15 0 1.73-.11 2.35-.44.56-.3 1-.75 1.31-1.31.33-.62.44-1.2.44-2.35V8.1c0-1.15-.11-1.73-.44-2.35a3.17 3.17 0 0 0-1.31-1.31A4.51 4.51 0 0 0 16.9 4zM6.9 5.8h9.99c.88 0 1.18.06 1.5.23.25.13.44.32.57.57.17.32.23.62.23 1.5v6.16c-.02.61-.09.87-.23 1.14-.13.25-.32.44-.57.57-.32.17-.62.23-1.5.23h-4.02a.9.9 0 0 0-.51.26l-3.47 3.4V17.1c0-.5-.4-.9-.9-.9H6.74a2.3 2.3 0 0 1-1.14-.23 1.37 1.37 0 0 1-.57-.57c-.17-.32-.23-.62-.23-1.5V7.74c.02-.61.09-.87.23-1.14.13-.25.32-.44.57-.57.3-.16.58-.22 1.31-.23z"
                                                            fill="currentColor" fillRule="nonzero"></path>
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={s.imagesExploreElement}>
                                        <img src="http://demo.foxthemes.net/instellohtml/assets/images/post/img2.jpg"
                                             alt=""/>

                                        <div className={s.likesComments}>
                                            <div className={s.like}>
                                                <svg height="24" viewBox="0 0 24 24" width="24"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="none" fillRule="evenodd">
                                                        <path d="M0 0h24v24H0z"></path>
                                                        <path
                                                            d="M16 4a5.95 5.95 0 0 0-3.89 1.7l-.12.11-.12-.11A5.96 5.96 0 0 0 7.73 4 5.73 5.73 0 0 0 2 9.72c0 3.08 1.13 4.55 6.18 8.54l2.69 2.1c.66.52 1.6.52 2.26 0l2.36-1.84.94-.74c4.53-3.64 5.57-5.1 5.57-8.06A5.73 5.73 0 0 0 16.27 4zm.27 1.8a3.93 3.93 0 0 1 3.93 3.92v.3c-.08 2.15-1.07 3.33-5.51 6.84l-2.67 2.08a.04.04 0 0 1-.04 0L9.6 17.1l-.87-.7C4.6 13.1 3.8 11.98 3.8 9.73A3.93 3.93 0 0 1 7.73 5.8c1.34 0 2.51.62 3.57 1.92a.9.9 0 0 0 1.4-.01c1.04-1.3 2.2-1.91 3.57-1.91z"
                                                            fill="currentColor" fillRule="nonzero"></path>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className={s.comment}>
                                                <svg height="24" viewBox="0 0 24 24" width="24"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="none" fillRule="evenodd">
                                                        <path d="M0 0h24v24H0z"></path>
                                                        <path
                                                            d="M16.9 4H7.1c-1.15 0-1.73.11-2.35.44-.56.3-1 .75-1.31 1.31C3.11 6.37 3 6.95 3 8.1v5.8c0 1.15.11 1.73.44 2.35.3.56.75 1 1.31 1.31l.15.07c.51.25 1.04.35 1.95.37h.25v2.21c0 .44.17.85.47 1.16l.12.1c.64.55 1.6.52 2.21-.08L13.37 18h3.53c1.15 0 1.73-.11 2.35-.44.56-.3 1-.75 1.31-1.31.33-.62.44-1.2.44-2.35V8.1c0-1.15-.11-1.73-.44-2.35a3.17 3.17 0 0 0-1.31-1.31A4.51 4.51 0 0 0 16.9 4zM6.9 5.8h9.99c.88 0 1.18.06 1.5.23.25.13.44.32.57.57.17.32.23.62.23 1.5v6.16c-.02.61-.09.87-.23 1.14-.13.25-.32.44-.57.57-.32.17-.62.23-1.5.23h-4.02a.9.9 0 0 0-.51.26l-3.47 3.4V17.1c0-.5-.4-.9-.9-.9H6.74a2.3 2.3 0 0 1-1.14-.23 1.37 1.37 0 0 1-.57-.57c-.17-.32-.23-.62-.23-1.5V7.74c.02-.61.09-.87.23-1.14.13-.25.32-.44.57-.57.3-.16.58-.22 1.31-.23z"
                                                            fill="currentColor" fillRule="nonzero"></path>
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={s.imagesExploreElement}>
                                        <img src="http://demo.foxthemes.net/instellohtml/assets/images/post/img4.jpg"
                                             alt=""/>
                                        <div className={s.likesComments}>
                                            <div className={s.like}>
                                                <svg height="24" viewBox="0 0 24 24" width="24"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="none" fillRule="evenodd">
                                                        <path d="M0 0h24v24H0z"></path>
                                                        <path
                                                            d="M16 4a5.95 5.95 0 0 0-3.89 1.7l-.12.11-.12-.11A5.96 5.96 0 0 0 7.73 4 5.73 5.73 0 0 0 2 9.72c0 3.08 1.13 4.55 6.18 8.54l2.69 2.1c.66.52 1.6.52 2.26 0l2.36-1.84.94-.74c4.53-3.64 5.57-5.1 5.57-8.06A5.73 5.73 0 0 0 16.27 4zm.27 1.8a3.93 3.93 0 0 1 3.93 3.92v.3c-.08 2.15-1.07 3.33-5.51 6.84l-2.67 2.08a.04.04 0 0 1-.04 0L9.6 17.1l-.87-.7C4.6 13.1 3.8 11.98 3.8 9.73A3.93 3.93 0 0 1 7.73 5.8c1.34 0 2.51.62 3.57 1.92a.9.9 0 0 0 1.4-.01c1.04-1.3 2.2-1.91 3.57-1.91z"
                                                            fill="currentColor" fillRule="nonzero"></path>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className={s.comment}>
                                                <svg height="24" viewBox="0 0 24 24" width="24"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="none" fillRule="evenodd">
                                                        <path d="M0 0h24v24H0z"></path>
                                                        <path
                                                            d="M16.9 4H7.1c-1.15 0-1.73.11-2.35.44-.56.3-1 .75-1.31 1.31C3.11 6.37 3 6.95 3 8.1v5.8c0 1.15.11 1.73.44 2.35.3.56.75 1 1.31 1.31l.15.07c.51.25 1.04.35 1.95.37h.25v2.21c0 .44.17.85.47 1.16l.12.1c.64.55 1.6.52 2.21-.08L13.37 18h3.53c1.15 0 1.73-.11 2.35-.44.56-.3 1-.75 1.31-1.31.33-.62.44-1.2.44-2.35V8.1c0-1.15-.11-1.73-.44-2.35a3.17 3.17 0 0 0-1.31-1.31A4.51 4.51 0 0 0 16.9 4zM6.9 5.8h9.99c.88 0 1.18.06 1.5.23.25.13.44.32.57.57.17.32.23.62.23 1.5v6.16c-.02.61-.09.87-.23 1.14-.13.25-.32.44-.57.57-.32.17-.62.23-1.5.23h-4.02a.9.9 0 0 0-.51.26l-3.47 3.4V17.1c0-.5-.4-.9-.9-.9H6.74a2.3 2.3 0 0 1-1.14-.23 1.37 1.37 0 0 1-.57-.57c-.17-.32-.23-.62-.23-1.5V7.74c.02-.61.09-.87.23-1.14.13-.25.32-.44.57-.57.3-.16.58-.22 1.31-.23z"
                                                            fill="currentColor" fillRule="nonzero"></path>
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={s.imagesExploreElement}>
                                        <img
                                            src="	http://demo.foxthemes.net/instellohtml/assets/images/avatars/avatar-1.jpg"
                                            alt=""/>
                                        <div className={s.likesComments}>
                                            <div className={s.like}>
                                                <svg height="24" viewBox="0 0 24 24" width="24"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="none" fillRule="evenodd">
                                                        <path d="M0 0h24v24H0z"></path>
                                                        <path
                                                            d="M16 4a5.95 5.95 0 0 0-3.89 1.7l-.12.11-.12-.11A5.96 5.96 0 0 0 7.73 4 5.73 5.73 0 0 0 2 9.72c0 3.08 1.13 4.55 6.18 8.54l2.69 2.1c.66.52 1.6.52 2.26 0l2.36-1.84.94-.74c4.53-3.64 5.57-5.1 5.57-8.06A5.73 5.73 0 0 0 16.27 4zm.27 1.8a3.93 3.93 0 0 1 3.93 3.92v.3c-.08 2.15-1.07 3.33-5.51 6.84l-2.67 2.08a.04.04 0 0 1-.04 0L9.6 17.1l-.87-.7C4.6 13.1 3.8 11.98 3.8 9.73A3.93 3.93 0 0 1 7.73 5.8c1.34 0 2.51.62 3.57 1.92a.9.9 0 0 0 1.4-.01c1.04-1.3 2.2-1.91 3.57-1.91z"
                                                            fill="currentColor" fillRule="nonzero"></path>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className={s.comment}>
                                                <svg height="24" viewBox="0 0 24 24" width="24"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <g fill="none" fillRule="evenodd">
                                                        <path d="M0 0h24v24H0z"></path>
                                                        <path
                                                            d="M16.9 4H7.1c-1.15 0-1.73.11-2.35.44-.56.3-1 .75-1.31 1.31C3.11 6.37 3 6.95 3 8.1v5.8c0 1.15.11 1.73.44 2.35.3.56.75 1 1.31 1.31l.15.07c.51.25 1.04.35 1.95.37h.25v2.21c0 .44.17.85.47 1.16l.12.1c.64.55 1.6.52 2.21-.08L13.37 18h3.53c1.15 0 1.73-.11 2.35-.44.56-.3 1-.75 1.31-1.31.33-.62.44-1.2.44-2.35V8.1c0-1.15-.11-1.73-.44-2.35a3.17 3.17 0 0 0-1.31-1.31A4.51 4.51 0 0 0 16.9 4zM6.9 5.8h9.99c.88 0 1.18.06 1.5.23.25.13.44.32.57.57.17.32.23.62.23 1.5v6.16c-.02.61-.09.87-.23 1.14-.13.25-.32.44-.57.57-.32.17-.62.23-1.5.23h-4.02a.9.9 0 0 0-.51.26l-3.47 3.4V17.1c0-.5-.4-.9-.9-.9H6.74a2.3 2.3 0 0 1-1.14-.23 1.37 1.37 0 0 1-.57-.57c-.17-.32-.23-.62-.23-1.5V7.74c.02-.61.09-.87.23-1.14.13-.25.32-.44.57-.57.3-.16.58-.22 1.31-.23z"
                                                            fill="currentColor"
                                                            fillRule="nonzero"></path>
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className={s.loadMoreButton}>
                    Load more ...
                </button>

            </div>
        );

    } else {
        return <Loader/>
    }

}

export default MyProfile;

