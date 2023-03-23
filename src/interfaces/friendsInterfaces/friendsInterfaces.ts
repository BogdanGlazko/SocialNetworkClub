export interface IUserModel {
    id: number,
    followed: boolean,
    photos: { small: string },
    status: string,
    name: string
}

export interface ITermFilterType {
    term: string,
    isFollower: boolean | null
}

export interface IInitialStateType {
    isLoaded: boolean | null
    isLoadedUsersOnChangePage: boolean | null
    users: IUserModel[] | null
    totalCount: number | null
    currentPage: number | null
    pageSize: number | null
    isCheckboxActive: boolean,
    filter: ITermFilterType
}