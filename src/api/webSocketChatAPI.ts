import {EventsNamesType} from "../enum/WebSocketEnums";
import {
    messagesReceivedSubscriberType,
    statusChangedSubscriberType,
    statusType
} from "../interfaces/webSocketChatInterfaces/webSocketChatInterfaces";


const subscribers = {
    [EventsNamesType.messagesReceived]:[] as messagesReceivedSubscriberType[],
    [EventsNamesType.statusChanged]:[] as statusChangedSubscriberType[]
}
const cleanUp=()=>{
    ws?.removeEventListener("close", closeHandler)
    ws?.removeEventListener("message", messageHandler)
    ws?.close()
}

const notifyAboutStatusWS=(status:statusType)=>{
    subscribers[EventsNamesType.statusChanged].forEach(s=>s(status))
}


let ws: WebSocket

const closeHandler = () => {
    notifyAboutStatusWS("pending")
    setTimeout(createWS, 3000)
}
const openHandler = () => {
    notifyAboutStatusWS("ready")
}

const messageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data)
    subscribers[EventsNamesType.messagesReceived].forEach(s => s(newMessages))
}


function createWS() {
    cleanUp()
    ws = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")
    ws?.addEventListener("open", openHandler)
    ws?.addEventListener("message", messageHandler)
    ws?.addEventListener("close", closeHandler)
}


export const chatApi = {
    start(){
        createWS()
    },
    stop(){
        subscribers[EventsNamesType.messagesReceived]=[]
        subscribers[EventsNamesType.statusChanged]=[]
        cleanUp()
    },
    subscribe: function (eventName: EventsNamesType, callback: any) {

        subscribers[eventName].push(callback)
        return () => {
            subscribers[eventName]= (subscribers[eventName] as Array<any>).filter(s => s !== callback)
        }
    },
    unsubscribe(eventName:EventsNamesType, callback:  messagesReceivedSubscriberType|statusChangedSubscriberType) {

        subscribers[eventName]= (subscribers[eventName] as Array<any>).filter(s => s !== callback)
    },
    sendMessage(message:string):void{
        ws.send(message)
    }
}


