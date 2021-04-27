import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import 'swiper/swiper-bundle.css';
import './main_slider.css'
import Slider1 from '../../img/slider1.jpg'
import Slider2 from '../../img/slider2.jpg'
import Slider3 from '../../img/slider3.jpg'
import Slider4 from '../../img/slider4.jpg'
import Slider5 from '../../img/slider5.jpg'



SwiperCore.use([Navigation, Pagination]);


const MainSlider =()=>{

    
    // const slides = [];
    



    const img = [Slider1,Slider2,Slider3,Slider4,Slider5]

    // for (let i = 0; i < img.length; i++) {
    //     slides.push(
    //         <SwiperSlide key={img} >
                {/* <img src={`https://piscum.photos/id/${i+1}/500/300`} 
                alt={`Slide  ${i}`}/> */}
                {/* <img src={`slides[${i}]`} alt={`slides [${i}]`}/> */}
            {/* </SwiperSlide>
        )
    } */}


    return(
        <div className="main_slider_body">
                <Swiper id='main' tag='section'  wrapperTag='ul' navigation pagination spaceBetween={0} slidesPerView={1} onInit={(swiper)=> console.log('Swiper initialized!',swiper) } onSlideChange={(swiper) => (console.log('index changed to: ',swiper.activeIndex))}  onReachEnd ={()=> console.log('Swiper end reached')} >
                        <SwiperSlide tag='li' >
                            <img src={Slider1} alt='Slider1'/>
                        </SwiperSlide>
                        <SwiperSlide tag='li' >
                            <img src={Slider2} alt='Slider1'/>
                        </SwiperSlide>
                        <SwiperSlide tag='li'  >
                            <img src={Slider3} alt='Slider1'/>
                        </SwiperSlide>
                        <SwiperSlide tag='li'  >
                            <img src={Slider4} alt='Slider1'/>
                        </SwiperSlide>
                        <SwiperSlide tag='li'  >
                            <img src={Slider5} alt='Slider1'/>
                        </SwiperSlide>
                     </Swiper>
        </div>
    )

}


export default MainSlider;