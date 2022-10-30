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
const RotatedBox = styled("div")({
    display: 'inline-block',
    width: 60,
    height: 60,
    animation: `${wave} 3s infinite ease`
});

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
        <Box sx={{ paddingTop: '10vh' }}>

            <Slide id="get-things-done-easy" isFirst={true} sx={{ color: 'white', background: 'radial-gradient(circle, rgb(29 29 113) 12%, rgb(25 25 83) 52%, rgb(17 17 66) 80%)' }}>
                {/* Wave backgrounds. Made with https://web.archive.org/web/20180810082435/https://smooth.ie/blogs/news/svg-wavey-transitions-between-sections */}
                <Box sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '250px',
                    overflow: 'hidden'
                }} >
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                        <path d="M-15.52,43.92 C213.60,165.30 416.76,-60.67 555.58,45.89 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#12326a' }}>
                        </path>
                    </svg>
                </Box>
                <Box sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '250px',
                    overflow: 'hidden'
                }} >
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                        <path d="M-51.38,119.23 C235.78,95.55 270.03,-9.05 514.94,99.50 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#1b4184' }}>
                        </path>
                    </svg>
                </Box>
                <Box sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '250px',
                    overflow: 'hidden'
                }} >
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                        <path d="M-51.38,119.23 C260.57,138.97 362.61,2.80 530.98,79.75 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#375fa4' }}>
                        </path>
                    </svg>
                </Box>
                <Typography component="h1" sx={{ ...slideTitle }}>
                    Become an Entrepreneur — Without the Hassle!
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} margin="auto">
                        <Typography component="h2" variant="h5" sx={{ ...slideText }}>
                            Accomplish your goals in a few clicks, through the power of visual work routines
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ paddingLeft: '0 !important' }}>
                        <Box sx={{ ...slideImageContainer }}>
                            <img alt="Man relaxing at beach - by Vecteezy" src={Relax} />
                        </Box>
                    </Grid>
                </Grid>
                <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
                    <Button size="large" color="secondary" onClick={() => openLink(setLocation, `${APP_URL}${APP_LINKS.Start}`)}>Get Started</Button>
                </Stack>
            </Slide>

            <Slide id="routine-explanation" sx={{ background: 'radial-gradient(circle, rgba(208,213,226,1) 7%, rgba(179,191,217,1) 66%, rgba(160,188,249,1) 94%)' }}>
                <Typography variant='h2' mb={4} sx={{ ...slideTitle }}>A <Box fontStyle="italic" display="inline">What</Box> Routine?</Typography>
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



            {/* Custom slide to handle star animation */}
            <Box
                id="building-blocks"
                key="building-blocks"
                sx={{
                    position: 'relative',
                    display: 'flex',
                    overflowX: 'hidden',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: { xs: 'calc(102vh - 56px)', md: '102vh' },
                    color: 'white',
                    background: 'radial-gradient(circle, rgb(13 13 79) 12%, rgb(13 13 69) 52%, rgb(11 11 57) 80%)'
                }}
            >
                <StarfieldAnimation style={{ position: 'absolute', width: '100%', height: '100%' }} />
                <Stack
                    direction="column"
                    spacing={2}
                    p={4}
                    textAlign="center"
                    zIndex={1}
                    sx={{
                        maxWidth: { xs: '100vw', sm: '90vw', md: 'min(80vw, 1000px)' },
                    }}
                >
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
                </Stack>
            </Box>

            <Slide id="auto-generated-interfaces" sx={{ background: 'radial-gradient(circle, rgba(208,213,226,1) 7%, rgba(179,191,217,1) 66%, rgba(160,188,249,1) 94%)' }}>
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

            <Slide id="fund-your-idea" sx={{ color: 'white', background: 'radial-gradient(circle, rgb(29 29 113) 12%, rgb(25 25 83) 52%, rgb(17 17 66) 80%)' }}>
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

            <Slide id="blockchain" sx={{ background: 'radial-gradient(circle, rgba(208,213,226,1) 7%, rgba(179,191,217,1) 66%, rgba(160,188,249,1) 94%)' }}>
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