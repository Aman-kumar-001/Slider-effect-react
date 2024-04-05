import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
//
import 'swiper/css';
import "../component/swipper.css";

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';

function Swipper() {
  return (
    <Swiper
    modules={[Navigation, Pagination , A11y, Scrollbar ]}
      spaceBetween={50}
      slidesPerView={1}
     
       a11y={true}
      navigation={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
      <div className="first">
            <div className="h1">
              <h1>WE PROVIDE BEST</h1>
              <h1>HEALTHCARE</h1>
            </div>
            <div className="para">
              <p>
                Explicabo esse amet tempora quibusdam laudantium, laborum eaque
                magnam fugiat hic? Esse dicta aliquid error repudiandae earum
                suscipit fugiat molestias, veniam, vel architecto veritatis
                delectus repellat modi impedit sequi.
              </p>
            </div>
            <div>
              <button className="slide-button">Read More</button>
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide><div className="first">
            <div className="h1">
              <h1>WE PROVIDE BEST</h1>
              <h1>HEALTHCARE</h1>
            </div>
            <div className="para">
              <p>
                Explicabo esse amet tempora quibusdam laudantium, laborum eaque
                magnam fugiat hic? Esse dicta aliquid error repudiandae earum
                suscipit fugiat molestias, veniam, vel architecto veritatis
                delectus repellat modi impedit sequi.
              </p>
            </div>
            <div>
              <button className="slide-button">Read More</button>
            </div>
          </div></SwiperSlide>
      <SwiperSlide><div className="first">
            <div className="h1">
              <h1>WE PROVIDE BEST</h1>
              <h1>HEALTHCARE</h1>
            </div>
            <div className="para">
              <p>
                Explicabo esse amet tempora quibusdam laudantium, laborum eaque
                magnam fugiat hic? Esse dicta aliquid error repudiandae earum
                suscipit fugiat molestias, veniam, vel architecto veritatis
                delectus repellat modi impedit sequi.
              </p>
            </div>
            <div>
              <button className="slide-button">Read More</button>
            </div>
          </div></SwiperSlide>
      <SwiperSlide><div className="first">
            <div className="h1">
              <h1>WE PROVIDE BEST</h1>
              <h1>HEALTHCARE</h1>
            </div>
            <div className="para">
              <p>
                Explicabo esse amet tempora quibusdam laudantium, laborum eaque
                magnam fugiat hic? Esse dicta aliquid error repudiandae earum
                suscipit fugiat molestias, veniam, vel architecto veritatis
                delectus repellat modi impedit sequi.
              </p>
            </div>
            <div>
              <button className="slide-button">Read More</button>
            </div>
          </div></SwiperSlide>
      <SwiperSlide><div className="first">
            <div className="h1">
              <h1>WE PROVIDE BEST</h1>
              <h1>HEALTHCARE</h1>
            </div>
            <div className="para">
              <p>
                Explicabo esse amet tempora quibusdam laudantium, laborum eaque
                magnam fugiat hic? Esse dicta aliquid error repudiandae earum
                suscipit fugiat molestias, veniam, vel architecto veritatis
                delectus repellat modi impedit sequi.
              </p>
            </div>
            <div>
              <button className="slide-button">Read More</button>
            </div>
          </div></SwiperSlide>
      <SwiperSlide><div className="first">
            <div className="h1">
              <h1>WE PROVIDE BEST</h1>
              <h1>HEALTHCARE</h1>
            </div>
            <div className="para">
              <p>
                Explicabo esse amet tempora quibusdam laudantium, laborum eaque
                magnam fugiat hic? Esse dicta aliquid error repudiandae earum
                suscipit fugiat molestias, veniam, vel architecto veritatis
                delectus repellat modi impedit sequi.
              </p>
            </div>
            <div>
              <button className="slide-button">Read More</button>
            </div>
          </div></SwiperSlide>
     {/*  <SwiperSlide><div className="first">
            <div className="h1">
              <h1>WE PROVIDE BEST</h1>
              <h1>HEALTHCARE</h1>
            </div>
            <div className="para">
              <p>
                Explicabo esse amet tempora quibusdam laudantium, laborum eaque
                magnam fugiat hic? Esse dicta aliquid error repudiandae earum
                suscipit fugiat molestias, veniam, vel architecto veritatis
                delectus repellat modi impedit sequi.
              </p>
            </div>
            <div>
              <button className="slide-button">Read More</button>
            </div>
          </div></SwiperSlide> */}
     
    </Swiper>
  )
}

export default Swipper;