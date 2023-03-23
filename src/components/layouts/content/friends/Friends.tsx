import React, {useEffect} from "react";
import MyFriend from "./myFriend/MyFriend";
import {omit} from 'lodash';
import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import Loader from "components/shared/additionalComponents/Loader";
import Pagination from '@mui/material/Pagination';
import s from "./myFriend/friend.module.sass"
import {
    checkBoxSelector,
    currentPageSelector,
    getInitialValueInput,
    isFollowerSelector,
    isLoadedSelector,
    isLoadedUsersOnChangePageSelector,
    pageSizeSelector,
    totalCountSelector,
    usersSelector
} from "store/reduxToolkit/features/friends-users/friendsSelectors";
import SearchForm from "./myFriend/FindFriendsInput";
import {Checkbox, Modal} from "@mui/material";
import {followersCheckbox, loading} from "store/reduxToolkit/features/friends-users/friendsThunks";
import {getUsersForChatPage} from "store/reduxToolkit/features/chat-page/chatThunks";
import {useTypeDispatch} from "hooks/useTypeDispatch";

import ReactRouterPrompt from "react-router-prompt";
const Friends = () => {
    const dispatch = useTypeDispatch()
    const term = useSelector(getInitialValueInput)
    const currentPage = useSelector(currentPageSelector)
    const pageSize = useSelector(pageSizeSelector)
    const totalCount = useSelector(totalCountSelector)
    const isLoaded = useSelector(isLoadedSelector)
    const isLoadedUsersOnChangePage = useSelector(isLoadedUsersOnChangePageSelector)
    const users = useSelector(usersSelector)
    const isCheckBoxActive = useSelector(checkBoxSelector)
    const isFollower = useSelector(isFollowerSelector)
//pagination
    const pageCount = Math.ceil(totalCount! / pageSize!)
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        dispatch(getUsersForChatPage({currentPage, pageSize, term, isFollower}))
    }, [])

//query parameters
    useEffect(() => {
        const params = {
            page: `${currentPage}`,
            count: `${pageSize}`,
            term: `${term}`,
            friend: `${isFollower}`,
        };


        const newParams = omit(params, [
            term === "" ? 'term' : '',
            isFollower === null ? 'friend' : '',
        ]);
        setSearchParams(newParams)

    }, [currentPage, pageSize, term, isFollower])

    const handleChange = (event: any) => {
        setSearchParams({
            friend: event,
            page: `${currentPage}`,
            count: `${pageSize}`,
            term: `${term}`
        });
    };

    const setupStatusOfFriends = (e:boolean) => {
        dispatch(followersCheckbox(
            e,
            1,
            pageSize!,
            term,
            isFollower!))
        handleChange(e)
    }


    //redirect back


    return (
        isLoaded ?
            <div className={s.loader}><Loader/></div> :
            <div>
                <h2>Friends</h2>
                <div className={s.mainWrapper}>
                    <Pagination
                        page={currentPage!}
                        className={s.paginator}
                        count={pageCount}
                        color="primary"
                        onChange={(e: React.ChangeEvent<unknown>, value: number) =>
                            dispatch(loading(value, pageSize!, term, isFollower!))
                        }
                    />
                    <div className={s.checkboxWrapper}>
                            <span>Only followed friends</span>
                            <span>
                                <Checkbox
                                    checked={isCheckBoxActive}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setupStatusOfFriends(e.target.checked)}}/>
                            </span>
                    </div>
                    <SearchForm/>
                    {isLoadedUsersOnChangePage ?
                        <Loader/> :
                        users!.map(e =>
                            <div
                                className={s.friendsWrapperBorder}
                                key={Math.ceil(e.id)}
                            >
                                <MyFriend
                                    name={e.name}
                                    status={e.status}
                                    photos={e.photos}
                                    followed={e.followed}
                                    id={e.id}
                                />
                            </div>
                        )}
                </div>
            </div>
    );
}

export default Friends;