"use client";
import { useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type ClientItem = {
    image: string;
    clientName: string;
    text: string;
};

export const ParallaxScroll = ({
    clientsText,
    className,
}: {
    clientsText: ClientItem[];
    className?: string;
}) => {
    const [visibleClients, setVisibleClients] = useState(clientsText);
    const [thirdValue, setThirdValue] = useState(3);
    const gridRef = useRef<never>(null);
    const { scrollYProgress } = useScroll({
        container: gridRef, // remove this if your container is not fixed height
        offset: ["start start", "end start"], // remove this if your container is not fixed height
    });

    const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

    const third = Math.ceil(visibleClients.length / thirdValue);

    const firstPart = visibleClients.slice(0, third);
    const secondPart = visibleClients.slice(third, 2 * third);
    const thirdPart = visibleClients.slice(2 * third);


    useEffect(() => {
        // محدود کردن تعداد کامنت‌ها به 6 تا برای صفحه‌های موبایل
        const handleResize = () => {
            if (window.innerWidth < 640) { // اندازه گوشی‌ها
                setVisibleClients(clientsText.slice(0, 6)); // 6 کامنت اول رو نمایش می‌دهیم
                setThirdValue(1) // تعداد ستون ها برای تقسیم بندی
            } else if (window.innerWidth < 1024) {
                setVisibleClients(clientsText.slice(0, 12)); // 12 کامنت اول رو نمایش می‌دهیم
                setThirdValue(2) // تعداد ستون ها برای تقسیم بندی
            } else if (window.innerWidth >= 1024) {
                setVisibleClients(clientsText); // نمایش تمام کامنت‌ها در اندازه‌های بزرگتر
                setThirdValue(3) // تعداد ستون ها برای تقسیم بندی
            }
        };

        handleResize(); // به‌هنگام بارگذاری صفحه
        window.addEventListener("resize", handleResize); // به‌هنگام تغییر اندازه صفحه

        return () => {
            window.removeEventListener("resize", handleResize); // حذف ایونت وقتی کامپوننت از بین می‌رود
        };
    }, [clientsText, translateFirst]);

    return (
        <>
            <h2 className="mt-20 py-5 w-full text-center font-extrabold text-3xl md:text-5xl">Testimonials & Clients</h2>
            <div
                className={cn("h-[40rem] items-start overflow-y-auto w-full scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-rounded", className)}
                ref={gridRef}
            >
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start mx-auto gap-7 md:py-5 px-10"
                    ref={gridRef}
                >
                    {/* اولین ردیف */}
                    <div className="grid gap-7">
                        {firstPart.map((el, idx) => (
                            <motion.div
                                style={{ y: translateFirst }} // Apply the translateY motion value here
                                key={"grid-1" + idx}
                            >
                                <div className="flex flex-col items-start p-2 border rounded-md">
                                    <div className="flex flex-row items-center py-2">
                                        <Image
                                            src={el.image}
                                            height={80}
                                            width={80}
                                            alt="Client Logo"
                                            className="size-12 rounded-full"
                                        />
                                        <h3 className="text-xl font-semibold ms-3">{el.clientName}</h3>
                                    </div>
                                    <p className="text-gray-600 ps-14 px-4">{el.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* دومین ردیف */}
                    <div className="sm:grid hidden gap-7">
                        {secondPart.map((el, idx) => (
                            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
                                <div className="flex flex-col items-start p-2 border rounded-md">
                                    <div className="flex flex-row items-center py-2">
                                        <Image
                                            src={el.image}
                                            height={80}
                                            width={80}
                                            alt="Client Logo"
                                            className="size-12 rounded-full"
                                        />
                                        <h3 className="text-xl font-semibold ms-3">{el.clientName}</h3>
                                    </div>
                                    <p className="text-gray-600 ps-14 px-4">{el.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* سومین ردیف */}
                    <div className="md:grid hidden gap-7">
                        {thirdPart.map((el, idx) => (
                            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
                                <div className="flex flex-col items-start p-2 border rounded-md">
                                    <div className="flex flex-row items-center py-2">
                                        <Image
                                            src={el.image}
                                            height={80}
                                            width={80}
                                            alt="Client Logo"
                                            className="size-12 rounded-full"
                                        />
                                        <h3 className="text-xl font-semibold ms-3">{el.clientName}</h3>
                                    </div>
                                    <p className="text-gray-600 ps-14 px-4">{el.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};