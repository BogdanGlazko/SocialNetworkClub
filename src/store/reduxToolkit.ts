import {configureStore} from "@reduxjs/toolkit";
import messageInputReducer from "./reduxToolkit/features/messages-page/messagesSlice"
import usersPageReducer from "./reduxToolkit/features/friends-users/friendsSlice"
import appReducer from "./reduxToolkit/features/app/appSlice"
import chatReducer from "./reduxToolkit/features/chat-page/chatSlice";
import myProfileReducer from "./reduxToolkit/features/myProfile-page/myProfileSlice";
import sidebarReducer from "./reduxToolkit/features/sidebar-page/sidebarSlice";
import settingsReducer from "./reduxToolkit/features/settings-page/settingsSlice";
import marketplaceReducer from "./reduxToolkit/features/marketplace-page/marketplaceSlice";



export const store = configureStore({
reducer:{
    messagesPage:messageInputReducer,
    usersPage:usersPageReducer,
    appPage:appReducer,
    chatPage:chatReducer,
    myProfilePage:myProfileReducer,
    sidebarPage:sidebarReducer,
    settingsPage:settingsReducer,
    marketplacePage:marketplaceReducer
},
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


