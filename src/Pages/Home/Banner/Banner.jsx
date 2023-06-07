import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css";
import { Autoplay, Navigation, Pagination } from "swiper";
import banner1 from "../../../assets/banner (1).jpg";
import banner2 from "../../../assets/banner (4).jpg";
import banner3 from "../../../assets/banner (5).jpg";
import banner4 from "../../../assets/banner (6).jpg";
import banner5 from "../../../assets/banner (7).jpg";
import banner6 from "../../../assets/banner (8).jpg";
import banner7 from "../../../assets/banner (9).jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <Swiper
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="overlay ">
            <div className="banner-text text-white w-3/5">
              <h2 className=" text-4xl uppercase font-serif font-bold leading-snug tracking-wider">
                To have another <br /> language is to possess <br /> a second soul
              </h2>
              <p className="mt-5">A language has a completely new set of intricate rules, systems and lexis. You develop key learning skills such as cognitive thinking and problem-solving.</p>
              <Link className="btn btn-outline btn-error mt-5">Register Now</Link>
            </div>
          </div>
          <img src={banner2} alt="Image" />
        </SwiperSlide>
        <SwiperSlide>
        <div className="overlay ">
            <div className="banner-text text-white w-3/5">
              <h2 className=" text-4xl uppercase font-serif font-bold leading-snug tracking-wider">
              Every student matters, <br />
                every moment counts
              </h2>
              <p className="mt-5">A language has a completely new set of intricate rules, systems and lexis. You develop key learning skills such as cognitive thinking and problem-solving.</p>
              <Link className="btn btn-outline btn-error mt-5">Register Now</Link>
            </div>
          </div>
          <img src={banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <div className="overlay ">
            <div className="banner-text text-white w-3/5">
              <h2 className=" text-4xl uppercase font-serif font-bold leading-snug tracking-wider">
              Putting Children First.
Preparing Children For
Success In Life
              </h2>
              <p className="mt-5">A language has a completely new set of intricate rules, systems and lexis. You develop key learning skills such as cognitive thinking and problem-solving.</p>
              <Link className="btn btn-outline btn-error mt-5">Register Now</Link>
            </div>
          </div>
          <img src={banner3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <div className="overlay ">
            <div className="banner-text text-white w-3/5">
              <h2 className=" text-4xl uppercase font-serif font-bold leading-snug tracking-wider">
                To have another <br /> language is to possess <br /> a second soul
              </h2>
              <p className="mt-5">A language has a completely new set of intricate rules, systems and lexis. You develop key learning skills such as cognitive thinking and problem-solving.</p>
              <Link className="btn btn-outline btn-error mt-5">Register Now</Link>
            </div>
          </div>
          <img src={banner4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <div className="overlay ">
            <div className="banner-text text-white w-3/5">
              <h2 className=" text-4xl uppercase font-serif font-bold leading-snug tracking-wider">
                To have another <br /> language is to possess <br /> a second soul
              </h2>
              <p className="mt-5">A language has a completely new set of intricate rules, systems and lexis. You develop key learning skills such as cognitive thinking and problem-solving.</p>
              <Link className="btn btn-outline btn-error mt-5">Register Now</Link>
            </div>
          </div>
          <img src={banner5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <div className="overlay ">
            <div className="banner-text text-white w-3/5">
              <h2 className=" text-4xl uppercase font-serif font-bold leading-snug tracking-wider">
                To have another <br /> language is to possess <br /> a second soul
              </h2>
              <p className="mt-5">A language has a completely new set of intricate rules, systems and lexis. You develop key learning skills such as cognitive thinking and problem-solving.</p>
              <Link className="btn btn-outline btn-error mt-5">Register Now</Link>
            </div>
          </div>
          <img src={banner6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <div className="overlay ">
            <div className="banner-text text-white w-3/5">
              <h2 className=" text-4xl uppercase font-serif font-bold leading-snug tracking-wider">
                To have another <br /> language is to possess <br /> a second soul
              </h2>
              <p className="mt-5">A language has a completely new set of intricate rules, systems and lexis. You develop key learning skills such as cognitive thinking and problem-solving.</p>
              <Link className="btn btn-outline btn-error mt-5">Register Now</Link>
            </div>
          </div>
          <img src={banner7} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
