import {RootState} from "../../../reduxToolkit";

export const isLoadedSelector = (state:RootState) => state.usersPage.isLoaded
export const isLoadedUsersOnChangePageSelector = (state:RootState) => state.usersPage.isLoadedUsersOnChangePage
export const usersSelector = (state:RootState) => state.usersPage.users
export const totalCountSelector = (state:RootState) => state.usersPage.totalCount
export const currentPageSelector =(state:RootState)=> state.usersPage.currentPage
export const pageSizeSelector =(state:RootState)=>state.usersPage.pageSize
export const filterSelector =(state:RootState)=>state.usersPage.filter
export const checkBoxSelector=(state:RootState)=>state.usersPage.isCheckboxActive
export const isFollowerSelector=(state:RootState)=>state.usersPage.filter.isFollower
export const getInitialValueInput =(state:RootState)=>state.usersPage.filter.term