import s from './App.module.sass';
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import Content from "./components/layouts/content/Content";
import Sidebar from "./components/layouts/sidebar/Sidebar";
import Login from "./components/layouts/loginLogout/Login";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loading} from "./store/reduxToolkit/features/app/appSlice.ts";
import Loader from "./components/shared/additionalComponents/Loader";
import Header from "./components/layouts/header/Header";
// import 'antd/dist/antd.css';
import {isLoggedUser} from "./store/reduxToolkit/features/app/appThunk";
import ScrollToTop from "react-scroll-to-top";

const App = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const stateApp = useSelector((state) => state.appPage)
    useEffect(() => {
        // renavigate to page where user has been before
        navigate(JSON.parse(window.sessionStorage.getItem('lastRoute') || '{}'))
        window.onbeforeunload = () => {
            window.sessionStorage.setItem('lastRoute', JSON.stringify(window.location.pathname))
        }
        dispatch(loading(true))
        dispatch(isLoggedUser())
    }, [])


    return (
        stateApp.loading ? <div className={s.loader}><Loader/></div> :
            <>
                {stateApp.isLogginedUser === false ?
                    <div className={s.appWrapper}>
                        <Routes>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="*" element={<Navigate to="/login"/>}/>
                        </Routes>
                    </div>
                    : <div className={s.app}>
                        <Header/>
                        <Sidebar/>
                        <Content/>
                    </div>
                }
            </>
    );
}
export default App;
