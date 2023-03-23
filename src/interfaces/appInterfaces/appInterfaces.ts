export interface IAppInitialState {
    isLogginedUser: boolean
    loading: boolean
    errorDiv:   false
    captchaStatus:boolean
    captchaInput:boolean
    captchaImage:string|undefined
    userData:null|{id: number, login: string, email:string}
}
