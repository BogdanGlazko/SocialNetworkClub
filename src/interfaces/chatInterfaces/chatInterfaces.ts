export interface IUSerMessageData {
    messageUser: string
    photo: string
    userId: number | null
    userName: string
}

export interface IChatState {
    userMessageData: IUSerMessageData[] | null
    dataLoaded: boolean,
    textArea: string,
    statusOfWebSocket: "ready" | "pending"

}


export interface IGetUsersChatPage {
    currentPage:number|null,
    pageSize:number|null,
    term:string|undefined,
    isFollower:boolean|null
}