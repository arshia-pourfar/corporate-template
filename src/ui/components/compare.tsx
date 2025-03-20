/* eslint-disable @typescript-eslint/no-unused-vars */ // Disables ESLint warnings for unused variables
/* eslint-disable @next/next/no-img-element */ // Disables ESLint warnings for using `<img>` instead of Next.js `<Image>`
"use client"; // Marks this component as a Client Component in Next.js

import React, { useState, useEffect, useRef, useCallback } from "react"; // React hooks for state, effects, and refs
import { SparklesCore } from "@/ui/components/sparkles"; // Custom Sparkles effect component
import { AnimatePresence, motion } from "framer-motion"; // Animation library for React
import { cn } from "@/lib/utils"; // Utility function for conditional class names
import { IconDotsVertical } from "@tabler/icons-react"; // Vertical dots icon from Tabler Icons

// Interface defining the props for the Compare component
interface CompareProps {
  firstImage?: string; // URL of the first image
  secondImage?: string; // URL of the second image
  className?: string; // Additional class names for the container
  firstImageClassName?: string; // Additional class names for the first image
  secondImageClassname?: string; // Additional class names for the second image
  initialSliderPercentage?: number; // Initial position of the slider (default: 50%)
  slideMode?: "hover" | "drag"; // Slider interaction mode (hover or drag)
  showHandlebar?: boolean; // Whether to show the handlebar
  autoplay?: boolean; // Whether to enable autoplay
  autoplayDuration?: number; // Duration of autoplay animation (default: 5000ms)
}

// Compare component definition
export const Compare = ({
  firstImage = "", // Default value for firstImage
  secondImage = "", // Default value for secondImage
  className, // Container class names
  firstImageClassName, // First image class names
  secondImageClassname, // Second image class names
  initialSliderPercentage = 50, // Default slider position
  slideMode = "hover", // Default interaction mode
  showHandlebar = true, // Show handlebar by default
  autoplay = false, // Autoplay disabled by default
  autoplayDuration = 5000, // Default autoplay duration
}: CompareProps) => {
  // State for slider position (percentage)
  const [sliderXPercent, setSliderXPercent] = useState(initialSliderPercentage);

  // State for tracking drag interaction
  const [isDragging, setIsDragging] = useState(false);

  // Ref for the slider container
  const sliderRef = useRef<HTMLDivElement>(null);

  // Ref for autoplay timeout
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Function to start autoplay animation
  const startAutoplay = useCallback(() => {
    if (!autoplay) return; // Exit if autoplay is disabled

    const startTime = Date.now(); // Record start time
    const animate = () => {
      const elapsedTime = Date.now() - startTime; // Calculate elapsed time
      const progress =
        (elapsedTime % (autoplayDuration * 2)) / autoplayDuration; // Calculate progress (0 to 2)
      const percentage = progress <= 1 ? progress * 100 : (2 - progress) * 100; // Map progress to 0-100%

      setSliderXPercent(percentage); // Update slider position
      autoplayRef.current = setTimeout(animate, 16); // Continue animation at ~60fps
    };

    animate(); // Start animation
  }, [autoplay, autoplayDuration]);

  // Function to stop autoplay animation
  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current); // Clear the timeout
      autoplayRef.current = null; // Reset the ref
    }
  }, []);

  // Effect to start/stop autoplay on component mount/unmount
  useEffect(() => {
    startAutoplay(); // Start autoplay
    return () => stopAutoplay(); // Stop autoplay on unmount
  }, [startAutoplay, stopAutoplay]);

  // Function to handle drag/touch start
  const handleStart = useCallback(
    (clientX: number) => {
      if (slideMode === "drag") {
        setIsDragging(true); // Enable dragging
      }
    },
    [slideMode]
  );

  // Function to handle drag/touch end
  const handleEnd = useCallback(() => {
    if (slideMode === "drag") {
      setIsDragging(false); // Disable dragging
    }
  }, [slideMode]);

  // Function to handle slider movement
  const handleMove = useCallback(
    (clientX: number) => {
      if (!sliderRef.current) return; // Exit if slider ref is not set
      if (slideMode === "hover" || (slideMode === "drag" && isDragging)) {
        const rect = sliderRef.current.getBoundingClientRect(); // Get slider dimensions
        const x = clientX - rect.left; // Calculate mouse/touch position relative to slider
        const percent = (x / rect.width) * 100; // Convert position to percentage
        requestAnimationFrame(() => {
          setSliderXPercent(Math.max(0, Math.min(100, percent))); // Update slider position
        });
      }
    },
    [slideMode, isDragging]
  );

  // Mouse event handlers
  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => handleStart(e.clientX),
    [handleStart]
  );
  const handleMouseUp = useCallback(() => handleEnd(), [handleEnd]);
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => handleMove(e.clientX),
    [handleMove]
  );

  // Touch event handlers
  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (!autoplay) {
        handleStart(e.touches[0].clientX); // Handle touch start
      }
    },
    [handleStart, autoplay]
  );

  const handleTouchEnd = useCallback(() => {
    if (!autoplay) {
      handleEnd(); // Handle touch end
    }
  }, [handleEnd, autoplay]);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!autoplay) {
        handleMove(e.touches[0].clientX); // Handle touch move
      }
    },
    [handleMove, autoplay]
  );

  // Render the component
  return (
    <div
      ref={sliderRef} // Ref for the slider container
      className={cn("w-[400px] h-[400px] overflow-hidden", className)} // Container class names
      style={{
        position: "relative",
        cursor: slideMode === "drag" ? "grab" : "col-resize", // Cursor style based on slide mode
      }}
      onMouseMove={handleMouseMove} // Mouse move handler
      onMouseDown={handleMouseDown} // Mouse down handler
      onMouseUp={handleMouseUp} // Mouse up handler
      onTouchStart={handleTouchStart} // Touch start handler
      onTouchEnd={handleTouchEnd} // Touch end handler
      onTouchMove={handleTouchMove} // Touch move handler
    >
      {/* AnimatePresence for handling animations */}
      <AnimatePresence initial={false}>
        {/* Slider handle */}
        <motion.div
          className="h-full w-[2px] absolute top-0 m-auto z-30 bg-black via-indigo-500 to-transparent"
          style={{
            left: `${sliderXPercent}%`, // Position the slider based on percentage
            top: "0",
            zIndex: 40,
          }}
          transition={{ duration: 0 }} // Disable animation
        >
          {/* Gradient effects for the slider */}
          <div className="w-36 h-full [mask-image:radial-gradient(100px_at_left,white,transparent)] absolute top-1/2 -translate-y-1/2 left-0 bg-gradient-to-r from-indigo-400 via-transparent to-transparent z-20 opacity-50" />
          <div className="w-10 h-1/2 [mask-image:radial-gradient(50px_at_left,white,transparent)] absolute top-1/2 -translate-y-1/2 left-0 bg-gradient-to-r from-cyan-400 via-transparent to-transparent z-10 opacity-100" />
          <div className="w-10 h-3/4 top-1/2 -translate-y-1/2 absolute -right-10 [mask-image:radial-gradient(100px_at_left,white,transparent)]">
            {/* Sparkles effect */}
            <MemoizedSparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div>
          {/* Handlebar */}
          {showHandlebar && (
            <div className="h-5 w-5 rounded-md top-1/2 -translate-y-1/2 bg-white z-30 -right-2.5 absolute flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40]">
              <IconDotsVertical className="h-4 w-4 text-black" />
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* First image */}
      <div className="overflow-hidden w-full h-full relative z-20 pointer-events-none">
        <AnimatePresence initial={false}>
          {firstImage ? (
            <motion.div
              className={cn(
                "absolute inset-0 z-20 rounded-lg flex-shrink-0 w-full h-full select-none overflow-hidden",
                firstImageClassName
              )}
              style={{
                clipPath: `inset(0 ${100 - sliderXPercent}% 0 0)`, // Clip the first image based on slider position
              }}
              transition={{ duration: 0 }} // Disable animation
            >
              <img
                alt="first image"
                src={firstImage}
                className={cn(
                  "absolute inset-0 z-20 rounded-lg flex-shrink-0 w-full h-full select-none",
                  firstImageClassName
                )}
                draggable={false} // Disable image dragging
              />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      {/* Second image */}
      <AnimatePresence initial={false}>
        {secondImage ? (
          <motion.img
            className={cn(
              "absolute top-0 left-0 z-[19] rounded-lg w-full h-full select-none",
              secondImageClassname
            )}
            alt="second image"
            src={secondImage}
            draggable={false} // Disable image dragging
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
};

// Memoized SparklesCore component to optimize performance
const MemoizedSparklesCore = React.memo(SparklesCore);