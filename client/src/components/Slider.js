import React, { memo } from 'react';
import Slider  from "react-slick";
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}
const SliderCustom = ({images}) => {
  return (
    <div className='w-full'>
       <Slider {...settings} >
         {images?.length > 0 && images?.map((item, index) =>{
          return (
            <div key={index} className=' flex justify-center h-[320px] px-12 bg-black'>
                   <img
                     src={item}
                     alt='slider'
                     className='object-contain m-auto h-full'
                   />
                   <div>
                    
                   </div>
            </div>
          )
         })}
       </Slider>
    </div>
  );
};

export default memo(SliderCustom);
