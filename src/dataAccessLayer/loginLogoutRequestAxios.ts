import {AxiosResponse} from "axios"
import {ResultCode} from "enum/AppEnums";
import {apiInstance} from "./apiInstance";
import {ILogin} from "../interfaces/dataAccessLayerInterfaces/loginLogoutInterfaces";

export const LoginRequestAxios = {
    loginUserFromServer(email: string, password: string,rememberMe:boolean, captcha:string) {
        return apiInstance.post(`/auth/login`, {email, password, rememberMe, captcha}).then((response: AxiosResponse<ILogin>) => {
            if (response.status === ResultCode.statusCode) {
                return response.data
            }
        })
    },
    logout() {
        return apiInstance.delete(`/auth/login`)
    },
    getCaptchaImage(){
        return apiInstance.get("/security/get-captcha-url").then((response)=>{
            return response
        })
    },
    ifUserLoggined() {
        return apiInstance.get(`/auth/me`).then((response: AxiosResponse<ILogin>) => {
            return response
        }
            )
    }
}