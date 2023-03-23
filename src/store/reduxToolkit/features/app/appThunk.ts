import {AppDispatch} from "../../../reduxToolkit";
import {LoginRequestAxios} from "dataAccessLayer/loginLogoutRequestAxios";
import {
    changeCaptchaMessageStatus,
    changeIsLoginUser,
    errorFromServer,
    loading,
    setCaptchaImage,
    setUserData,
    showCaptchaInput
} from "./appSlice";
import {ResultCode} from "enum/AppEnums";

export const loginUser = (data: { userName: string, userPassword: string,rememberMe:boolean, captcha:string }) => async (dispatch: AppDispatch) => {
    try {
        dispatch(loading(true))
       const response= await LoginRequestAxios.loginUserFromServer(data.userName, data.userPassword,data.rememberMe,data.captcha)
            if (response?.resultCode === ResultCode.success) {
               await dispatch(changeIsLoginUser(true))
               await dispatch(isLoggedUser())
               await dispatch(showCaptchaInput(false))
                setTimeout(() => {
                    dispatch(loading(false))
                }, 900)

            } else if (response?.resultCode === ResultCode.error) {
                dispatch(loading(false))
                dispatch(errorFromServer(response))
            } else if (response?.resultCode === ResultCode.captcha) {
                dispatch(loading(false))
                dispatch(changeCaptchaMessageStatus(true))
                try {
                    const response= await LoginRequestAxios.getCaptchaImage()
                    if (response){
                        console.log(response)
                        dispatch(setCaptchaImage(response.data.url))
                    }
                }catch (error){
                    alert(error)
                }
                dispatch(showCaptchaInput(true))
            }

    } catch (error){
        alert(error)
    }

}
export const logoutUser = () => async (dispatch: AppDispatch) => {
try {
    dispatch(loading(true))
    const response = await LoginRequestAxios.logout()
    if (response.status === ResultCode.statusCode) {
        setTimeout(() => {
            dispatch(changeIsLoginUser(false))
            dispatch(loading(false))
        }, 800)
    } else {
        dispatch(errorFromServer(response))
    }
}catch (error){
    console.log(error)
}


}

export const isLoggedUser = () => async (dispatch: AppDispatch) => {
    try {
        console.log("VIPOLNIAYUUUUSSs")
        const response = await LoginRequestAxios.ifUserLoggined()
        if (response.data.resultCode === 0) {
            dispatch(setUserData(response.data.data))
            dispatch(changeIsLoginUser(true))
            dispatch(loading(false))
        } else {
            dispatch(loading(false))
        }
    }catch (error){
        console.log(error)
    }
}

