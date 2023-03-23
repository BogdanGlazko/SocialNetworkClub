import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppDispatch} from "store/reduxToolkit";
import {chatApi} from "api/webSocketChatAPI";
import {IChatState, IUSerMessageData} from "interfaces/chatInterfaces/chatInterfaces";
import {statusType} from "interfaces/webSocketChatInterfaces/webSocketChatInterfaces";
import {ChangeEvent} from "react";

const initialState: IChatState = {
    userMessageData: [],
    dataLoaded: true,
    textArea: "",
    statusOfWebSocket: "pending"
}

export const chatSlice = createSlice({
    name: "chatSlice",
    initialState,
    reducers: {
        messagesReceived: (state: IChatState, action: PayloadAction<any>) => {
            state.dataLoaded = false
            const newMessages = action.payload.map((e: any) => {
                return {messageUser: e.message, photo: e.photo, userId: e.userId, userName: e.userName}
            })
            state.userMessageData = state.userMessageData ? [...state.userMessageData, ...newMessages] : null

        },
        sendMessage: (state: IChatState, action:PayloadAction<string>) => {
            state.textArea = action.payload
        },
        changeValueTextArea: (state: IChatState, action:PayloadAction<string>) => {
            state.textArea = action.payload
        },
        refreshMessages: (state: IChatState, action:PayloadAction<IUSerMessageData[]>) => {
            state.userMessageData = action.payload
            chatApi.stop()
        },
        changeStatusOfWebSocket: (state: IChatState, action: PayloadAction<statusType>) => {
            state.statusOfWebSocket = action.payload
        }
    }
})

let _handlerNewMessages: ((state:IChatState) => void) | null = null
export const handlerMessagesCreator = (dispatch: AppDispatch) => {
    if (_handlerNewMessages === null) {
        _handlerNewMessages = (state) => {
            dispatch(messagesReceived(state))
        }
    }
    return _handlerNewMessages
}

let _handlerStatusChanged: ((status: statusType) => void) | null = null
export const handlerStatusChangedCreator = (dispatch: AppDispatch) => {
    if (_handlerStatusChanged === null) {
        _handlerStatusChanged = (status) => {
            dispatch(changeStatusOfWebSocket(status))
        }
    }
    return _handlerStatusChanged
}

export const {
    messagesReceived,
    sendMessage,
    changeValueTextArea,
    changeStatusOfWebSocket,
    refreshMessages
} = chatSlice.actions
export default chatSlice.reducer