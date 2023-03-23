import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IUserData {

    aboutMe: null | string
    contacts: {
        facebook:null,
        github: null,
        instagram: null,
        mainLink: null,
        twitter: null,
        vk: null,
        website: null,
        youtube: null, } | null
    fullName: string | null
    lookingForAJob: boolean | null
    lookingForAJobDescription: null| string
    photos: { small: null|string, large: null|string}
    userId: null | string
    isFollower: boolean | null
    status:null|string
}

export const initialState: { users: null | IUserData } = {
    users:{
        aboutMe: null,
        contacts:  null,
        fullName: null,
        lookingForAJob: null,
        lookingForAJobDescription: null,
        photos: { small: null, large: null},
        userId: null,
        isFollower: null,
        status:null
    }
}


export const friendsSlice = createSlice({
    name: "usersReducer",
    initialState,
    reducers: {
        setUserOnProfilePage: (state = initialState, action:  PayloadAction<IUserData>) => {
            console.log(action.payload)
            state.users = action.payload
        },
        setStatusOfFollowing: (state = initialState, action:  PayloadAction<boolean>) => {
            console.log("я сетаюбббьььь"+action.payload)
            state.users!.isFollower = action.payload
        },
        setUserStatus: (state = initialState, action:  PayloadAction<string>) => {
            console.log("я сетаюбббьььь"+action.payload)
            state.users!.status = action.payload
        }
    }
});


export const {
    setUserOnProfilePage,
    setStatusOfFollowing,
    setUserStatus
} = friendsSlice.actions;
export default friendsSlice.reducer;


