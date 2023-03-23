import {RootState} from "../../../reduxToolkit";

export const getUserDataForProfilePage = (state:RootState) => state.myProfilePage.users
export const getIsFollower = (state:RootState) => state.myProfilePage.users!.isFollower

