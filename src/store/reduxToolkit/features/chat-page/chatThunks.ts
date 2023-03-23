import {AppDispatch} from "../../../reduxToolkit";
import {chatApi} from "api/webSocketChatAPI";
import {handlerMessagesCreator, handlerStatusChangedCreator, refreshMessages, sendMessage} from "./chatSlice";
import {UsersRequestAxios} from "dataAccessLayer/usersRequestAxios";
import {setUsers} from "../friends-users/friendsSlice";
import {EventsNamesType} from "enum/WebSocketEnums";
import {IGetUsersChatPage} from "interfaces/chatInterfaces/chatInterfaces";

export const startListeningNewMessages = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(refreshMessages([]))
        await chatApi.start()
        await chatApi.subscribe(EventsNamesType.messagesReceived, handlerMessagesCreator(dispatch))
        await chatApi.subscribe(EventsNamesType.statusChanged, handlerStatusChangedCreator(dispatch))
    } catch (error) {
        console.log(error)
    }
}
export const sendMessageToServer = (message: string) => async (dispatch: AppDispatch) => {
   await chatApi.sendMessage(message)
    dispatch(sendMessage(""))
}


export const getUsersForChatPage = ({currentPage, pageSize, term, isFollower}:IGetUsersChatPage)=>
    async (dispatch:AppDispatch)=>{
        const response = await UsersRequestAxios.getUsersFromServer(currentPage!, pageSize!, term, isFollower!)
        dispatch(setUsers({response}))}