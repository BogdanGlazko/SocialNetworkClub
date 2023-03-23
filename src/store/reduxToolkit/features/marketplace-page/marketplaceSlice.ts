import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IModalWindowInfoModel} from "../../../../interfaces/marketplaceInterfaces/marketplaceInterfaces";

const initialState={
    modalWindowState:false,
    productState: {
        image:"",
        name: "",
        price: "",
        shop: ""
    },
}

export const marketplaceSlice=createSlice({
    name:"marketplaceReducer",
    initialState,
    reducers:{
        changeStateOfModalWindow:(state,action:PayloadAction<boolean>)=>{
           state.modalWindowState=action.payload
        },
        setStateOfModalWindow:(state,action:PayloadAction<IModalWindowInfoModel>)=>{
           state.productState=action.payload
        }
    }
});

export const {changeStateOfModalWindow,setStateOfModalWindow}= marketplaceSlice.actions;
export default marketplaceSlice.reducer;