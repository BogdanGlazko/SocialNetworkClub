import React, {useEffect, useState} from 'react';
import s from "./scrollUpButton.module.sass";
import MouseOverPopover from "./MouseOverPopover";

const ScrollButton = () => {
    const [scrollUpButton, setScrollUpButton] = useState(false)
    const scrollPosition = document.querySelector("#content");
    const topPosition = document.querySelector("#scroll");
    const scrollUp=()=>{
        topPosition!.scrollIntoView({ behavior:"smooth" });
    }

    useEffect(() => {

        if (scrollPosition) {
            scrollPosition!.addEventListener("scroll", event => {
                {scrollPosition!.scrollTop > 500 ?
                    setScrollUpButton(true) :
                    setScrollUpButton(false)}
            });
        }
    })
    return (
        <div>
            {scrollUpButton ?
                <button className={`${s.buttonPosition} ${s.iconStyle}`}
                        onClick={()=>{scrollUp()}}>&#9650;
                </button>:
                null}
        </div>
    );
};

export default ScrollButton;
