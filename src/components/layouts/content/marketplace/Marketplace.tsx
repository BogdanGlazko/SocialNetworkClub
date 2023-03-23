import React from "react";
import MainCarousel from "./mainCarousel/MainCarousel";
import CommonCarousel from "./commonCarousel/CommonCarousel";


const Marketplace =()=>{
    return(
        <div>
            <MainCarousel/>
            <CommonCarousel/>
            <CommonCarousel/>
            <MainCarousel/>
        </div>
    )
}
export default Marketplace