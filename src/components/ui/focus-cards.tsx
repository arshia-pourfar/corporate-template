"use client"; // Marks this component as a Client Component in Next.js

import Image from "next/image"; // Next.js optimized image component
import React, { useState } from "react"; // React hooks for state management
import { cn } from "@/lib/utils"; // Utility function for conditional class names

// Type definition for the card object
type CardType = {
    title: string; // Title of the card
    src: string; // Image source URL
};

// Card component (memoized for performance optimization)
export const Card = React.memo(
    ({
        card,
        index,
        hovered,
        setHovered,
    }: {
        card: CardType; // Card data (title and image source)
        index: number; // Index of the card in the list
        hovered: number | null; // Index of the currently hovered card
        setHovered: React.Dispatch<React.SetStateAction<number | null>>; // Function to update the hovered card index
    }) => (
        // Link wrapper for the card
        <a
            href="#"
            onMouseEnter={() => setHovered(index)} // Set hovered card index on mouse enter
            onMouseLeave={() => setHovered(null)} // Reset hovered card index on mouse leave
            className={cn(
                "rounded-md relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-40 md:h-60 lg:h-96 w-full transition-all duration-300 ease-out cursor-pointer", // Responsive height adjustments
                hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
            )}
        >
            {/* Card image */}
            <Image
                src={card.src} // Image source
                alt={card.title} // Alt text for accessibility
                fill // Fill the container
                className="object-cover absolute inset-0" // Image styles
            />

            {/* Dark gradient overlay from bottom to top */}
            <div
                className={cn(
                    "absolute inset-0 bg-gradient-to-t from-black/80 to-transparent",
                    hovered !== null && hovered !== index && "from-black/55"
                )}
            ></div>

            {/* Text section that sits on top of the gradient */}
            <div
                className={cn(
                    "absolute inset-x-0 bottom-3 py-4 md:py-6 lg:py-8 px-4 transition-all duration-300",
                    hovered === index ? "translate-y-0" : "translate-y-6"
                )}
            >
                <div className="text-lg md:text-xl lg:text-2xl font-medium text-white flex flex-col">
                    {card.title}
                    <span className="text-sm md:text-base font-extralight underline text-orange-500">
                        learn more
                    </span>
                </div>
            </div>
        </a>
    )
);

Card.displayName = "Card";

// FocusCards component to render a list of cards
export function FocusCards({ cards }: { cards: CardType[] }) {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 w-full my-8 capitalize">
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