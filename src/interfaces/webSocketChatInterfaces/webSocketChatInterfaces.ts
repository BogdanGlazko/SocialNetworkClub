import {IUSerMessageData} from "../chatInterfaces/chatInterfaces";

export type messagesReceivedSubscriberType=(messages:IUSerMessageData)=>void
export type statusChangedSubscriberType=(statusOfWebSocket:statusType)=>void
export type statusType= "pending"|"ready"