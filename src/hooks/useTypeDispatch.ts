import {AppDispatch} from "../store/reduxToolkit";
import {useDispatch} from "react-redux";

export const useTypeDispatch = useDispatch<AppDispatch>