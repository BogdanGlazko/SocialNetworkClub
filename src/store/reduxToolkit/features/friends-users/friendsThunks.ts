import {AppDispatch} from "../../../reduxToolkit";
import {UsersRequestAxios} from "dataAccessLayer/usersRequestAxios";
import {
    changeCheckBoxStatus,
    changeTermOfUserDebounce,
    followUnfollowUsers,
    getNewUsersPageOnClick,
    isLoadedChanger
} from "./friendsSlice";

export const loading = (value: number, pageSize: number, term: string, isFollower: boolean) => async (dispatch: AppDispatch) => {
  try {
      dispatch(changeTermOfUserDebounce({term, value}))
      dispatch(isLoadedChanger(true))
      const response = await UsersRequestAxios.getUsersFromServer(value, pageSize, term, isFollower)
      dispatch(getNewUsersPageOnClick(response))
  } catch (error){
      console.log(error)
  }
}

export const followUser = (id: number) => async (dispatch: AppDispatch) => {
    try {
        const response = await UsersRequestAxios.followUser(id)
        dispatch(followUnfollowUsers(response!))
    }catch (error){
        console.log(error)
    }
}
export const unFollowUser = (id: number) => async (dispatch: AppDispatch) => {
    try {
        console.log(id)
        const response = await UsersRequestAxios.unFollowUser(id)
            dispatch(followUnfollowUsers(response!))
    }catch (error){
        console.log("ошибочка!" + error)
    }

}
export const followersCheckbox = (checkboxStatus: boolean, value: number, pageSize: number, term: string, isFollower: boolean) =>
    async (dispatch: AppDispatch) => {
    try {
        dispatch(isLoadedChanger(true))
        dispatch(changeCheckBoxStatus(checkboxStatus))
       const response = await UsersRequestAxios.getUsersFromServer(value, pageSize, term, checkboxStatus)
            dispatch(getNewUsersPageOnClick(response))
            dispatch(isLoadedChanger(false))
    }catch (error){
        console.log(error)
    }
}
