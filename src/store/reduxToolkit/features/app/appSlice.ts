import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAppInitialState} from "interfaces/appInterfaces/appInterfaces";


const initialState: IAppInitialState = {
    isLogginedUser: false,
    loading: false,
    errorDiv: false,
    userData: null,
    captchaStatus: false,
    captchaInput:false,
    captchaImage:undefined
}

export const appSlice = createSlice({
    name: "appReducer",
    initialState,
    reducers: {
        changeIsLoginUser: (state: IAppInitialState, action: PayloadAction<boolean>): void => {
            state.isLogginedUser = action.payload;
        },
        loading: (state, action: PayloadAction<boolean>): void => {
            state.loading = action.payload;
        },
        errorFromServer: (state, action): void => {
            state.errorDiv = action.payload.messages[0]
        },
        setUserData:(state,action):void=>{
            state.userData=action.payload
        },
        changeCaptchaMessageStatus:(state,action):void=>{
            state.captchaStatus=action.payload
        },
        changeErrorStatus:(state,action):void=>{
            state.errorDiv=action.payload
        },
        showCaptchaInput:(state,action)=>{
            state.captchaInput=action.payload
        },
        setCaptchaImage:(state,action)=>{
            state.captchaImage=action.payload
        }
    }
});


export const {changeIsLoginUser,setCaptchaImage,showCaptchaInput, loading, errorFromServer,setUserData,changeCaptchaMessageStatus,changeErrorStatus} = appSlice.actions;
export default appSlice.reducer;
