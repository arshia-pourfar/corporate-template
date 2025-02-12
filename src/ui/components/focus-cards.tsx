"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

type CardType = {
    title: string;
    src: string;
};

export const Card = React.memo(
    ({
        card,
        index,
        hovered,
        setHovered,
    }: {
        card: CardType;
        index: number;
        hovered: number | null;
        setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    }) => (
        <a
            href="#"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={cn(
                "basis-1/4 me-7 last:me-0 rounded-md relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out cursor-pointer",
                hovered !== null && hovered !== index && "blur-sm scale-[0.98]",
            )}
        >
            {/* تصویر کارت */}
            <Image
                src={card.src}
                alt={card.title}
                fill
                className="object-cover absolute inset-0"
            />

            {/* گرادینت تیره از پایین به بالا */}
            <div className={cn("absolute inset-0 bg-gradient-to-t from-black/80 to-transparent",
                hovered !== null && hovered !== index && "from-black/55")}></div>

            {/* بخش متن که روی گرادینت قرار می‌گیره */}
            <div
                className={cn(
                    "absolute inset-x-0 bottom-3 py-8 px-4 transition-all duration-300",
                    hovered === index ? "translate-y-0" : "translate-y-6"
                )}
            >
                <div className="text-xl md:text-2xl font-medium text-white flex flex-col">
                    {card.title}
                    <span className="text-base font-extralight underline text-orange-500 ">learn more</span>
                </div>
            </div>
        </a>
    )
);

Card.displayName = "Card";

export function FocusCards({ cards }: { cards: CardType[] }) {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <div className="flex justify-around items-center w-full my-8 capitalize">
            {cards.map((card, index) => (
                <Card
                    key={card.title}
                    card={card}
                    index={index}
                    hovered={hovered}
                    setHovered={setHovered}
                />
            ))}
        </div>
    );
}