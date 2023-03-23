import {RootState} from "../../../reduxToolkit";


export const stateOfModalWindow = (state:RootState) => state.settingsPage.modalWindowState
export const loadingPhotoStatus = (state:RootState) => state.settingsPage.loadingStatus
export const error = (state:RootState) => state.settingsPage.uploadingError
