import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState={
    modalWindowState:false,
    loadingStatus:false,
    uploadingError:false
}

export const settingsSlice=createSlice({
    name:"settingsReducer",
    initialState,
    reducers:{
        changeStateOfModalWindow:(state,action:PayloadAction<boolean>):void=>{
           state.modalWindowState=action.payload
        },
        uploadingPhoto:(state,action:PayloadAction<boolean>):void=>{
           state.loadingStatus=action.payload
        },
        changeErrorStatus:(state,action:PayloadAction<boolean>):void=>{
            state.uploadingError=action.payload
        }
    }
});

export const {changeStateOfModalWindow,uploadingPhoto,changeErrorStatus}= settingsSlice.actions;
export default settingsSlice.reducer;