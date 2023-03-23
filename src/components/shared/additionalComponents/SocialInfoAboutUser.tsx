import React, {useEffect, useState} from "react";
import {getUserDataForProfilePage} from "../../../store/reduxToolkit/features/myProfile-page/myProfileSelectors";
import {useSelector} from "react-redux";
import s from "./socialInfoAboutUser.module.sass"
import {Input} from "@mui/material";
import Button from "@mui/material/Button";
import {useTypeDispatch} from "../../../hooks/useTypeDispatch";
import {setInputValueThunk} from "../../../store/reduxToolkit/features/settings-page/settingsThunks";
import {getUserForMyProfile} from "../../../store/reduxToolkit/features/myProfile-page/myProfileThunks";
import {getUserData} from "../../../store/reduxToolkit/features/app/appSelectors";

const SocialInfoAboutUser = () => {
    const dispatch = useTypeDispatch()
    const userData = useSelector(getUserDataForProfilePage)
    const [isInputActive, setIsInputActive] = useState("")
    const [inputValue, setInputValue] = useState("")
    const infoAboutLoggedUser = useSelector(getUserData)

    useEffect(() => {
        dispatch(getUserForMyProfile(infoAboutLoggedUser!.id))
    }, [])

    const handleChangeInfo = (arg: string) => {
        setIsInputActive(arg)
    }
    const changeInputValue = (arg: string) => {
        setInputValue(arg)
    }
    const changeAndSendInputValue = (arg: any) => {
        dispatch(setInputValueThunk(arg, inputValue, userData))
        setIsInputActive("")
    }

    return (
        <div>
            <div className={s.commonInfoWrapper}>
                <div className={s.commonInfo}>

                    {/*name*/}

                    <div className={s.stringWrapper}>
                        <div className={s.mainInputWrapper}>
                            <div className={s.nameOfResource}>Name :</div>
                            <div className={s.openAnimation}>
                                {isInputActive === "NameInput" ?
                                    <div className={s.inputWrapper}>
                                        <div className={s.inputPosition}>
                                            <Input
                                                sx={{
                                                    minWidth: 250,
                                                }}
                                                placeholder={"Insert Your Name or Nickname"}
                                                onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
                                                    changeInputValue(event.currentTarget.value)
                                                }
                                                }/>
                                        </div>
                                        <Button onClick={() => {
                                            changeAndSendInputValue("Name")
                                        }}>send</Button>
                                    </div>
                                    :

                                    userData!.fullName ?
                                        <div className={s.contentAndLinks}>
                                            {userData!.fullName}
                                        </div>
                                        :
                                        <span></span>}
                            </div>
                        </div>
                        {isInputActive === "NameInput" ?
                            <div className={s.changeLink} onClick={() => {
                                handleChangeInfo("")
                            }}>Close</div> :
                            <div className={s.changeLink} onClick={() => {
                                handleChangeInfo("NameInput")
                            }}>Change</div>
                        }
                    </div>

                    {/*website*/}

                    <div className={s.stringWrapper}>
                        <div className={s.mainInputWrapper}>
                            <div className={s.nameOfResource}>Website Address :</div>
                            <div>
                                {isInputActive === "WebSiteInput" ?
                                    <div className={s.inputWrapper}>
                                        <div className={s.inputPosition}>
                                            <Input
                                                sx={{
                                                    minWidth: 250,
                                                }}
                                                placeholder={"Insert your Website link"}
                                                onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
                                                    changeInputValue(event.currentTarget.value)
                                                }
                                                }/>
                                        </div>
                                        <Button onClick={() => {
                                            changeAndSendInputValue("webSite")
                                        }}>send</Button>
                                    </div> :
                                    userData!.contacts!.website ?
                                        <div className={s.contentAndLinks}>{userData!.contacts!.website}</div> :
                                        <span> Add website Link </span>
                                }
                            </div>
                        </div>
                        {isInputActive === "WebSiteInput" ?
                            <div className={s.changeLink} onClick={() => {
                                handleChangeInfo("")
                            }}>Close</div> :
                            <div className={s.changeLink} onClick={() => {
                                handleChangeInfo("WebSiteInput")
                            }}>Change</div>
                        }
                    </div>


                    {/*github*/}

                    <div className={s.stringWrapper}>
                        <div className={s.mainInputWrapper}>
                            <div className={s.nameOfResource}>GitHub Link :</div>
                            <div>
                                {isInputActive === "GitHubInput" ?
                                    <div className={s.inputWrapper}>
                                        <div className={s.inputPosition}>
                                            <Input
                                                sx={{
                                                    minWidth: 250,
                                                }}
                                                placeholder={"Insert GitHub link"}
                                                onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
                                                    changeInputValue(event.currentTarget.value)
                                                }
                                                }/>
                                        </div>
                                        <Button onClick={() => {
                                            changeAndSendInputValue("GitHub")
                                        }}>send</Button>
                                    </div>
                                    :
                                    userData!.contacts!.github ?
                                        <div className={s.contentAndLinks}>
                                            {userData!.contacts!.github}
                                        </div> :
                                        <span>  Add GitHub Link </span>
                                }


                            </div>
                        </div>
                        {isInputActive === "GitHubInput" ?
                            <div className={s.changeLink} onClick={() => {
                                handleChangeInfo("")
                            }}>Close</div> :
                            <div className={s.changeLink} onClick={() => {
                                handleChangeInfo("GitHubInput")
                            }}>Change</div>
                        }
                    </div>


                    {/*instagram*/}

                    <div className={s.stringWrapper}>

                        <div className={s.mainInputWrapper}>
                            <div className={s.nameOfResource}> Instagram :</div>
                            <div>
                                {isInputActive === "InstagramInput" ?
                                    <div className={s.inputWrapper}>
                                        <div className={s.inputPosition}>
                                            <Input
                                                sx={{
                                                    minWidth: 250,
                                                }}
                                                placeholder={"Insert your Instagramm link"}
                                                onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
                                                    changeInputValue(event.currentTarget.value)
                                                }
                                                }/>
                                        </div>
                                        <Button onClick={() => {
                                            changeAndSendInputValue("Instagram")
                                        }}>send</Button>
                                    </div> :
                                    userData!.contacts!.instagram ?
                                        <div className={s.contentAndLinks}>
                                            {userData!.contacts!.instagram}
                                        </div>
                                        :
                                        <span>  Add Instagram Link </span>
                                }
                            </div>
                        </div>
                        {isInputActive === "InstagramInput" ?
                            <div className={s.changeLink} onClick={() => {
                                handleChangeInfo("")
                            }}>Close</div> :
                            <div className={s.changeLink} onClick={() => {
                                handleChangeInfo("InstagramInput")
                            }}>Change</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SocialInfoAboutUser