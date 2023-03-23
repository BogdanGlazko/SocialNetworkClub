import React, {useState} from "react";
import s from "./login-logout.module.sass"
import {SubmitHandler, useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {Checkbox, Input, OutlinedInput, TextField} from '@mui/material';
import Button from "@mui/material/Button";
import {loginUser} from "store/reduxToolkit/features/app/appThunk";
import Loader from "../../shared/additionalComponents/Loader";
import club from "club.png";
import {AppDispatch} from "store/reduxToolkit";
import {
    getCaptchaImage,
    getCaptchaInput,
    getCaptchaStatus,
    getErrorDiv,
    getLoading
} from "store/reduxToolkit/features/app/appSelectors";
import {useNavigate} from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {changeCaptchaMessageStatus, changeErrorStatus} from "store/reduxToolkit/features/app/appSlice";
import MuiAlert, {AlertProps} from '@mui/material/Alert';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

interface IFormValues {
    userName: string
    userPassword: string
    rememberMe:boolean
    captcha:string
}

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const loading = useSelector(getLoading)
    const errorDiv = useSelector(getErrorDiv)
    const captchaInput= useSelector(getCaptchaInput)
    const captchaImage= useSelector(getCaptchaImage)
    const captchaStatus=useSelector(getCaptchaStatus)

    const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
        props: AlertProps,
        ref: ((instance: (HTMLDivElement | null)) => void) | React.MutableRefObject<HTMLDivElement | null> | null,
    ) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });


    const handleClickChangeVisibility = () => {

            if(passwordType==="password")
            {
                setPasswordType("text")
                return;
            }
            setPasswordType("password")
    }


    //appears message logic
    // const [open, setOpen] = React.useState(captchaStatus);

    const handleClick = () => {
        dispatch(changeCaptchaMessageStatus(true))
    };

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(changeCaptchaMessageStatus(false))
    };
    const handleCloseAlert = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(changeErrorStatus(false))
    };


    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small"/>
            </IconButton>
        </React.Fragment>
    );
//

const [passwordType,setPasswordType]=useState("password")
    const togglePassword =()=>{
        if(passwordType==="password")
        {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }


    const {register, handleSubmit, formState: {errors}} = useForm<IFormValues>();
    const onSubmit: SubmitHandler<IFormValues> =  (data: IFormValues) => {
        dispatch(loginUser(data))
    }
    return (
        <div>
            {loading ?
                <div className={s.loader}><Loader/></div> :
                <>
                    <div className={s.logo}>
                        <img src={club}
                             alt="club"/>
                    </div>
                    <div className={s.loginWrapper}>
                        <form
                            autoComplete="off"
                            onSubmit={handleSubmit(onSubmit)}
                            className={s.formWrapper}
                        >
                            <div className={s.loginHeader}>
                                <h1>Log in</h1>
                            </div>
                            <TextField
                                fullWidth
                                error={!!errors.userName}
                                helperText={errors?.userName ? errors.userName.message : null}
                                id="outlined-basic"
                                type="email"
                                autoComplete="email"
                                label="Email adress"
                                variant="outlined"
                                {...register("userName",
                                    {
                                        required: "Required field",
                                        pattern: {
                                            value: /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            message: "Invalid email adress"
                                        }
                                    })}/>
                            <br/>
                            <TextField
                                fullWidth
                                error={!!errors.userPassword}
                                helperText={errors?.userPassword ? errors.userPassword.message : null}
                                id="outlined-basic"
                                label="Password"
                                type={passwordType}
                                variant="outlined"
                                {...register("userPassword", {required: "Required field"})}
                                InputProps={{
                                    endAdornment:
                                        <InputAdornment position="end" style={{cursor:"pointer"}}>
                                        {(passwordType==="password")?
                                            <VisibilityIcon onClick={handleClickChangeVisibility}/>:
                                            <VisibilityOffIcon onClick={handleClickChangeVisibility}/>
                                        }
                                    </InputAdornment>,
                                }}
                            />
                            {captchaInput ?
                                <div>
                                <div><img src={captchaImage}/></div>

                                    <input
                                        type="text"
                                        autoComplete="off"
                                       {...register("captcha", {required: "Required field"} )}/>

                                </div>
                                : null}
                            <br/>
                            <div className={s.checkBoxWrapper}>
                                <div>
                                    <Checkbox
                                        {...register("rememberMe")}
                                        inputProps={{'aria-label': 'controlled'}}
                                    />
                                    <div>Remember me</div>
                                </div>
                                <div>Forgot your password?</div>
                            </div>
                            <div>
                                <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center',}} open={errorDiv} autoHideDuration={6000} onClose={handleCloseAlert}>
                                    <Alert onClose={handleCloseAlert} severity="error" sx={{ width: '100%' }}>
                                        {errorDiv}
                                    </Alert>
                                </Snackbar>
                            </div>
                            <br/>
                            <Button
                                fullWidth
                                variant="contained"
                                type="submit"
                                sx={{
                                    height: "60px",
                                    background: "linear-gradient(90deg, rgba(100,92,227,1) 0%, rgba(9,9,121,0.6080765069699755) 100%)"
                                }}>Login
                            </Button>
                            <Snackbar
                                open={captchaStatus}
                                autoHideDuration={3000}
                                onClose={handleClose}
                                message="Please insert a captcha"
                                action={action}
                            />
                        </form>
                    </div>
                </>
            }
        </div>
    );
}

export default Login;
