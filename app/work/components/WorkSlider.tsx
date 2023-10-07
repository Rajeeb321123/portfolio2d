'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import dynamic from 'next/dynamic';
import Image from 'next/image';


import { workSlides } from '@/app/hooks/useWork';

const WorkSlider = () => {
  const MyDrawer = dynamic(() => import('./MyDrawer'), {
    ssr: false,
  });
  return (
    <>
      <Swiper
        navigation={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className='w-full h-full'
      >

        {workSlides.slides.map((slide, index) => {
          return (
            <SwiperSlide
              key={index}
            >
              <div className='group '>
                <div>
                  <div
                  >
                    {/* image */}
                    <Image
                      src={slide.image}
                      alt='project'
                      fill
                      className=' group-hover:opacity-100  opacity-100 transition-opacity  xl:opacity-70 hover:opacity-100 border-[5px] bg-gradient-to-r from-pink-500/50 via-red-500/50 to-yellow-500/50 border-white/0  rounded-3xl '
                      
                    />
                    <div
                      className="playbtn absolute top-10 bottom-10 right-10 left-10 "
                      onClick={() => {
                      }}
                    >
                      <MyDrawer
                        link={slide.website_link}
                        video={slide.youtube_link}
                        tags={slide.tags}
                        github={slide.source_code_link}
                        name={slide.name}
                        description={slide.description}
                      />
                    </div>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
      )
};

export default WorkSlider;
