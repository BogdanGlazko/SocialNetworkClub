import {RootState} from "store/reduxToolkit";

export const getLoading = (state:RootState) => state.appPage.loading
export const  getErrorDiv = (state:RootState)=>state.appPage.errorDiv
export const getUserData=(state:RootState)=>state.appPage.userData
export const getCaptchaStatus =(state:RootState)=> state.appPage.captchaStatus
export const getCaptchaInput=(state:RootState)=>state.appPage.captchaInput
export const getCaptchaImage=(state:RootState)=>state.appPage.captchaImage