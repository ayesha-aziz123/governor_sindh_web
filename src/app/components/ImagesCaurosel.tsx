"use client";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Component, ReactNode } from "react";
import Image1 from "../../../public/picture/hero4.jpg";
import Image2 from "../../../public/picture/hero15.jpg";
import Image3 from "../../../public/picture/hero16.jpg";
import Image4 from "../../../public/picture/hero17.jpg";
import Image5 from "../../../public/picture/hero18.jpg";
import Image6 from "../../../public/picture/hero19.jpg";
import Image7 from "../../../public/picture/hero20.jpg";
import Image8 from "../../../public/picture/hero21.jpg";

export default class ImagesCaurosel extends Component {
  render(): ReactNode {
    const data = [
      {
        img: Image1,
        title: "srudent learning Web3 basics",
      },
      {
        img: Image2,
        title: "srudent learning Web3 basics",
      },
      {
        img: Image3,
        title: "srudent learning Web3 basics",
      },
      {
        img: Image4,
        title: "srudent learning Web3 basics",
      },
      {
        img: Image5,
        title: "srudent learning Web3 basics",
      },
      {
        img: Image6,
        title: "srudent learning Web3 basics",
      },
      {
        img: Image7,
        title: "srudent learning Web3 basics",
      },
      {
        img: Image8,
        title: "srudent learning Web3 basics",
      },
    ];

    const settings = {
      dots: true,
      dotsClass: "slick-dots line-indicator",
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: false,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
      customPaging: (i: number) => (
         <div className="mt-2 text-xs opacity-0">{i}</div>
      ),
    };
    return (
      <div className="w-full mt-10 ">
        <Slider {...settings} className="w-full">
          {data.map((val,i) => {
            return (
              <div key={i} className="px-3 xl-lg:px-1 group mb-2 md:mb-5 relative cursor-pointer">
                <div className="relative bg-slate-900 rounded-lg overflow-hidden ">
                  <Image
                    src={val.img}
                    alt={val.title}
                    className="w-full h-[300px] md:h-[600px] object-cover "
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
