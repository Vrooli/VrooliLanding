import { Slide } from 'components/slides/Slide/Slide';
import { Box, Button, Grid, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import BlankRoutine from 'assets/img/blank-routine-1.png';
import MonkeyCoin from 'assets/img/monkey-coin-page.png';
import Community from 'assets/img/community.svg';
import { openLink } from 'utils';
import { useLocation } from '@shared/route';
import { blackRadial, slideImageContainer, slideText, slideTitle, textPop } from 'styles';
import { CSSProperties } from '@mui/styled-engine';
import { Suspense, useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/system';
import { lazily } from 'react-lazily';
import { APP_LINKS, APP_URL, LANDING_LINKS, SOCIALS, WHITE_PAPER_URL } from '@shared/consts';
import { SlideContainer, SlideContent } from 'components';
import { SlideContainerNeon } from 'components/slides/SlideContainerNeon/SlideContainerNeon';
import { ArticleIcon, DiscordIcon, GitHubIcon, TwitterIcon } from '@shared/icons';
import Earth from '../../../assets/img/Earth.svg';
import { TwinkleStars } from 'components/TwinkleStars/TwinkleStars';

const { YoutubeEmbed } = lazily(() => import('../../../components/YoutubeEmbed/YoutubeEmbed'));

// Hand wave animation
const wave = keyframes`
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(30deg);
  }
  20% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;
// Pulsing border animation
const pulse = keyframes`
    0% {
        box-shadow: 0 0 0 0 rgba(0, 255, 170, 0.7);
    }
    70% {
        box-shadow: 0 0 0 10px rgba(0, 255, 170, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(0, 255, 170, 0);
    }
`;

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

    // Calculate dimensions for youtubeembed
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const onResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
        }
    })

    // Track if earth is in view
    const [earthTransform, setEarthTransform] = useState<string>('translateY(90%) scale(0.8)');
    useEffect(() => {
        const onScroll = () => {
            const inView = (element: HTMLElement | null) => {
                if (!element) return false;
                const rect = element.getBoundingClientRect();
                const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
                console.log('rect.top', rect.top, 'rect.bottom', rect.bottom, 'windowHeight', windowHeight);
                return rect.top < windowHeight / 2;
            }
            const earthHorizonSlide = document.getElementById('earth-horizon-slide');
            const earthFullSlide = document.getElementById('earth-full-slide');
            if (inView(earthFullSlide)) {
                setEarthTransform('translateY(25%) scale(0.5)');
            } else if (inView(earthHorizonSlide)) {
                setEarthTransform('translateY(69%) scale(1)');
            } else {
                setEarthTransform('translateY(90%) scale(0.8)');
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    })

    return (
        <Box>
            <SlideContainerNeon id="an-open-source-economy" sx={{ zIndex: 3 }}>
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
                    {/* Start button */}
                    <Button variant="outlined" color="secondary" onClick={() => openLink(setLocation, `${APP_URL}${APP_LINKS.Start}`)} sx={{
                        fontSize: '1.3rem',
                        // Button border has neon green glow animation
                        animation: `${pulse} 3s infinite ease`,
                        borderColor: '#0fa',
                        color: '#0fa',
                        width: 'fit-content',
                        marginLeft: 'auto !important',
                        marginRight: 'auto !important',
                        // On hover, brighten and grow
                        '&:hover': {
                            borderColor: '#0fa',
                            color: '#0fa',
                            background: 'transparent',
                            filter: 'brightness(1.2)',
                            transform: 'scale(1.05)',
                        },
                        transition: 'all 0.2s ease',
                    }}>Get Started</Button>
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
            </SlideContainerNeon>
            <Slide hasPrevious={true} hasNext={true} id="routine-explanation" sx={{ background: blackRadial, zIndex: 3 }}>
                <Typography variant='h2' mb={4} sx={{ ...slideTitle }}>How it Works</Typography>
                <Typography variant="h5" sx={{ ...slideText }}>
                    Traditional automation tools are not composable - when you create a routine, you can't reuse it in other routines.
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} margin="auto">
                        <Stack direction="column" spacing={2}>
                            <Typography variant="h5" sx={{ ...slideText, textAlign: 'left' }}>
                                Routines transform entrepreneurship into a process that is:
                            </Typography>
                            <ul className='slideList'>
                                <li>Approachable</li>
                                <li>Transparent</li>
                                <li>Automatable</li>
                            </ul>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ paddingLeft: '0 !important' }}>
                        <Box sx={{ ...slideImageContainer }}>
                            <img alt="Non-descriptive visual work routine" src={BlankRoutine} />
                        </Box>
                    </Grid>
                </Grid>
            </Slide>
            <Slide hasPrevious={true} hasNext={true} id="auto-generated-interfaces" sx={{ background: blackRadial, zIndex: 3 }}>
                <Typography variant='h2' mb={4} sx={{ ...slideTitle }}>
                    Say Goodbye to Endless Browser Tabs
                    <RotatedBox>👋</RotatedBox>
                </Typography>
                <Typography variant="h5" sx={{ ...slideText }}>
                    Auto-generated interfaces unlock the possibility of performing entire routines without leaving Vrooli
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} sx={{ paddingLeft: '0 !important' }}>
                        <Box sx={{ ...slideImageContainer }}>
                            <img alt="Routine runner interface example - Minting tokens" src={MonkeyCoin} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} margin="auto">
                        <Stack direction="column" spacing={2}>
                            <Typography variant="h5" sx={{ ...slideText, textAlign: 'left' }}>
                                Benefits of this approach include:
                            </Typography>
                            <ul className='slideList'>
                                <li>Reduced context switching</li>
                                <li>Increased focus and organization</li>
                            </ul>
                        </Stack>
                    </Grid>
                </Grid>
            </Slide>
            <Slide hasPrevious={true} hasNext={true} id="fund-your-idea" sx={{ color: 'white', background: blackRadial, zIndex: 3 }}>
                <Typography variant="h2" sx={{ ...slideTitle }}>
                    Collaborate, or Fly Solo
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} margin="auto">
                        <ul className='slideList'>
                            <li>Step-by-step guidance to create your own business</li>
                            <li>Vote and build on project prototypes</li>
                            <li>Discover projects and organizations that need your help</li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ paddingLeft: '0 !important' }}>
                        <Box sx={{ ...slideImageContainer }}>
                            <img alt="Community illustration - by Vecteezy" src={Community} />
                        </Box>
                    </Grid>
                </Grid>
                <Stack direction="row" justifyContent="center" alignItems="center">
                    <Button size="large" color="secondary" onClick={() => openLink(setLocation, `${APP_URL}${APP_LINKS.Start}`)}>Start Now</Button>
                </Stack>
            </Slide>
            {/* Double slide */}
            <SlideContainer hasPrevious={true} hasNext={false} id="sky-is-limit" sx={{
                background: 'radial-gradient(circle, rgb(6 6 46) 12%, rgb(1 1 36) 52%, rgb(3 3 20) 80%)',
                color: 'white',
                minHeight: '200vh',
                zIndex: 1,
            }}>
                <TwinkleStars
                    amount={400}
                />
                {/* Earth at bottom of slide */}
                {/* TODO Earth should scroll up from bottom when sky is the limit slide is scrolled to,
                then scale down so you can see the whole earth when ready to change the world is scrolled to  */}
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
                        transition: 'transform 2s ease-in-out',
                        zIndex: 3,
                    }}
                />
                <Stack direction="column" sx={{ zIndex: 4 }}>
                    <SlideContent id="earth-horizon-slide" sx={{ zIndex: 4 }}>
                        <Typography variant='h2' mb={4} sx={{ ...slideTitle }}>The Sky is the Limit</Typography>
                        <Typography variant="h5" sx={{ ...slideText }}>
                            Connect routines like building blocks to create more complex routines, which can themselves
                            be used to create even more complex routines
                        </Typography>
                        <Typography variant="h5" sx={{ ...slideText }}>
                            Anyone can view, create, run, fork, save, and vote on routines. For FREE! What can we accomplish together?
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
                    </SlideContent>
                    <SlideContent id="earth-full-slide" sx={{ zIndex: 4 }}>
                        <Typography variant="h2" mb={4} sx={{ ...slideTitle, ...textPop } as CSSProperties}>
                            Ready to Change the World?
                        </Typography>
                        <Typography variant="h5" sx={{ ...slideText }}>
                            Vrooli is live! Let's change the world together!💙
                        </Typography>
                        <Suspense fallback={<div>Loading...</div>}>
                            <YoutubeEmbed embedId="Avyeo1f38Aw" width={Math.min(width, 500)} height={Math.min(width, 500) / 1.78} />
                        </Suspense>
                        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
                            <Button size="large" color="secondary" onClick={() => openLink(setLocation, `${APP_URL}${APP_LINKS.Start}`)}>Enter Vrooli</Button>
                            <Button size="large" color="secondary" onClick={() => openLink(setLocation, LANDING_LINKS.Roadmap)}>Roadmap</Button>
                        </Stack>
                    </SlideContent>
                </Stack>
            </SlideContainer>
        </Box>
    );
}