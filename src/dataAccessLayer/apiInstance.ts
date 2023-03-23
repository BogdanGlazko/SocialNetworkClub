import axios from "axios"


export const apiInstance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    headers: {"API-KEY": "76a59cd1-0265-4b93-b298-92df78f77697"}
})
