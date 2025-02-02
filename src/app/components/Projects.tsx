'use client';

import React from "react";
// import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

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

const OurProject: React.FC<DemoSliderProps> = ({ data }) => {
    return (
        <section className="flex justify-center items-center w-full mt-10">
            <div className="inter-var">
                <Swiper
                    modules={[EffectCards]}
                    effect="cards"
                    className="w-[70vw] h-[530px]"
                >
                    <div className="relative group/card w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                        {data.map(({ id }) => (
                            <SwiperSlide key={id} className="bg-custom-charcoal-blue cursor-grab rounded-xl p-1">

                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </div>
        </section >
    );
}

export default OurProject;