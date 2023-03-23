import {AppDispatch} from "../../../reduxToolkit";
import {dataURLtoFile} from "util/Base64ToFile";
import {UsersRequestAxios} from "dataAccessLayer/usersRequestAxios";
import {ResultCode} from "enum/AppEnums";
import {setUserDataSidebarPhotos} from "../sidebar-page/sidebarSlice";
import {changeErrorStatus, changeStateOfModalWindow, uploadingPhoto} from "./settingsSlice";
import {getInfoForSidebar} from "../sidebar-page/sidebarThunks";
import {getUserForMyProfile} from "../myProfile-page/myProfileThunks";

export const changeUserAvatar = (userAvatarBase64: any) => async (dispatch: AppDispatch) => {
    try {
        const response = dataURLtoFile(userAvatarBase64)
        const requestToServer =
            await UsersRequestAxios.setNewAvatar(response)
        if (requestToServer.resultCode === ResultCode.success) {
            dispatch(setUserDataSidebarPhotos(requestToServer.data.photos))
            dispatch(changeStateOfModalWindow(false))
            dispatch(uploadingPhoto(false))
        }

    } catch (error) {
        dispatch(uploadingPhoto(false))
        dispatch(changeErrorStatus(true))
        setTimeout(()=>{
            dispatch(changeErrorStatus(false))
        },6000)
    }
}


export const setInputValueThunk=(arg:string,value:string,userData:any)=>async (dispatch:AppDispatch)=>{
    try {
        switch (arg){
            case "webSite":{
                console.log(value)
                const setDataInObject={
                    userId: userData.userId,
                    lookingForAJob: userData.lookingForAJob,
                    lookingForAJobDescription: userData.lookingForAJobDescription,
                    fullName:userData.fullName,
                    aboutMe:userData.aboutMe,
                    contacts: {website:value,instagram:userData.contacts.instagram,github:userData.contacts.github}}
                const response = await UsersRequestAxios.setSocialDataInProfile(setDataInObject)
                console.log(response)
                await  dispatch(getUserForMyProfile(userData!.userId))
                break
            }

            case "Instagram":{
                const setDataInObject={
                    userId: userData.userId,
                    lookingForAJob: userData.lookingForAJob,
                    lookingForAJobDescription: userData.lookingForAJobDescription,
                    fullName:userData.fullName,
                    aboutMe:userData.aboutMe,
                    contacts: {website:userData.contacts.website,instagram:value,github:userData.contacts.github}}
                const response = await UsersRequestAxios.setSocialDataInProfile(setDataInObject)
                console.log(response)
                await dispatch(getUserForMyProfile(userData!.userId))
                await dispatch(getInfoForSidebar(userData!.userId))
                break
            }
            case "Name":{
                const setDataInObject={
                    userId: userData.userId,
                    lookingForAJob: userData.lookingForAJob,
                    lookingForAJobDescription: userData.lookingForAJobDescription,
                    fullName:value,
                    aboutMe:userData.aboutMe,
                    contacts: {website:userData.contacts.website,instagram:userData.contacts.instagram,github:userData.contacts.github}}
                const response = await UsersRequestAxios.setSocialDataInProfile(setDataInObject)
                console.log(response)
                await  dispatch(getUserForMyProfile(userData!.userId))
                await dispatch(getInfoForSidebar(userData!.userId))
                break
            }
            case "GitHub":{
                const setDataInObject={
                    userId: userData.userId,
                    lookingForAJob: userData.lookingForAJob,
                    lookingForAJobDescription: userData.lookingForAJobDescription,
                    fullName:userData.fullName,
                    aboutMe:userData.aboutMe,
                    contacts: {website:userData.contacts.website,instagram:userData.contacts.instagram, github:value}}
                const response = await UsersRequestAxios.setSocialDataInProfile(setDataInObject)
                console.log(response)
                await  dispatch(getUserForMyProfile(userData!.userId))
                await dispatch(getInfoForSidebar(userData!.userId))
                break
            }
                break
        }

    }catch (error){
        console.log(error)
    }

}


