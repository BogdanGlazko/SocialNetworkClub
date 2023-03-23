import {AxiosResponse} from "axios"
import {ResultCode} from "enum/AppEnums";
import {
    IFollowUser,
    IUnfollowUser,
    IUsersFromServer
} from "../interfaces/dataAccessLayerInterfaces/usersRequestAxiosInterfaces";
import {apiInstance} from "./apiInstance";
import {IUserData} from "store/reduxToolkit/features/myProfile-page/myProfileSlice";

export const UsersRequestAxios = {

    getUsersFromServer(
        currentPage = 1,
        pageSize = 20,
        term="",
        friend:boolean
    ) {
        const params: {page:number,count:number,term:string,friend:boolean } = {
            page:currentPage,
            count:pageSize,
            term,
            friend
        }
        if(friend){
            params.friend=friend
        }
        return apiInstance.get("/users",{
            params
        })
            .then((response: AxiosResponse<IUsersFromServer>) => {
            if (response.status === ResultCode.statusCode) {
                return response.data

            }
        })
    },
    getUserForMyProfile(id:number|undefined){
        console.log(id)
        return apiInstance.get("/profile/"+id).then((response:AxiosResponse<IUserData>)=>{
            console.log(response.data)
            return response.data
        })
    },
    setSocialDataInProfile(arg:any){
        console.log(arg)
        return apiInstance.put("/profile/", arg)
            .then((response:AxiosResponse<IUserData>)=>{
            console.log(response.data)
            return response.data
        })
    },

    isfollowerUser(userId: number) {
        return apiInstance.get("/follow/"+userId).then((response:AxiosResponse<boolean>) => {
            return response.data
        })
    },
    statusOfUser(userId: number) {
        return apiInstance.get( "/profile/status/"+userId).then((response:AxiosResponse<string>) => {
            return response.data
        })
    },
    setNewAvatar(ava:any) {

        const fd= new FormData()
        fd.append("image",ava,"ava.png")
        return apiInstance.put(
            "/profile/photo",
            fd,
            {headers:
                    {'Content-Type': "multipart/form-data"}
            })
            .then((response:AxiosResponse<{resultCode:number,data:{photos:{large:string,small:string}}}>) => {
            return response.data
        })
    },

    followUser(userId: number) {
        return apiInstance.post("/follow/"+userId).then((response:AxiosResponse<IFollowUser>) => {
            return response.data.resultCode === ResultCode.success ? userId : null
        })
    },
    unFollowUser(userId: number) {
        return apiInstance.delete("/follow/"+userId).then((response:AxiosResponse<IUnfollowUser>) => {
            return response.data.resultCode === ResultCode.success ? userId : null
        })
    }
}