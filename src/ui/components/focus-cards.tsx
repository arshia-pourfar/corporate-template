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
                "basis-1/4 me-7 last:me-0 rounded-md relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out cursor-pointer", // Base card styles
                hovered !== null && hovered !== index && "blur-sm scale-[0.98]" // Blur and scale down non-hovered cards
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
                    "absolute inset-0 bg-gradient-to-t from-black/80 to-transparent", // Base gradient styles
                    hovered !== null && hovered !== index && "from-black/55" // Lighter gradient for non-hovered cards
                )}
            ></div>

            {/* Text section that sits on top of the gradient */}
            <div
                className={cn(
                    "absolute inset-x-0 bottom-3 py-8 px-4 transition-all duration-300", // Base text container styles
                    hovered === index ? "translate-y-0" : "translate-y-6" // Slide text up on hover
                )}
            >
                <div className="text-xl md:text-2xl font-medium text-white flex flex-col">
                    {card.title} {/* Card title */}
                    <span className="text-base font-extralight underline text-orange-500">
                        learn more {/* "Learn more" link */}
                    </span>
                </div>
            </div>
        </a>
    )
);

// Display name for the Card component (useful for debugging)
Card.displayName = "Card";

// FocusCards component to render a list of cards
export function FocusCards({ cards }: { cards: CardType[] }) {
    // State to track the currently hovered card index
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        // Container for the cards
        <div className="flex justify-around items-center w-full my-8 capitalize">
            {/* Map through the cards array and render each card */}
            {cards.map((card, index) => (
                <Card
                    key={card.title} // Unique key for each card
                    card={card} // Card data
                    index={index} // Card index
                    hovered={hovered} // Currently hovered card index
                    setHovered={setHovered} // Function to update hovered card index
                />
            ))}
        </div>
    );
}