'use client';

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Compare } from "@/components/shared/compare";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

interface Slide {
    id: number;
    username: string;
    tagline: string;
    image: string;
    profileImage: string;
}

interface DemoSliderProps {
    data: Slide[];
}

const OurProject: React.FC<DemoSliderProps> = () => {
    const projectList = [
        {
            firstImage: '/images/header-image.jpg',
            secondImage: '/images/medium-shot-low-angle-view-smiling-engineer.jpg',
            title: 'Lorem ipsum, dolor',
            href: '#',
        },
        {
            firstImage: '/images/projects/project-3.jpg',
            secondImage: '/images/projects/project-1.jpg',
            title: 'sit amet consectetur',
            href: '#',
        },
        {
            firstImage: '/images/header-image.jpg',
            secondImage: '/images/projects/project-2.jpg',
            title: 'adipisicing elit.',
            href: '#',
        },
        {
            firstImage: '/images/header-image.jpg',
            secondImage: '/images/medium-shot-low-angle-view-smiling-engineer.jpg',
            title: 'Deleniti aspernatur',
            href: '#',
        },
        {
            firstImage: '/images/projects/project-3.jpg',
            secondImage: '/images/projects/project-1.jpg',
            title: 'quidem magnam',
            href: '#',
        },
        {
            firstImage: '/images/header-image.jpg',
            secondImage: '/images/projects/project-2.jpg',
            title: 'repudiandae in eligendi',
            href: '#',
        },
    ];

    return (
        <section className="w-full mt-10 text-center px-4">
            <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-3">Our Projects</h2>
            <div className="inter-var my-10 relative flex justify-center">
                <button className="swiper-button-prev absolute -left-10 sm:left-5 top-1/2 -translate-y-1/2 z-10 bg-orange-500 text-white flex justify-center items-center p-2 sm:p-3 rounded-full">
                    <FontAwesomeIcon icon={faAngleLeft} className="size-6 sm:size-9 font-extralight" />
                </button>
                <button className="swiper-button-next absolute -right-10 sm:right-5 top-1/2 -translate-y-1/2 z-10 bg-orange-500 text-white flex justify-center items-center p-2 sm:p-3 rounded-full">
                    <FontAwesomeIcon icon={faAngleRight} className="size-6 sm:size-9 font-extralight" />
                </button>

                <Swiper
                    modules={[EffectCards, Navigation]}
                    effect="cards"
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    className="w-full max-w-[90vw] sm:max-w-[70vw] md:max-w-[60vw] lg:max-w-[50vw]"
                >
                    {projectList.map((item, index) => (
                        <SwiperSlide key={index} className="cursor-grab rounded-xl relative border-4 border-black bg-black">
                            <Compare
                                firstImage={item.firstImage}
                                secondImage={item.secondImage}
                                firstImageClassName="object-cover object-left-top"
                                secondImageClassname="object-cover object-left-top"
                                className="h-[50vh] sm:h-[60vh] w-full"
                                slideMode="hover"
                            />
                            <div className="absolute bottom-0 flex justify-center items-center pt-3 w-full h-16 sm:h-20 bg-gradient-to-t from-black/90 to-black/0 text-white text-xl sm:text-2xl font-medium z-[999]">
                                {item.title}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default OurProject;