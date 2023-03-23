import {RootState} from "../../../reduxToolkit";

export const getMessages = (state:RootState) => state.chatPage.userMessageData
export const getDataLoadedFlag=(state:RootState)=>state.chatPage.dataLoaded
export const getTextArea=(state:RootState)=>state.chatPage.textArea
export const getStatusWS=(state:RootState)=>state.chatPage.statusOfWebSocket