"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import ima from "../../../public/forabout.jpg";

const Testomonels = () => {
  return (
    <div className="">
      <h1 className="p-20 text-7xl font-extrabold">
        IF IT WORKED FOR THEM, IT COULD WORK FOR YOU
      </h1>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="flex md:flex-row lg:flex-row flex-col m-20 bg-white shadow-xl rounded-xl">
            <Image src={ima} alt="Testimonial 1" width={420} height={420} />
            <div className="p-10 pt-28">
              <p className="text-2xl font-medium">Testimonial 1</p>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                lacinia.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex md:flex-row lg:flex-row flex-col m-20 bg-white shadow-xl rounded-xl">
            <Image src={ima} alt="Testimonial 2" width={420} height={420} />
            <div className="p-10 pt-28">
              <p className="text-2xl font-medium">Testimonial 2</p>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                lacinia.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex md:flex-row lg:flex-row flex-col m-20 bg-white shadow-xl rounded-xl">
            <Image src={ima} alt="Testimonial 3" width={420} height={420} />
            <div className="p-10 pt-28">
              <p className="text-2xl font-medium">Testimonial 3</p>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                lacinia.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testomonels;
