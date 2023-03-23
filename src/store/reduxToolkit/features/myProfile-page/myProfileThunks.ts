import {AppDispatch} from "../../../reduxToolkit";
import {UsersRequestAxios} from "dataAccessLayer/usersRequestAxios";
import {setStatusOfFollowing, setUserOnProfilePage, setUserStatus} from "./myProfileSlice";

export const getUserForMyProfile = (id:number)=> async (dispatch:AppDispatch)=>{
    try {
        const response = await UsersRequestAxios.getUserForMyProfile(id)
        dispatch(setUserOnProfilePage(response))
        const responseFollower = await UsersRequestAxios.isfollowerUser(id)
        dispatch(setStatusOfFollowing(responseFollower))
        const responseStatus = await UsersRequestAxios.statusOfUser(id)
        dispatch(setUserStatus(responseStatus))
    } catch (error){
        console.log(error)
    }
}

export const unFollowUser = (id: number) => async (dispatch: AppDispatch) => {
    try {
        console.log(id)
        const response = await UsersRequestAxios.unFollowUser(id)
        console.log(response)
        dispatch(setStatusOfFollowing(false))
    }catch (error){
        console.log("ошибочка!" + error)
    }
}


export const followUser = (id: number) => async (dispatch: AppDispatch) => {
    try {
        console.log(id)
        const response = await UsersRequestAxios.followUser(id)
        console.log(response)
        dispatch(setStatusOfFollowing(true))
    }catch (error){
        console.log("ошибочка!" + error)
    }

}