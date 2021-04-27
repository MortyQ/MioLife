import React,{useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Controller , Thumbs} from 'swiper';
import 'swiper/swiper-bundle.css';
import './main_slider.css'
import Slider1 from '../../img/slider1.jpg'
import Slider2 from '../../img/slider2.jpg'
import Slider3 from '../../img/slider3.jpg'
import Slider4 from '../../img/slider4.jpg'
import Slider5 from '../../img/slider5.jpg'
import BottomSlider1 from '../../img/bottomSlider1.jpg'
import BottomSlider2 from '../../img/bottomSlider2.jpg'
import BottomSlider3 from '../../img/bottomSlider3.jpg'
import BottomSlider4 from '../../img/bottomSlider4.jpg'
import BottomSlider5 from '../../img/bottomSlider5.jpg'



SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);


const MainSlider =()=>{

    const [thumbsSwiper, setThumbsSwiper] = useState();
    const [controlledSwiper, setControlledSwiper] = useState();
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
                <Swiper id='main'
                thumbs={{swiper: thumbsSwiper}} 
                controller={{control: controlledSwiper}}
                tag='section'  
                wrapperTag='ul' 
                navigation 
                pagination 
                spaceBetween={0} 
                slidesPerView={1} 
                onInit={(swiper)=> console.log('Swiper initialized!',swiper) } 
                onSlideChange={(swiper) => (console.log('index changed to: ',swiper.activeIndex))}  
                onReachEnd ={()=> console.log('Swiper end reached')} >
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
                        <SwiperSlide tag='li' >
                            <img src={BottomSlider1} alt='Slider1'/>
                        </SwiperSlide>
                        <SwiperSlide tag='li' >
                            <img src={BottomSlider2} alt='Slider1'/>
                        </SwiperSlide>
                        <SwiperSlide tag='li'  >
                            <img src={BottomSlider3} alt='Slider1'/>
                        </SwiperSlide>
                        <SwiperSlide tag='li'  >
                            <img src={BottomSlider4} alt='Slider1'/>
                        </SwiperSlide>
                        <SwiperSlide tag='li'  >
                            <img src={BottomSlider5} alt='Slider1'/>
                        </SwiperSlide>
                     </Swiper>

                    <Swiper id='thumbs'
                    spaceBetween={5}
                    slidesPerView={3}
                    onSwiper={setThumbsSwiper}
                    >
                                <SwiperSlide tag='li' >
                            <img src={Slider1}  className='small_img' alt='Slider1'/>
                        </SwiperSlide>
                        <SwiperSlide tag='li' >
                            <img src={Slider2} className='small_img' alt='Slider1'/>
                        </SwiperSlide>
                        <SwiperSlide tag='li'  >
                            <img src={Slider3} className='small_img' alt='Slider1'/>
                        </SwiperSlide>
                        <SwiperSlide tag='li'  >
                            <img src={Slider4} className='small_img' alt='Slider1'/>
                        </SwiperSlide>
                        <SwiperSlide tag='li'  >
                            <img src={Slider5} className='small_img' alt='Slider1'/>
                        </SwiperSlide>
                        <SwiperSlide tag='li' >
                            <img src={BottomSlider1}  className='small_img' alt='Slider1'/>
                        </SwiperSlide>
                        <SwiperSlide tag='li' >
                            <img src={BottomSlider2} className='small_img' alt='Slider1'/>
                        </SwiperSlide>
                        <SwiperSlide tag='li'  >
                            <img src={BottomSlider3} className='small_img' alt='Slider1'/>
                        </SwiperSlide>
                        <SwiperSlide tag='li'  >
                            <img src={BottomSlider4} className='small_img' alt='Slider1'/>
                        </SwiperSlide>
                        <SwiperSlide tag='li'  >
                            <img src={BottomSlider5} className='small_img' alt='Slider1'/>
                        </SwiperSlide>
                    </Swiper>

                    {/* <Swiper id='controller' 
                    onSwiper={setControlledSwiper}
                    >

<SwiperSlide tag='li' >
                            <img src={BottomSlider1} alt='Slider1'/>
                        </SwiperSlide>
                        <SwiperSlide tag='li' >
                            <img src={BottomSlider2} alt='Slider1'/>
                        </SwiperSlide>
                        <SwiperSlide tag='li'  >
                            <img src={BottomSlider3} alt='Slider1'/>
                        </SwiperSlide>
                        <SwiperSlide tag='li'  >
                            <img src={BottomSlider4} alt='Slider1'/>
                        </SwiperSlide>
                        <SwiperSlide tag='li'  >
                            <img src={BottomSlider5} alt='Slider1'/>
                        </SwiperSlide>

                    </Swiper> */}


        </div>
    )

}


export default MainSlider;