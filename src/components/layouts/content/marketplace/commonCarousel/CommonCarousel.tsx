import React from "react";
import s from "./commonCarousel.module.sass"
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import '../swiperCustom.sass'
import {FreeMode, Pagination} from "swiper";
import ModalWindow from "../ModalWindow";
import {
    changeStateOfModalWindow,
    setStateOfModalWindow
} from "../../../../../store/reduxToolkit/features/marketplace-page/marketplaceSlice";
import {useTypeDispatch} from "../../../../../hooks/useTypeDispatch";
import {IModalWindowInfoModel} from "../../../../../interfaces/marketplaceInterfaces/marketplaceInterfaces";

const CommonCarousel = () => {
    const dispatch = useTypeDispatch()
    const handleOpenModal = ({image, name, price, shop}:IModalWindowInfoModel) => {
        dispatch(setStateOfModalWindow({image, name, price, shop}))
        dispatch(changeStateOfModalWindow(true))
    };

    return (
        <div className={s.mainWrapper}>
            <div className={s.headerWithLinks}>
                <div>Everything for photo</div>
            </div>
            <div className={s.carousel}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={-30}
                    freeMode={true}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                    breakpoints={{
                        1100: {
                            slidesPerView: 4,
                            spaceBetween: 80
                        },
                        400: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },

                    }}

                >
                    <SwiperSlide>
                        <div className={s.imageAndReviewProductWrapper}>
                            <img
                                className={s.image}
                                src="https://sun6-21.userapi.com/impg/Rxrg2tol-8IyDrxNTnerq3-Rb77DRP20v7YEhA/R-X2T0Y3EhY.jpg?size=0x180&crop=0,0,1,1&quality=95&sign=b753a1c6b20ae54b4ede77753f5af342&c_uniq_tag=BwtQQ8Ugc46QjwLJi0_L3dfid3Lq0E_C4oR3MerBXio"
                                alt="zenith"
                                onClick={()=>{handleOpenModal({
                                    image: "https://sun6-21.userapi.com/impg/Rxrg2tol-8IyDrxNTnerq3-Rb77DRP20v7YEhA/R-X2T0Y3EhY.jpg?size=0x180&crop=0,0,1,1&quality=95&sign=b753a1c6b20ae54b4ede77753f5af342&c_uniq_tag=BwtQQ8Ugc46QjwLJi0_L3dfid3Lq0E_C4oR3MerBXio",
                                    name: "Zenith 122 (м42)",
                                    price: "50$",
                                    shop: "MOMENT"
                                })}}

                            />
                            <div className={s.aboutProduct}>
                                <div className={s.name}>Zenith 122 (м42)</div>
                                <div className={s.price}>50$</div>
                                <div className={s.shop}>MOMENT</div>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={s.imageAndReviewProductWrapper}>
                            <img
                                className={s.image}
                                src="https://sun6-23.userapi.com/impg/YsQPJgD9Jdv6VRnPi8RPL0z6Kp0KapTFYkZfIQ/5ge9_4OpVfY.jpg?size=0x180&crop=0,0,1,1&quality=95&sign=edf9adc8d5023383fcc62576edea235b&c_uniq_tag=zPOy08wJy3eApGs-C_ccUUa8IvvSWJ84IzoqUAuXbik"
                                alt=""
                                onClick={()=>{handleOpenModal({
                                    image: "https://sun6-23.userapi.com/impg/YsQPJgD9Jdv6VRnPi8RPL0z6Kp0KapTFYkZfIQ/5ge9_4OpVfY.jpg?size=0x180&crop=0,0,1,1&quality=95&sign=edf9adc8d5023383fcc62576edea235b&c_uniq_tag=zPOy08wJy3eApGs-C_ccUUa8IvvSWJ84IzoqUAuXbik",
                                    name: "Pentax Spotmatic SP 2494685",
                                    price: "120$",
                                    shop: "MOMENT"
                                })}}

                            />
                            <div className={s.aboutProduct}>
                                <div className={s.name}>
                                    Pentax Spotmatic SP 2494685
                                </div>
                                <div className={s.price}>120$</div>
                                <div className={s.shop}>MOMENT</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={s.imageAndReviewProductWrapper}>
                            <img
                                className={s.image}
                                src="https://sun6-20.userapi.com/impg/9ToAchL2NlGsGSKv6vTBxFks4mOVCPYHNYf3UA/rWIArbG05OU.jpg?size=0x180&crop=0.176,0.012,0.647,0.976&quality=95&sign=bdc9277df711d065d3503d32e73d078a&c_uniq_tag=LfG4lQHrS_Sl02Tp3DN_Xj3tQQYDrcwtNpcKmij0QWY"
                                alt=""
                                onClick={()=>{handleOpenModal({
                                    image: "https://sun6-20.userapi.com/impg/9ToAchL2NlGsGSKv6vTBxFks4mOVCPYHNYf3UA/rWIArbG05OU.jpg?size=0x180&crop=0.176,0.012,0.647,0.976&quality=95&sign=bdc9277df711d065d3503d32e73d078a&c_uniq_tag=LfG4lQHrS_Sl02Tp3DN_Xj3tQQYDrcwtNpcKmij0QWY",
                                    name: "Nikon Df // 5047",
                                    price: "105$",
                                    shop: "Nikon Sale"
                                })}}
                            />
                            <div className={s.aboutProduct}>
                                <div className={s.name}>Nikon Df // 5047</div>
                                <div className={s.price}>105$</div>
                                <div className={s.shop}>Nikon Sale</div>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={s.imageAndReviewProductWrapper}>
                            <img
                                className={s.image}
                                src="https://sun6-23.userapi.com/impg/houDCWbdB9r8Nj-2WiZE2VIHpSDIMVqLKe7g7A/BdiXZv3WfVU.jpg?size=0x180&crop=0,0,1,1&quality=95&sign=fc964ee0d2b2eb5c41e8827e322859bb&c_uniq_tag=ZthVx1iCybcXx8sLUSPAFx8mjIIv_teNOPEmklLWNCQ"
                                alt=""
                                onClick={()=>{handleOpenModal({
                                    image: "https://sun6-23.userapi.com/impg/houDCWbdB9r8Nj-2WiZE2VIHpSDIMVqLKe7g7A/BdiXZv3WfVU.jpg?size=0x180&crop=0,0,1,1&quality=95&sign=fc964ee0d2b2eb5c41e8827e322859bb&c_uniq_tag=ZthVx1iCybcXx8sLUSPAFx8mjIIv_teNOPEmklLWNCQ",
                                    name: "Minolta SRT 101+ Rokkor- PF 58/ 1.4 (MD)",
                                    price: "200$",
                                    shop: "35 stOre"
                                })}}
                            />
                            <div className={s.aboutProduct}>
                                <div className={s.name}>Minolta SRT 101+ Rokkor- PF 58/ 1.4 (MD)</div>
                                <div className={s.price}>200$</div>
                                <div className={s.shop}>35 stOre</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={s.imageAndReviewProductWrapper}>
                            <img
                                className={s.image}
                                src="https://sun6-23.userapi.com/impg/AD7kcJl1If7W8pyyeV_kNrbRR8X0iPF_Z20WBQ/aoJPYPc3C34.jpg?size=0x180&crop=0.012,0.008,0.976,0.98&quality=95&sign=f5a4465b2f47ed406a39b05c8ebaef87&c_uniq_tag=abQ5jadvh4s7e79RTK1MiUqVMuygCf9GiJYrAChvbnw"
                                alt=""
                                onClick={()=>{handleOpenModal({
                                    image: "https://sun6-23.userapi.com/impg/AD7kcJl1If7W8pyyeV_kNrbRR8X0iPF_Z20WBQ/aoJPYPc3C34.jpg?size=0x180&crop=0.012,0.008,0.976,0.98&quality=95&sign=f5a4465b2f47ed406a39b05c8ebaef87&c_uniq_tag=abQ5jadvh4s7e79RTK1MiUqVMuygCf9GiJYrAChvbnw",
                                    name: "Kodak GOLD 200",
                                    price: "15$",
                                    shop: "35 stOre"
                                })}}
                            />
                            <div className={s.aboutProduct}>
                                <div className={s.name}>Kodak GOLD 200</div>
                                <div className={s.price}>15$</div>
                                <div className={s.shop}>35 stOre</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={s.imageAndReviewProductWrapper}>
                            <img
                                className={s.image}
                                src="https://sun6-23.userapi.com/impg/6oP6CkfNFjfKBatZlBLPxwG8Sbaf8Ap_4LstFw/wbDBIoeQ7pY.jpg?crop=0,0,1,1&amp;size=0x180&amp;quality=95&amp;sign=9c10793b29b8481bbda1972799b66447&amp;c_uniq_tag=OY1tg22nzkTUhhDFdDvn5fdpUzTsmOcKL4WD7LQha1I"
                                alt="Olympus trip AF "
                                onClick={()=>{handleOpenModal({
                                    image: "https://sun6-23.userapi.com/impg/6oP6CkfNFjfKBatZlBLPxwG8Sbaf8Ap_4LstFw/wbDBIoeQ7pY.jpg?crop=0,0,1,1&amp;size=0x180&amp;quality=95&amp;sign=9c10793b29b8481bbda1972799b66447&amp;c_uniq_tag=OY1tg22nzkTUhhDFdDvn5fdpUzTsmOcKL4WD7LQha1I",
                                    name: "Zenit 122 (м42)",
                                    price: "50$",
                                    shop: "MOMENT"
                                })}}
                            />
                            <div className={s.aboutProduct}>
                                <div className={s.name}>Zenit 122 (м42)</div>
                                <div className={s.price}>50$</div>
                                <div className={s.shop}>MOMENT</div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <ModalWindow/>
            </div>
        </div>
    )
}
export default CommonCarousel


