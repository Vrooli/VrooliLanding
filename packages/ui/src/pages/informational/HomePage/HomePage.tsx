import { Slide } from 'components/slides/Slide/Slide';
import { Box, Button, Grid, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import BlankRoutine from 'assets/img/blank-routine-1.png';
import MonkeyCoin from 'assets/img/monkey-coin-page.png';
import { openLink } from 'utils';
import { useLocation } from '@shared/route';
import { slideImageContainer, slideText, slideTitle, textPop } from 'styles';
import { CSSProperties } from '@mui/styled-engine';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { APP_LINKS, APP_URL, SOCIALS, WHITE_PAPER_URL } from '@shared/consts';
import { GlossyContainer, PulseButton, SlideContent, SlidePage } from 'components';
import { SlideContainerNeon } from 'components/slides/SlideContainerNeon/SlideContainerNeon';
import { ArticleIcon, DiscordIcon, GitHubIcon, PlayIcon, TwitterIcon } from '@shared/icons';
import Earth from '../../../assets/img/Earth.svg';
import { TwinkleStars } from 'components/TwinkleStars/TwinkleStars';
import { wave } from 'animations';

const RotatedBox = styled("div")({
    display: 'inline-block',
    width: 60,
    height: 60,
    animation: `${wave} 3s infinite ease`
});

const greenNeonText = {
    color: '#fff',
    textShadow: '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #0fa, 0 0 42px #0fa, 0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa',
}

const iconButtonProps = {
    background: 'transparent',
    border: '1px solid #0fa',
    '&:hover': {
        background: 'transparent',
        filter: 'brightness(1.2)',
        transform: 'scale(1.2)',
    },
    transition: 'all 0.2s ease',
}

export const HomePage = () => {
    const [, setLocation] = useLocation();

    // Track if earth/sky is in view
    const [earthTransform, setEarthTransform] = useState<string>('translate(0%, 100%) scale(1)');
    const [isSkyVisible, setIsSkyVisible] = useState<boolean>(false);
    useEffect(() => {
        const onScroll = () => {
            const inView = (element: HTMLElement | null) => {
                if (!element) return false;
                const rect = element.getBoundingClientRect();
                const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
                return rect.top < windowHeight / 2;
            }
            const earthHorizonSlide = document.getElementById('sky-is-limit');
            const earthFullSlide = document.getElementById('get-started');
            if (inView(earthFullSlide)) {
                setEarthTransform('translate(25%, 25%) scale(0.8)');
                setIsSkyVisible(true);
            } else if (inView(earthHorizonSlide)) {
                setEarthTransform('translate(0%, 69%) scale(1)');
                setIsSkyVisible(true);
            } else {
                setEarthTransform('translate(0%, 100%) scale(1)');
                setIsSkyVisible(false);
            }
        }
        // Add scroll listener to component with 'page' id
        const page = document.getElementById('page');
        if (page) {
            page.addEventListener('scroll', onScroll);
        }
        return () => {
            if (page) {
                page.removeEventListener('scroll', onScroll);
            }
        }
    })

    // Intersection observer for fade in of slide content
    // const observer = useMemo(() => new IntersectionObserver((entries) => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             entry.target.classList.add('show');
    //         } else {
    //             entry.target.classList.remove('show');
    //         }
    //     })
    // }), []);
    // useEffect(() => {
    //     const roadmapSections = document.querySelectorAll('.hidden');
    //     roadmapSections.forEach(section => {
    //         observer.observe(section);
    //     }
    //     )
    // }, [observer])

    return (
        <SlidePage id='page' sx={{ background: 'radial-gradient(circle, rgb(6 6 46) 12%, rgb(1 1 36) 52%, rgb(3 3 20) 80%)' }}>
            {/* Background stars */}
            <TwinkleStars
                amount={400}
                sx={{
                    position: 'absolute',
                    pointerEvents: 'none',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 4,
                    opacity: isSkyVisible ? 1 : 0,
                    transition: 'opacity 1s ease-in-out',
                }}
            />
            {/* Earth at bottom of page */}
            {/* Earth changes position depending on the slide  */}
            <Box
                id="earth"
                component="img"
                src={Earth}
                alt="Earth illustration"
                sx={{
                    width: '150%',
                    position: 'fixed',
                    bottom: '0',
                    left: '-25%',
                    right: '-25%',
                    margin: 'auto',
                    maxWidth: '1000px',
                    maxHeight: '1000px',
                    transform: earthTransform,
                    transition: 'transform 1.5s ease-in-out',
                    zIndex: 5,
                }}
            />
            <SlideContainerNeon id="an-open-source-economy" show={!isSkyVisible} sx={{ zIndex: 3 }}>
                <SlideContent>
                    <Typography component="h1" sx={{
                        ...slideTitle,
                        ...greenNeonText,
                        fontFamily: 'Neuropol',
                        fontWeight: 'bold',
                    }}>
                        An Open-Source Economy
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} margin="auto" sx={{ marginTop: 4, marginBottom: 4 }}>
                            <Typography component="h2" variant="h5" sx={{ ...slideText, textAlign: 'center' }}>
                                We're building the tools to prototype and automate the future of work
                            </Typography>
                        </Grid>
                    </Grid>
                    <PulseButton
                        variant="outlined"
                        color="secondary"
                        onClick={() => openLink(setLocation, `${APP_URL}${APP_LINKS.Start}`)}
                        startIcon={<PlayIcon fill='#0fa' />}
                        sx={{
                            marginLeft: 'auto !important',
                            marginRight: 'auto !important',
                        }}
                    >Start</PulseButton>
                    {/* Icon buttons for White paper, GitHub, Twitter, and Discord */}
                    <Stack direction="row" spacing={2} display="flex" justifyContent="center" alignItems="center" sx={{ paddingTop: 8, zIndex: 3 }}>
                        <Tooltip title="Read the white Paper" placement="bottom">
                            <IconButton onClick={() => openLink(setLocation, WHITE_PAPER_URL)} sx={iconButtonProps}>
                                <ArticleIcon fill='#0fa' />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Check out our code" placement="bottom">
                            <IconButton onClick={() => openLink(setLocation, SOCIALS.GitHub)} sx={iconButtonProps}>
                                <GitHubIcon fill='#0fa' />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Follow us on Twitter" placement="bottom">
                            <IconButton onClick={() => openLink(setLocation, SOCIALS.Twitter)} sx={iconButtonProps}>
                                <TwitterIcon fill='#0fa' />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Join us on Discord" placement="bottom">
                            <IconButton onClick={() => openLink(setLocation, SOCIALS.Discord)} sx={iconButtonProps}>
                                <DiscordIcon fill='#0fa' />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                </SlideContent>
                <SlideContent>
                    <Typography variant='h2' mb={4} sx={{ ...slideTitle }}>Three Easy Steps</Typography>
                    <Stack direction="row" justifyContent="center" spacing={4}>
                        <GlossyContainer>
                            <Typography variant='h5' mb={2}><b>Personalization</b></Typography>
                        </GlossyContainer>
                        <GlossyContainer>
                            <Typography variant='h5' mb={2}><b>Collaboration</b></Typography>
                        </GlossyContainer>
                        <GlossyContainer>
                            <Typography variant='h5' mb={2}><b>Automation</b></Typography>
                        </GlossyContainer>
                    </Stack>
                    <Typography variant="h5" sx={{ ...slideText }}>
                        This combination creates a <Box sx={{ display: 'contents', color: 'gold' }}><b>self-improving productivity machine</b></Box>
                    </Typography>
                </SlideContent>
                <SlideContent>
                    <Typography variant='h2' mb={4} sx={{ ...slideTitle }}>
                        Take Back Your Freedom
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} margin="auto">
                            <Stack direction="column" spacing={2}>
                                <Typography variant="h5" sx={{ ...slideText }}>
                                    Vrooli is designed to maximize personal growth, while minimizing the time and resources required to get things done.
                                </Typography>
                                <Typography variant="h5" sx={{ ...slideText }}>
                                    It will guide you through organizing your life, learning new skills, and monetizing your talents.
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{ paddingLeft: '0 !important' }}>
                            <Box sx={{ ...slideImageContainer }}>
                                <img alt="Routine runner interface example - Minting tokens" src={MonkeyCoin} />
                            </Box>
                        </Grid>
                    </Grid>
                </SlideContent>
                <SlideContent>
                    <Typography variant="h2" sx={{ ...slideTitle }}>
                        Sharing is Scaling
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} sx={{ paddingLeft: '0 !important' }}>
                            <Box sx={{ ...slideImageContainer }}>
                                <img alt="Routine runner interface example - Minting tokens" src={MonkeyCoin} />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} margin="auto">
                            <Stack direction="column" spacing={2}>
                                <Typography variant="h5" sx={{ ...slideText }}>
                                    Use existing routines as building blocks, to create complex processes as quickly as possible.
                                </Typography>
                                <Typography variant="h5" sx={{ ...slideText }}>
                                    Share your work with the community to receive rewards and feedback.
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </SlideContent>
                <SlideContent>
                    <Typography variant="h2" sx={{ ...slideTitle }}>
                        Automate With Minimal Effort
                    </Typography>
                </SlideContent>
            </SlideContainerNeon>
            <Slide id="sky-is-limit" sx={{ color: 'white', background: 'transparent', zIndex: 10 }}>
                <Typography variant='h2' mb={4} sx={{ ...slideTitle }}>The Sky is the Limit</Typography>
                <Typography variant="h5" sx={{ ...slideText }}>
                    Our ultimate goal is to transition the world to a fully automated, post-capitalist economy. Here's how:
                </Typography>
                <Stack direction="row" justifyContent="center" alignItems="center" pt={4} spacing={2}>
                    <Button
                        size="large"
                        color="secondary"
                        href={`${APP_URL}${APP_LINKS.Start}`}
                        onClick={(e) => {
                            e.preventDefault();
                            openLink(setLocation, `${APP_URL}${APP_LINKS.Start}`);
                        }}
                    >Get Started</Button>
                </Stack>
            </Slide>
            <Slide id="get-started" sx={{ color: 'white', background: 'transparent', zIndex: 10 }}>
                <Typography variant="h2" mb={4} sx={{ ...slideTitle, ...textPop } as CSSProperties}>
                    Ready to Change the World?
                </Typography>
                <PulseButton
                    variant="outlined"
                    color="secondary"
                    onClick={() => openLink(setLocation, `${APP_URL}${APP_LINKS.Start}`)}
                    startIcon={<PlayIcon fill='#0fa' />}
                    sx={{
                        marginLeft: 'auto !important',
                        marginRight: 'auto !important',
                    }}
                >Start</PulseButton>
            </Slide>
        </SlidePage>
    );
}