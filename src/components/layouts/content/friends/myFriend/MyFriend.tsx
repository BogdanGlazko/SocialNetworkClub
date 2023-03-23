import React from "react";
import s from "./friend.module.sass"
import {useDispatch} from "react-redux";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import {AppDispatch} from "../../../../../store/reduxToolkit";
import {followUser, unFollowUser} from "../../../../../store/reduxToolkit/features/friends-users/friendsThunks";
import {getDefaultAvatar} from "../../../../../util/stringAvatar";
import {IUserModel} from "../../../../../interfaces/friendsInterfaces/friendsInterfaces";
import {NavLink} from "react-router-dom";


const MyFriend = (props: IUserModel) => {

    const dispatch = useDispatch<AppDispatch>()

    return (
        <div className={s.friendWrapper}>
            <br/>
            <div className={s.friend}>
                <div className={s.leftSticky}>
                    {!props.photos.small ?
                        <NavLink to="/profile" state={{...props}}>
                            <Avatar  {...getDefaultAvatar(props.name, 65, 65, 2.5)} />
                        </NavLink> :
                        <NavLink to="/profile" state={{...props}}>
                            <img src={props.photos.small} alt="avatar"/>
                        </NavLink>
                    }
                    <div className={s.nameStatusWrapper}>
                        <NavLink to="/profile" state={{...props}}>
                            <div className={s.name}>{props.name}</div>
                        </NavLink>
                        <div className={s.status}>{props.status}</div>
                        <div>Send Meassage</div>
                    </div>
                </div>
                <div className={s.buttonWrapper}>
                    {props.followed ?
                        <Button
                            className={s.button}
                            onClick={() => dispatch(unFollowUser(props.id))}> Unfollow </Button>
                        : <Button
                            className={s.button}
                            variant="contained"
                            onClick={() => dispatch(followUser(props.id))}>Follow</Button>}
                </div>
            </div>
            <br/>
        </div>
    )
}

export default MyFriend;