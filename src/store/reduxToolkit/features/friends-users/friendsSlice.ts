import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IInitialStateType, IUserModel} from "interfaces/friendsInterfaces/friendsInterfaces";


export const initialState: IInitialStateType = {
    isLoaded: true,
    isLoadedUsersOnChangePage: false,
    users: null,
    totalCount: 0,
    currentPage: 1,
    pageSize: 20,
    isCheckboxActive: false,
    filter: {
        term: "",
        isFollower: null
    }
}


export const friendsSlice = createSlice({
    name: "usersReducer",
    initialState,
    reducers: {
        setUsers: (state = initialState, action: PayloadAction<any>) => {
            state.users = action.payload.response.items
            state.totalCount = action.payload.response.totalCount
            state.isLoaded = false
        },

        followUnfollowUsers: (state = initialState, action: PayloadAction<number>): void => {
            state.users = (state.users  as Array<IUserModel>).map(u => (u.id === action.payload) ? {...u, followed: !u.followed} : u)
        },
        getNewUsersPageOnClick: (state = initialState, action: PayloadAction<any>): void => {
            state.users = action.payload.items
            state.totalCount = action.payload.totalCount
            state.isLoadedUsersOnChangePage = false
        },
        changeTermOfUserDebounce: (state = initialState, action: PayloadAction<any>): void => {
            state.currentPage = action.payload.value
        },
        changeTermOfUserOnChange: (state = initialState, action: PayloadAction<any>): void => {
            console.log(action.payload)
            state.filter.term = action.payload
        },
        isLoadedChanger: (state = initialState, action: PayloadAction<boolean>): void => {
            state.isLoadedUsersOnChangePage = action.payload
        },
        changeCheckBoxStatus: (state = initialState, action: PayloadAction<boolean>): void => {
            state.isCheckboxActive = action.payload
            state.filter.isFollower = action.payload
        }
    }
});


export const {
    setUsers,
    followUnfollowUsers,
    getNewUsersPageOnClick,
    isLoadedChanger,
    changeTermOfUserDebounce,
    changeTermOfUserOnChange,
    changeCheckBoxStatus
} = friendsSlice.actions;
export default friendsSlice.reducer;




