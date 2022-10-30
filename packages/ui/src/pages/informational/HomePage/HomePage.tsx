import { Slide } from 'components/Slide/Slide';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import Relax from 'assets/img/relax.webp';
import BlankRoutine from 'assets/img/blank-routine-1.png';
import MonkeyCoin from 'assets/img/monkey-coin-page.png';
import Community from 'assets/img/community.svg';
import Blockchain from 'assets/img/blockchain.webp';
import World from 'assets/img/world.png';
import { openLink } from 'utils';
import { useLocation } from '@shared/route';
import { slideImageContainer, slideText, slideTitle, textPop } from 'styles';
import { CSSProperties } from '@mui/styled-engine';
import { Suspense, useEffect, useState } from 'react';
import StarfieldAnimation from 'react-starfield-animation';
import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/system';
import { lazily } from 'react-lazily';
import { APP_LINKS, APP_URL, LANDING_LINKS } from '@shared/consts';
import { SlideContainer, SlideContent } from 'components';
import Neuropol from '../../../assets/font/Neuropol.woff';

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
const blueRadial = 'radial-gradient(circle, rgba(14,10,93,1) 0%, rgba(16,13,73,1) 55%, rgba(2,0,36,1) 100%)'
const blackRadial = 'radial-gradient(circle, rgb(6 6 46) 12%, rgb(1 1 36) 52%, rgb(3 3 20) 80%)'
const greenNeonText = {
    color: '#fff',
    textShadow: '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #0fa, 0 0 42px #0fa, 0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa',
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

    return (
        <Box>
            <SlideContainer id="an-open-source-economy" sx={{
                background: blackRadial,
                color: 'white',
                // Set custom font
                fontFamily: 'Neuropol',
                // '@font-face': {
                //     fontFamily: 'Neuropol',
                //     src: `local('Neuropol'), url(${Neuropol}) format('truetype')`,
                //     fontDisplay: 'swap',
                // },
                // fontFamily: `local('Neuropol'), url(${Neuropol}) format('truetype')`,
            }}>
                <SlideContent>
                    <Typography component="h1" sx={{ ...slideTitle, ...greenNeonText, fontWeight: 'bold' }}>
                        An Open-Source Economy
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} margin="auto">
                            <Typography component="h2" variant="h5" sx={{ ...slideText }}>
                                We're building the tools to prototype and automate the future of work
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{ paddingLeft: '0 !important' }}>
                            <Box sx={{ ...slideImageContainer }}>
                                <img alt="Man relaxing at beach - by Vecteezy" src={Relax} />
                            </Box>
                        </Grid>
                    </Grid>
                    <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
                        <Button size="large" variant="outlined" color="secondary" onClick={() => openLink(setLocation, `${APP_URL}${APP_LINKS.Start}`)} sx={{
                            // Button border has neon green glow animation
                            animation: `${pulse} 3s infinite ease`,
                            borderColor: '#0fa',
                            color: '#0fa',
                        }}>Get Started</Button>
                    </Stack>
                </SlideContent>
            </SlideContainer>
            <Slide id="routine-explanation" sx={{ background: blueRadial }}>
                <Typography variant='h2' mb={4} sx={{ ...slideTitle }}>How it Works</Typography>
                <Typography variant="h5" sx={{ ...slideText }}>
                    A visual work routine is an intuitive process for completing a specific task —
                    similar to a flowchart
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
            <SlideContainer id="sky-is-limit" sx={{
                background: 'radial-gradient(circle, rgb(6 6 46) 12%, rgb(1 1 36) 52%, rgb(3 3 20) 80%)',
                color: 'white',
                '@font-face': {
                    fontFamily: 'Neuropol',
                    src: `local('Neuropol'), url(${Neuropol}) format('truetype')`,
                    fontDisplay: 'swap',
                },
                // fontFamily: `local('Neuropol'), url(${Neuropol}) format('truetype')`,
            }}>
                <StarfieldAnimation
                    numParticles={1000}
                    lineWidth={2}
                    depth={1000}
                    style={{ position: 'absolute', width: '100%', height: '100%' }}
                />
                <SlideContent>
                    <Typography variant='h2' mb={4} sx={{ ...slideTitle }}>The Sky is the Limit</Typography>
                    <Typography variant="h5" sx={{ ...slideText }}>
                        Connect routines like building blocks to create more complex routines, which can themselves
                        be used to create even more complex routines
                    </Typography>
                    <Typography variant="h5" sx={{ ...slideText }}>
                        Anyone can view, create, run, fork, save, and vote on routines. For FREE! What can we accomplish together?
                    </Typography>
                    <Stack direction="row" justifyContent="center" alignItems="center" pt={4} spacing={2}>
                        <Button size="large" color="secondary" onClick={() => openLink(setLocation, `${APP_URL}${APP_LINKS.Start}`)}>Get Started</Button>
                    </Stack>
                </SlideContent>
            </SlideContainer>
            <Slide id="auto-generated-interfaces" sx={{ background: blueRadial }}>
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

            <Slide id="fund-your-idea" sx={{ color: 'white', background: blackRadial }}>
                <Typography variant="h2" sx={{ ...slideTitle }}>
                    Build with the community
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

            <Slide id="blockchain" sx={{ background: blueRadial }}>
                <Typography variant="h2" sx={{ ...slideTitle }}>
                    Not Just for Prototypes...
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={5} sx={{ paddingLeft: '0 !important' }}>
                        <Box sx={{ ...slideImageContainer }}>
                            <img alt="Blockchain illustration - by Vecteezy" src={Blockchain} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={7} margin="auto">
                        <Stack direction="column" spacing={2}>
                            <Typography variant="h5" sx={{ ...slideText }}>
                                Routines will be able to trigger smart contracts, bringing the power of the
                                Cardano blockchain to your fingertips. Coming later this year
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Slide>

            <Slide id="join-the-movement" sx={{
                color: 'white',
                background: `url(${World}) no-repeat center center`,
                backgroundSize: 'cover',
            }}>
                <Typography variant="h2" mb={4} sx={{ ...slideTitle, ...textPop } as CSSProperties}>
                    Join the Movement
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
            </Slide>
        </Box>
    );
}