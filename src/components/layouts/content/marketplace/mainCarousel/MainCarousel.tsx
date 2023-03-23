import React from "react";
import s from "./mainCarousel.module.sass"
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import '../swiperCustom.sass'

import {Autoplay, Navigation, Pagination} from "swiper";

const MainCarousel = () => {
    return (
        <div className={s.mainWrapper}>
            <div className={s.headerWithLinks}>
                <div className={s.linksBlock}>
                    <div className={s.link}>All goods</div>
                    <div className={s.link}>Bookmarks</div>
                    <div className={s.link}>Orders</div>
                    <div className={s.link}>My adverts</div>
                </div>
                <div>Shopping bag</div>
            </div>
            <div className={s.carousel}>
                <Swiper
                    cssMode={true}
                    slidesPerView={1}
                    spaceBetween={30}
                    // autoplay={{
                    //     delay: 3500,
                    //     disableOnInteraction: false,
                    // }}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation,Autoplay]}
                    className={s.swiper}
                >
                    <SwiperSlide>
                            <img
                                className={s.imageHeight}
                                src="https://sun6-20.userapi.com/impg/PbYqKnOSZgIf3p7oHC27CMAkyGyg0mYD0DKjyg/IL5CjtxPC_8.jpg?keep_aspect_ratio=1&size=1200x300&quality=95&sign=843ff3e708db50799698e29e2256f1b6&c_uniq_tag=YoCVHf-YLLj0Sx-3oXj9hPYxrnzlXKcm3pOoJrMsgG4"
                                alt="flice image"
                            />
                        <div className={s.slideInfoAndButton}>
                            <div className={s.header}>Cozy fleece</div>
                            <div className={s.slogan}>Choose exactly what you need to be warm up!</div>
                            <button>See more</button>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className={s.imageHeight}
                            src="https://sun6-23.userapi.com/impg/GD3MEPp4yfgFJxG_b-a5Ps_PFKavSojr1NoE8g/BkGdg_fRXu0.jpg?keep_aspect_ratio=1&size=1200x300&quality=95&sign=eb8da90894bb8fc63457a80fe3469421&c_uniq_tag=aGPZHpRPymcptYPR_onEbOxlaXwIIeMKnjXayHVQze8"
                            alt="flice image"
                        />
                        <div className={s.slideInfoAndButton}>
                            <div className={s.header}>Foto records</div>
                            <div className={s.slogan}>All what you need to make a perfect photos</div>
                            <button>See more</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                        src="https://sun6-21.userapi.com/impg/u0w0o7SW6B1PxT2dQ8HVCncz0BAH2C977jtNBA/McQjUHHDkWU.jpg?keep_aspect_ratio=1&size=1200x300&quality=95&sign=ddeb52d23b0cfdf483c85a41eaa33ed9&c_uniq_tag=781vHDnqE6UDqWdkBBHNikMbzKqV3b9FADl-v4480lM"
                        alt="flice image"
                        className={s.imageHeight}
                        />
                        <div className={s.slideInfoAndButton}>
                            <div className={s.header}>If you need a motivation</div>
                            <div className={s.slogan}>Everything for new ideas and goals!</div>
                            <button>See more</button>
                        </div></SwiperSlide>
                    <SwiperSlide>
                        <img
                        src="https://sun6-21.userapi.com/impg/MzzBgxrEsNC13dKc8Bs-WabA83QuB_wwPzaeJw/ZzK5HlyDBLc.jpg?keep_aspect_ratio=1&size=1200x300&quality=95&sign=b271d476aeb61b9ea387624d4a469bdb&c_uniq_tag=GVtjmwRsuo2YbfC15HveTNqAXQ5Or0V3IzzUX4qV7o4"
                        alt="flice image"
                        className={s.imageHeight}
                    />
                        <div className={s.slideInfoAndButton}>
                            <div className={s.header}>Foosters</div>
                            <div className={s.slogan}>Gamers will appreciate this!</div>
                            <button>See more</button>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
export default MainCarousel