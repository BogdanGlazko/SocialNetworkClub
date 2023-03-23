import {ResultCode} from "../../enum/AppEnums";

export interface ILogin { resultCode: ResultCode | undefined, messages: [string]
        | undefined, data: { userId: number } | undefined }
