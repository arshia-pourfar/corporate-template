'use client';

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation } from 'swiper/modules';
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
            title: 'Modern Office Complex',
            href: '#',
        },
        {
            firstImage: '/images/projects/project-3.jpg',
            secondImage: '/images/projects/project-1.jpg',
            title: 'Residential Tower',
            href: '#',
        },
        {
            firstImage: '/images/header-image.jpg',
            secondImage: '/images/projects/project-2.jpg',
            title: 'Industrial Warehouse',
            href: '#',
        },
        {
            firstImage: '/images/header-image.jpg',
            secondImage: '/images/medium-shot-low-angle-view-smiling-engineer.jpg',
            title: 'Shopping Center',
            href: '#',
        },
        {
            firstImage: '/images/projects/project-3.jpg',
            secondImage: '/images/projects/project-1.jpg',
            title: 'Hospital Extension',
            href: '#',
        },
        {
            firstImage: '/images/header-image.jpg',
            secondImage: '/images/projects/project-2.jpg',
            title: 'Educational Campus',
            href: '#',
        },
    ];

    return (
        <section className="w-full text-center">
            <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-3">Our Projects</h2>
            <div className="inter-var my-10 relative flex justify-center">
                <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-accent text-bg-primary flex justify-center items-center p-2 sm:p-3 rounded-full size-10 sm:size-14 cursor-pointer">
                    <FontAwesomeIcon icon={faAngleLeft} className="font-extralight text-3xl" />
                </button>
                <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-accent text-bg-primary flex justify-center items-center p-2 sm:p-3 rounded-full size-10 sm:size-14 cursor-pointer">
                    <FontAwesomeIcon icon={faAngleRight} className="font-extralight text-3xl" />
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
                        <SwiperSlide key={index} className="cursor-grab rounded-xl relative border-3 border-text-primary bg-bg-primary">
                            <Compare
                                firstImage={item.firstImage}
                                secondImage={item.secondImage}
                                firstImageClassName="object-cover object-left-top"
                                secondImageClassname="object-cover object-left-top"
                                className="h-[50vh] sm:h-[60vh] w-full"
                                slideMode="hover"
                            />
                            <div className="absolute bottom-0 flex justify-center items-center pt-3 w-full h-16 sm:h-20 bg-gradient-to-t from-text-primary/90 to-black/0 text-bg-primary text-xl sm:text-2xl font-medium z-50">
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