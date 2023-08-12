import React from "react";
import Title from "../../../Shared/Title";
import img from "../../../assets/media-coverage-img.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const GetFromUs = () => {
    AOS.init();
  return (
    <div className="my-10">
      <Title
        className="my-0"
        title="Our Services"
        subtitle="What are you getting fom Us"
      />
      <div className="flex gap-3 items-center justify-around">
        <div className="flex items-center gap-5 w-3/4">
          <div className="bg-red-400 p-5 rounded-md" data-aos="fade-up"
     data-aos-anchor-placement="top-center"
     data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true">
            <p className="text-white text-center">Sed posuere consectetur est at lobortis. Morbi leo risus porta.
            Donec ullamcorper nulla non metus auctor fringilla. Sed posuere
            consectetur est at lobortis. Morbi leo risus, porta ac consectetur
            ac, vestibulum at eros.</p>
            <hr className="w-3/4 mx-auto mt-4 text-gray-700" />
            <h4 className="mt-2 text-center text-2xl font-bold text-yellow-300 uppercase">
            UNLIMITED LIVE SUPPORT
            </h4>
          </div>
          <div>
            <div className="bg-red-400 p-5 rounded-md" data-aos="fade-up"
     data-aos-anchor-placement="top-center"
     data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true">
            <p className="text-white text-center">Sed posuere consectetur est at lobortis. Morbi leo risus porta.
            Donec ullamcorper nulla non metus auctor fringilla. Sed posuere
            consectetur est at lobortis. Morbi leo risus, porta ac consectetur
            ac, vestibulum at eros.</p>
            <hr className="w-3/4 mx-auto mt-4 text-gray-700" />
            <h4 className="mt-2 text-center text-2xl font-bold text-yellow-300 uppercase">
            OFFLINE VIDEOS
            </h4>
            </div>
            <div className="mt-5 bg-red-400 p-5 rounded-md" data-aos="fade-up"
     data-aos-anchor-placement="top-center"
     data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-offset="100"
    data-aos-mirror="true">
            <p className="text-white text-center">Sed posuere consectetur est at lobortis. Morbi leo risus porta.
            Donec ullamcorper nulla non metus auctor fringilla. Sed posuere
            consectetur est at lobortis. Morbi leo risus, porta ac consectetur
            ac, vestibulum at eros.</p>
            <hr className="w-3/4 mx-auto mt-4 text-gray-700" />
            <h4 className="mt-2 text-center text-2xl font-bold text-yellow-300 uppercase">
                International Certificate
            </h4>
            </div>
          </div>
        </div>
        <div className="">
            <div data-aos="fade-up"
     data-aos-anchor-placement="top-center"
     data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true">
          <img src={img} alt="Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetFromUs;
