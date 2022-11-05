import { blackRadial } from 'styles';
import { SlideContainer } from '../SlideContainer/SlideContainer';
import { SlideContainerNeonProps } from '../types';
import Blob1 from '../../../assets/img/blob1.svg';
import Blob2 from '../../../assets/img/blob2.svg';
import { Box, keyframes } from '@mui/material';
import Particles from "react-tsparticles";

// Animation for blob1
// Moves up and grows, then moves down to the right and shrinks.
// Then it moves to the left - while continuing to shrink- until it reaches the starting position.
const blob1Animation = keyframes`
    0% {
        transform: translateY(0) scale(0.5);
        filter: hue-rotate(0deg) blur(150px);
    }
    33% {
        transform: translateY(-160px) scale(0.9) rotate(-120deg);
        filter: hue-rotate(30deg) blur(150px);
    }
    66% {
        transform: translate(50px, 0px) scale(0.6) rotate(-200deg);
        filter: hue-rotate(60deg) blur(150px);
    }
    100% {
        transform: translate(0px, 0px) scale(0.5) rotate(0deg);
        filter: hue-rotate(0deg) blur(150px);
    }
`;

// Animation for blob2
// Moves to the right and changes hue, then moves back to the left and turns its original color.
const blob2Animation = keyframes`
    0% {
        transform: translateX(0) scale(1);
        filter: hue-rotate(0deg) blur(50px);
    }
    50% {
        transform: translateX(150px) scale(1.2);
        filter: hue-rotate(-50deg) blur(50px);
    }
    100% {
        transform: translateX(0) scale(1);
        filter: hue-rotate(0deg) blur(50px);
    }
`;

/**
 * Custom slide container for hero section. 
 * Background is black with neon blobs that move around and grow/shrink
 */
export const SlideContainerNeon = ({
    id,
    children,
    sx,
}: SlideContainerNeonProps) => {

    return (
        <SlideContainer
            hasPrevious={false}
            hasNext={true}
            id={id}
            key={id}
            sx={{
                // Set background and color
                background: blackRadial,
                color: 'white',
                ...sx
            }}
        >
            {/* Constellation */}
            <Box sx={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.5 }} >
                {/* @ts-ignore TODO */}
                <Particles
                    id="tsparticles"
                    canvasClassName="tsparticles-canvas"
                    options={{
                        fullScreen: { enable: false, zIndex: 0 },
                        fpsLimit: 60,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                bubble: {
                                    distance: 400,
                                    duration: 2,
                                    opacity: 0.8,
                                    size: 40,
                                },
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 50,
                                    duration: 5,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outMode: "bounce",
                                random: false,
                                speed: 0.3,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 100,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                random: true,
                                value: 5,
                            },
                        },
                        detectRetina: true,
                    }}
                />
            </Box>
            {/* Blob 1 */}
            <Box sx={{
                position: 'absolute',
                bottom: -300,
                left: -300,
                width: '100%',
                height: '100%',
            }}>
                <Box
                    component="img"
                    src={Blob1}
                    alt="Blob 1"
                    sx={{
                        width: '100%',
                        height: '100%',
                        animation: `${blob1Animation} 20s linear infinite`,
                    }}
                />
            </Box>
            {/* Blob 2 */}
            <Box sx={{
                position: 'absolute',
                top: -250,
                right: -350,
                width: '100%',
                height: '100%',
            }}>
                <Box
                    component="img"
                    src={Blob2}
                    alt="Blob 2"
                    sx={{
                        width: '100%',
                        height: '100%',
                        animation: `${blob2Animation} 20s linear infinite`,
                    }}
                />
            </Box>
            {children}
        </SlideContainer>
    );
}