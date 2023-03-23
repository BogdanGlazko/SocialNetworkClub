import React from "react";
import s from "./loader.module.sass"

const Loader =()=>{
    return (
        <div className={s.wrapperLoading}>
            <div className={s["lds-ring"]}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

    )
}

export default Loader;