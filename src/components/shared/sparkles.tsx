"use client"; // Marks this component as a Client Component in Next.js

import React, { useId } from "react"; // React hooks for unique ID generation
import { useEffect, useState } from "react"; // React hooks for side effects and state management
import Particles, { initParticlesEngine } from "@tsparticles/react"; // Particles library for React
import type { Container, SingleOrMultiple } from "@tsparticles/engine"; // Type definitions for particles
import { loadSlim } from "@tsparticles/slim"; // Slim version of the particles engine
import { cn } from "@/lib/utils"; // Utility function for conditional class names
import { motion, useAnimation } from "framer-motion"; // Animation library for React

// Type definition for the component props
type ParticlesProps = {
    id?: string; // Custom ID for the particles container
    className?: string; // Custom class names for styling
    background?: string; // Background color of the particles container
    particleSize?: number; // Size of the particles
    minSize?: number; // Minimum size of the particles
    maxSize?: number; // Maximum size of the particles
    speed?: number; // Speed of particle animations
    particleColor?: string; // Color of the particles
    particleDensity?: number; // Density of the particles
};

// SparklesCore component definition
export const SparklesCore = (props: ParticlesProps) => {
    // Destructure props with default values
    const {
        id,
        className,
        background,
        minSize,
        maxSize,
        speed,
        particleColor,
        particleDensity,
    } = props;

    // State to track if the particles engine is initialized
    const [init, setInit] = useState(false);

    // Initialize the particles engine on component mount
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine); // Load the slim version of the particles engine
        })
            .then(() => {
                setInit(true); // Set initialization state to true
            })
            .catch((error) => {
                console.error("Failed to initialize particles engine:", error);
                // SUGGESTION: Add a fallback or error state for better UX
            });
    }, []);

    // Animation controls for the particles container
    const controls = useAnimation();

    // Callback function when particles are loaded
    const particlesLoaded = async (container?: Container) => {
        if (container) {
            // Start the opacity animation
            controls.start({
                opacity: 1,
                transition: {
                    duration: 1,
                },
            });
        }
    };

    // Generate a unique ID for the particles container if none is provided
    const generatedId = useId();

    return (
        // Motion div for animating the particles container
        <motion.div
            animate={controls}
            className={cn("opacity-0", className)}
            aria-label="Particle effect container" // SUGGESTION: Add ARIA label for accessibility
        >
            {/* Render particles if the engine is initialized */}
            {init ? (
                <Particles
                    id={id || generatedId} // Use custom ID or generated ID
                    className={cn("h-full w-full")} // Apply custom class names
                    particlesLoaded={particlesLoaded} // Callback when particles are loaded
                    options={{
                        // Background color of the particles container
                        background: {
                            color: {
                                value: background || "#0d47a1", // Default to a blue color
                            },
                        },
                        // Disable fullscreen mode and set z-index
                        fullScreen: {
                            enable: false,
                            zIndex: 1,
                        },
                        // Set FPS limit for performance
                        fpsLimit: 120,
                        // Configure interactivity settings
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true, // Enable click interaction
                                    mode: "push", // Add particles on click
                                },
                                onHover: {
                                    enable: false, // Disable hover interaction
                                    mode: "repulse",
                                },
                                resize: true as never, // Enable resizing
                            },
                            modes: {
                                push: {
                                    quantity: 4, // Number of particles to add on click
                                },
                                repulse: {
                                    distance: 200, // Distance for repulsion
                                    duration: 0.4, // Duration of repulsion
                                },
                            },
                        },
                        // Configure particle properties
                        particles: {
                            bounce: {
                                horizontal: {
                                    value: 1, // Horizontal bounce factor
                                },
                                vertical: {
                                    value: 1, // Vertical bounce factor
                                },
                            },
                            collisions: {
                                absorb: {
                                    speed: 2, // Speed absorption on collision
                                },
                                bounce: {
                                    horizontal: {
                                        value: 1,
                                    },
                                    vertical: {
                                        value: 1,
                                    },
                                },
                                enable: false, // Disable collisions
                                maxSpeed: 50, // Maximum speed on collision
                                mode: "bounce", // Collision mode
                                overlap: {
                                    enable: true, // Allow overlapping
                                    retries: 0, // Number of retries on overlap
                                },
                            },
                            color: {
                                value: particleColor || "#ffffff", // Particle color (default: white)
                                animation: {
                                    h: {
                                        count: 0,
                                        enable: false,
                                        speed: 1,
                                        decay: 0,
                                        delay: 0,
                                        sync: true,
                                        offset: 0,
                                    },
                                    s: {
                                        count: 0,
                                        enable: false,
                                        speed: 1,
                                        decay: 0,
                                        delay: 0,
                                        sync: true,
                                        offset: 0,
                                    },
                                    l: {
                                        count: 0,
                                        enable: false,
                                        speed: 1,
                                        decay: 0,
                                        delay: 0,
                                        sync: true,
                                        offset: 0,
                                    },
                                },
                            },
                            effect: {
                                close: true,
                                fill: true,
                                options: {},
                                type: {} as SingleOrMultiple<string> | undefined,
                            },
                            groups: {},
                            move: {
                                angle: {
                                    offset: 0,
                                    value: 90,
                                },
                                attract: {
                                    distance: 200,
                                    enable: false,
                                    rotate: {
                                        x: 3000,
                                        y: 3000,
                                    },
                                },
                                center: {
                                    x: 50,
                                    y: 50,
                                    mode: "percent",
                                    radius: 0,
                                },
                                decay: 0,
                                distance: {},
                                direction: "none",
                                drift: 0,
                                enable: true,
                                gravity: {
                                    acceleration: 9.81,
                                    enable: false,
                                    inverse: false,
                                    maxSpeed: 50,
                                },
                                path: {
                                    clamp: true,
                                    delay: {
                                        value: 0,
                                    },
                                    enable: false,
                                    options: {},
                                },
                                outModes: {
                                    default: "out",
                                },
                                random: false,
                                size: false,
                                speed: {
                                    min: 0.1,
                                    max: 1,
                                },
                                spin: {
                                    acceleration: 0,
                                    enable: false,
                                },
                                straight: false,
                                trail: {
                                    enable: false,
                                    length: 10,
                                    fill: {},
                                },
                                vibrate: false,
                                warp: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    width: 400,
                                    height: 400,
                                },
                                limit: {
                                    mode: "delete",
                                    value: 0,
                                },
                                value: particleDensity || 120, // Particle density (default: 120)
                            },
                            opacity: {
                                value: {
                                    min: 0.1,
                                    max: 1,
                                },
                                animation: {
                                    count: 0,
                                    enable: true,
                                    speed: speed || 4, // Animation speed (default: 4)
                                    decay: 0,
                                    delay: 0,
                                    sync: false,
                                    mode: "auto",
                                    startValue: "random",
                                    destroy: "none",
                                },
                            },
                            reduceDuplicates: false,
                            shadow: {
                                blur: 0,
                                color: {
                                    value: "#000",
                                },
                                enable: false,
                                offset: {
                                    x: 0,
                                    y: 0,
                                },
                            },
                            shape: {
                                close: true,
                                fill: true,
                                options: {},
                                type: "circle", // Particle shape (default: circle)
                            },
                            size: {
                                value: {
                                    min: minSize || 1, // Minimum particle size (default: 1)
                                    max: maxSize || 3, // Maximum particle size (default: 3)
                                },
                                animation: {
                                    count: 0,
                                    enable: false,
                                    speed: 5,
                                    decay: 0,
                                    delay: 0,
                                    sync: false,
                                    mode: "auto",
                                    startValue: "random",
                                    destroy: "none",
                                },
                            },
                            stroke: {
                                width: 0,
                            },
                            zIndex: {
                                value: 0,
                                opacityRate: 1,
                                sizeRate: 1,
                                velocityRate: 1,
                            },
                            destroy: {
                                bounds: {},
                                mode: "none",
                                split: {
                                    count: 1,
                                    factor: {
                                        value: 3,
                                    },
                                    rate: {
                                        value: {
                                            min: 4,
                                            max: 9,
                                        },
                                    },
                                    sizeOffset: true,
                                },
                            },
                            roll: {
                                darken: {
                                    enable: false,
                                    value: 0,
                                },
                                enable: false,
                                enlighten: {
                                    enable: false,
                                    value: 0,
                                },
                                mode: "vertical",
                                speed: 25,
                            },
                            tilt: {
                                value: 0,
                                animation: {
                                    enable: false,
                                    speed: 0,
                                    decay: 0,
                                    sync: false,
                                },
                                direction: "clockwise",
                                enable: false,
                            },
                            twinkle: {
                                lines: {
                                    enable: false,
                                    frequency: 0.05,
                                    opacity: 1,
                                },
                                particles: {
                                    enable: false,
                                    frequency: 0.05,
                                    opacity: 1,
                                },
                            },
                            wobble: {
                                distance: 5,
                                enable: false,
                                speed: {
                                    angle: 50,
                                    move: 10,
                                },
                            },
                            life: {
                                count: 0,
                                delay: {
                                    value: 0,
                                    sync: false,
                                },
                                duration: {
                                    value: 0,
                                    sync: false,
                                },
                            },
                            rotate: {
                                value: 0,
                                animation: {
                                    enable: false,
                                    speed: 0,
                                    decay: 0,
                                    sync: false,
                                },
                                direction: "clockwise",
                                path: false,
                            },
                            orbit: {
                                animation: {
                                    count: 0,
                                    enable: false,
                                    speed: 1,
                                    decay: 0,
                                    delay: 0,
                                    sync: false,
                                },
                                enable: false,
                                opacity: 1,
                                rotation: {
                                    value: 45,
                                },
                                width: 1,
                            },
                            links: {
                                blink: false,
                                color: {
                                    value: "#fff",
                                },
                                consent: false,
                                distance: 100,
                                enable: false,
                                frequency: 1,
                                opacity: 1,
                                shadow: {
                                    blur: 5,
                                    color: {
                                        value: "#000",
                                    },
                                    enable: false,
                                },
                                triangles: {
                                    enable: false,
                                    frequency: 1,
                                },
                                width: 1,
                                warp: false,
                            },
                            repulse: {
                                value: 0,
                                enabled: false,
                                distance: 1,
                                duration: 1,
                                factor: 1,
                                speed: 1,
                            },
                        },
                        detectRetina: true, // Enable retina display support
                    }}
                />
            ) : (
                // SUGGESTION: Add a fallback or loading state
                <div className="text-center text-gray-500">Loading particles...</div>
            )}
        </motion.div>
    );
};