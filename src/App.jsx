import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import './App.css';

// import required modules
import { EffectCube, Pagination, Controller, Autoplay } from 'swiper/modules';

export default function App() {
  const pagination = {
    clickable: true,
  };
  const [controlledSwiper, setControlledSwiper] = useState(null);
  return (
    <div className='container'>
      <Swiper
        effect={'cube'}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        direction={'vertical'}
        pagination={pagination}
        modules={[EffectCube, Pagination,Controller]}
        onSlide = {console.log('slide')}
        className="mySwiper"
        controller={{ control: controlledSwiper }}
      >
        <SwiperSlide>
          <div className='content__main'>
              <p>Enter Rat Park at your own risk. Lose the cage. Find yourself. An L.A. power couple
                orders an A.I. sex droid to escape their marital prison. What happens to them could
                happen to you. With his fourth novel, Adam Novak shows us how it takes a village of
                automatons to augment your humanity, feed your deceptive compulsive sexual
                addiction, and forget why you ever got married in the first place.
              </p>
              <div className="frame">
                <a href="https://a.co/d/0p21mCR" target="_blank">
                    <button className="custom-btn btn-12"><span>Hurry!</span><span>Buy
                            Now</span></button>
                </a>
              </div>
              <br/>
              <div className="quotes">
                <div className="quotes">
                    <p className="quote"></p>
                    <p className="author"></p>
                    <p className="affiliation"></p>
                </div>
              </div>
          </div>
          <h3 class="content__index">01</h3>
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>

      </Swiper>

      <Swiper
        effect={'cube'}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        direction={'vertical'}
        modules={[EffectCube, Pagination, Controller, Autoplay]}
        reverseDirection={true}
        onSwiper={setControlledSwiper}
        onSlide = {console.log('slide')}
        autoplay={{
          delay: 150000,
          disableOnInteraction: true,
        }}
        className="mySwiper left"
      >
        <div className='content'>
          <SwiperSlide>
            <img src="/assets/adam_novak.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/excerpts.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/freaks_of_the_industry.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/podcast.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/rat_park_audio_book.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/rat_park_shirt.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/rat_park.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/take_fountain.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/the_non_pro.jpg" />
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
}