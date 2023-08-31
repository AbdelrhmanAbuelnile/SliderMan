import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import components
import RightSlide1 from "./components/RightSlider/RightSLide1";
import RightSlide2 from "./components/RightSlider/RightSLide2";
import RightSlide3 from "./components/RightSlider/RightSLide3";
import RightSlide4 from "./components/RightSlider/RightSLide4";
import RightSlide5 from "./components/RightSlider/RightSLide5";
import RightSlide6 from "./components/RightSlider/RightSLide6";
import RightSlide7 from "./components/RightSlider/RightSLide7";
import RightSlide8 from "./components/RightSlider/RightSLide8";
import RightSlide9 from "./components/RightSlider/RightSLide9";

import LeftSlide1 from "./components/LeftSlider/LeftSLide1";
import LeftSlide2 from "./components/LeftSlider/LeftSLide2";
import LeftSlide3 from "./components/LeftSlider/LeftSLide3";
import LeftSlide4 from "./components/LeftSlider/LeftSLide4";
import LeftSlide5 from "./components/LeftSlider/LeftSLide5";
import LeftSlide6 from "./components/LeftSlider/LeftSLide6";
import LeftSlide7 from "./components/LeftSlider/LeftSLide7";
import LeftSlide8 from "./components/LeftSlider/LeftSLide8";
import LeftSlide9 from "./components/LeftSlider/LeftSLide9";

import "./App.css";
import "./style.css";

// import required modules
import { EffectCube, Pagination, Controller, Autoplay } from "swiper/modules";

export default function App() {
  const pagination = {
    clickable: true,
  };

  const quotes = [
    {
        quote: "\"The craziest goddamn thing I've read in a long time.\"",
        author: "Alexander Payne",
        affiliation: "Academy-Award winning writer/director of Sideways and The Descendants"
    },
    {
        quote: "\" Strange genius mixed with stomach-turning madness. \"",
        author: "Matt Greenberg",
        affiliation: "screenwriter of 1408 and Pet Sematary"
    },
    {
        quote: "\" I'm sniffing a breakthrough. It's like Bret Easton Ellis and Philip K. Dick had a baby, and the baby wrote a book. \"",
        author: "Jerry Stahl",
        affiliation: "author of Permanent Midnight and Bad Sex on Speed"
    },
    {
        quote: "\" So successfully strange it's almost its own genre. Holding a mirror, if not a hall of mirrors to our culture where we disappear and find ourselves at the same time. \"",
        author: "Aris Janigan",
        affiliation: "author of Waiting for Lipchitz at Chateau Marmont"
    },
    {
        quote: "\" Adam Novak has a merciless eye for a society in which striving replaces every consideration of morality. \"",
        author: "Michael Tolkin",
        affiliation: "author of The Player"
    }
  ];

  const speed = 1000
  const [controlledSwiper, setControlledSwiper] = useState(null);
  return (
    <div className="container">
      <Swiper
        effect={"cube"}
        direction={"vertical"}
        pagination={pagination}
        modules={[EffectCube, Pagination, Controller]}
        onSlide={console.log("slide")}
        className="mySwiper"
        controller={{ control: controlledSwiper }}
        speed={speed}
      >
        <SwiperSlide>
          <RightSlide1 type = {quotes} />
        </SwiperSlide>

        <SwiperSlide>
          <RightSlide2 type = {quotes} />
        </SwiperSlide>

        <SwiperSlide>
          <RightSlide3 type = {quotes} />
        </SwiperSlide>

        <SwiperSlide>
          <RightSlide4 type = {quotes} />
        </SwiperSlide>

        <SwiperSlide>
          <RightSlide5 type = {quotes} />
        </SwiperSlide>

        <SwiperSlide>
          <RightSlide6 />
        </SwiperSlide>

        <SwiperSlide>
          <RightSlide7 />
        </SwiperSlide>

        <SwiperSlide>
          <RightSlide8 />
        </SwiperSlide>

        <SwiperSlide>
          <RightSlide9 />
        </SwiperSlide>
      </Swiper>

      <Swiper
        effect={"cube"}
        direction={"vertical"}
        modules={[EffectCube, Pagination, Controller, Autoplay]}
        reverseDirection={true}
        onSwiper={setControlledSwiper}
        onSlide={console.log("slide")}
        autoplay={{
          delay: 150000,
          disableOnInteraction: true,
        }}
        speed={speed}
        className="mySwiper left"
      >
        <div className="content">
          <SwiperSlide>
            <LeftSlide1 />
          </SwiperSlide>
          <SwiperSlide>
            <LeftSlide2 />
          </SwiperSlide>
          <SwiperSlide>
            <LeftSlide3 />
          </SwiperSlide>
          <SwiperSlide>
            <LeftSlide4 />
          </SwiperSlide>
          <SwiperSlide>
            <LeftSlide5 />
          </SwiperSlide>
          <SwiperSlide>
            <LeftSlide6 />
          </SwiperSlide>
          <SwiperSlide>
            <LeftSlide7 />
          </SwiperSlide>
          <SwiperSlide>
            <LeftSlide8 />
          </SwiperSlide>
          <SwiperSlide>
            <LeftSlide9 />
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
}
