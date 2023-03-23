import {createSlice, PayloadAction} from "@reduxjs/toolkit";

// {
//     id: number;
//     name: string;
//     messages-page: IMessage[]
// }
//
// IMessage {
//     id: number;
//     message: string;
// }



const initialState={
    messageTextarea:"",
    messagesPageUser100: {
        users: [
            {
                one: [
                    {
                        name: "David Peterson",
                        img: "http://demo.foxthemes.net/instellohtml/assets/images/avatars/avatar-2.jpg"
                    },
                    {date: " 28 June, 2022",id: 3},
                    {message: "Hi", id: 1},
                    {message: "its my first hmm what are you doing at the evening hmm what are you doing at the evening message its my firstoh how are you Jack oh how are you Jack message its my first message", id: 1},
                    {message: "oh how are you Jack", id: 2},
                    {message: "thanks i am well", id: 1},
                    {message: "did you see my first message", id: 2},
                    {message: "sorry  what are you doing at the evening hmm what are you doing at the evening message its my firstoh how are you Jacki didn't", id: 1},
                    {message: "hmm what are you doing at the evening ", id: 2},
                    {message: "oh really nothing ", id: 2},
                    {message: "and you ", id: 2}
                ]
            },
            {
                two: [
                    {
                        name: "Zara Ali",
                        img: " http://demo.foxthemes.net/instellohtml/assets/images/avatars/avatar-5.jpg"
                    },
                    {date: " 2 June, 2022",id: 3},
                    {message: "Hello World", id: 1},
                    {date: " 5 June, 2022",id: 3},
                    {message: "My first message right here!!!!!", id: 1},
                    {message: "oh HEllo Jack what are you doing at the evening message its my first ", id: 2},
                    {message: "thankswhat are you doing at the evening hmm what are you doing at the evening message its my firstoh how are you Jackwhat are you doing at the evening hmm what are you doing at the evening message its my firstoh how are you Jack i am well", id: 1},
                    {message: "did you see my first message)))) ???? ", id: 2}
                ]
            },
            {
                two: [
                    {
                        name: "David Peterson",
                        img: "http://demo.foxthemes.net/instellohtml/assets/images/avatars/avatar-1.jpg"
                    },
                    {message: "Hello World", id: 1},
                    {message: "My first message right here!!!!!", id: 1},
                    {message: "oh HEllo Jack", id: 2},
                    {message: "thanks i am well", id: 1},
                    {message: "did you see my first message)))) ???? ", id: 2}
                ]
            },
            {
                two: [
                    {
                        name: "Sindy Forest",
                        img: "http://demo.foxthemes.net/instellohtml/assets/images/avatars/avatar-3.jpg"
                    },
                    {message: "Hello what are you doing at the evening hmm what are you doing at the evening message its my firstoh how are you Jackwhat are you doing at the evening hmm what are you doing at the evening message its my firstoh how are you JackWorld", id: 1},
                    {message: "My first message right here!!!!!", id: 1},
                    {message: "oh HEllo Jack", id: 2},
                    {message: "thanks i am well", id: 1},
                    {message: "did you see my first message)))) ???? ", id: 2}
                ]
            },
            {
                three: [
                    {
                        name: "Sindy Forest",
                        img: " http://demo.foxthemes.net/instellohtml/assets/images/avatars/avatar-4.jpg"
                    },
                    {message: "Good evening", id: 1},
                    {message: "Hi man", id: 2},
                    {message: "Are you here???7", id: 2},
                    {message: "helloooooo!!", id: 2}
                ]
            }
        ]
    },
    currentMessage:0,
    currentUser:null,
}
export type currentUserType ={
    currentUser:{img:string,name:string}|null,
}

export type InitialStateType = typeof  initialState


export const messagesSlice=createSlice({
    name:"messageReducer",
    initialState,
    reducers:{
        changeArea:(state:InitialStateType,action:PayloadAction<string>):void=>{
            state.messageTextarea = action.payload;
        },
        changeStateOfMessage:(state:InitialStateType,action:PayloadAction<any>):void=>{
            state.currentMessage= action.payload.id
            state.currentUser= action.payload
        },
        addMessage:(state:InitialStateType,action:PayloadAction<any>):void=>{
            Object.values(state.messagesPageUser100.users[state.currentMessage])[0].push({message:state.messageTextarea, id:action.payload.id});
            state.messageTextarea=action.payload.string;
        },
    }
});

export const {changeArea,changeStateOfMessage,addMessage}= messagesSlice.actions;
export default messagesSlice.reducer;