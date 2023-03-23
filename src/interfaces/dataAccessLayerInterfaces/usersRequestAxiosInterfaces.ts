import {ResultCode} from "../../enum/AppEnums";

export interface IUsersFromServer {
    data: {
        items:[],
        totalCount: number,
        error: string|null
    },
    status: number
}
export interface IFollowUser {
    userId:number|null,
    resultCode:ResultCode
}

export interface IUnfollowUser {
    resultCode:ResultCode
}