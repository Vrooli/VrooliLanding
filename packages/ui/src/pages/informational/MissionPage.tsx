import { APP_LINKS, BusinessFields, LANDING_LINKS, openLink } from 'utils';
import Thinking from 'assets/img/thinking.png';
import Target from 'assets/img/target.webp';
import Mission from 'assets/img/rocket.webp';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { slideImageContainer, slideText, slideTitle, translucentContainer, textPop } from 'styles';
import { useLocation } from '@shared/route';
import { Slide } from 'components';
import Particles from "react-tsparticles";
import { CSSProperties } from 'react';

export const MissionPage = () => {
    const [, setLocation] = useLocation();

    return (
        <Box id="page">
            <Slide id="the-problem" isFirst={true} sx={{ color: 'white', background: 'radial-gradient(circle, rgb(29 29 113) 12%, rgb(25 25 83) 52%, rgb(17 17 66) 80%)' }}>
                <Typography variant='h2' component="h1" pb={4} sx={{ ...slideTitle, paddingTop: { xs: 16, sm: 0 } }}>The Problem</Typography>
                <Typography variant="h5" sx={{ ...slideText }}>
                    Project Catalyst will empower the masses with governance, but this system is not perfect...
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={7} pl={0} margin="auto">
                        <Stack direction="column" spacing={2}>
                            <ul className='slideList'>
                                <li>Governance is influenced by money</li>
                                <li>Best way to make money is through entrepreneurship</li>
                                <li>Barriers to entrepreneurship are time, money, and knowledge</li>
                            </ul>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={5} sx={{ paddingLeft: '0 !important' }}>
                        <Box sx={{ ...slideImageContainer }}>
                            <img alt="Person thinking - By Vecteezy" src={Thinking} />
                        </Box>
                    </Grid>
                </Grid>
                <Stack direction="row" justifyContent="center" alignItems="center">
                    <Button size="large" color="secondary" onClick={() => openLink(setLocation, 'https://matthalloran8.medium.com/the-next-generation-of-global-collaboration-a4839766e29e#4f79')}>What's Project Catalyst</Button>
                </Stack>
            </Slide>

            <Slide id='our-mission' sx={{ background: 'radial-gradient(circle, rgba(208,213,226,1) 7%, rgba(179,191,217,1) 66%, rgba(160,188,249,1) 94%)' }}>
                <Typography variant='h2' mb={4} sx={{ ...slideTitle }}>Our Mission</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} sx={{ paddingLeft: '0 !important' }}>
                        <Box sx={{ ...slideImageContainer }}>
                            <img alt="Large target - By Vecteezy" src={Target} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} margin="auto">
                        <Typography variant="h5" sx={{ ...slideText, textAlign: 'left' }}>
                            Make entrepreneurship accessible to all by reducing the cost, labor, and knowledge
                            required to implement your ideas
                        </Typography>
                    </Grid>
                </Grid>
                <Stack direction="row" justifyContent="center" alignItems="center">
                    <Button size="large" color="secondary" onClick={() => openLink(setLocation, "https://docs.google.com/document/d/1zHYdjAyy01SSFZX0O-YnZicef7t6sr1leOFnynQQOx4/edit?usp=sharing")}>White Paper</Button>
                </Stack>
            </Slide>

            {/* Custom slide to handle constellation animation */}
            <Box
                id="welcome-to-vrooli"
                key="welcome-to-vrooli"
                sx={{
                    position: 'relative',
                    display: 'flex',
                    overflowX: 'hidden',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: { xs: 'calc(102vh - 56px)', md: '102vh' },
                    color: 'white',
                    background: 'linear-gradient(-46deg,#713a63,#601f6f,#023d87,#69d7d2) 50%/cover no-repeat fixed;',
                    backgroundSize: '400% 400%',
                }}
            >
                <Box sx={{ position: 'absolute', width: '100%', height: '100%' }} >
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
                                    speed: 0.5,
                                    straight: false,
                                },
                                number: {
                                    density: {
                                        enable: true,
                                        area: 800,
                                    },
                                    value: 120,
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
                    <Typography variant='h2' mb={4} sx={{ ...slideTitle, ...textPop } as CSSProperties}>Welcome to Vrooli</Typography>
                    <Typography variant="h3" sx={{ margin: 'auto', textAlign: 'center', fontSize: { xs: '1.7rem', sm: '2rem' } }}>
                        We're building a future-friendly, open-source platform for automating entrepreneurship
                    </Typography>
                    <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
                        <Button size="large" color="secondary" onClick={() => openLink(setLocation, LANDING_LINKS.Benefits)}>The Benefits</Button>
                        <Button size="large" color="secondary" onClick={() => openLink(setLocation, `${BusinessFields.APP_URL}${APP_LINKS.Start}`)}>Start Now</Button>
                    </Stack>
                </Stack>
            </Box>

            <Slide id='whats-the-catch' sx={{ background: 'radial-gradient(circle, rgba(208,213,226,1) 7%, rgba(179,191,217,1) 66%, rgba(160,188,249,1) 94%)' }}>
                <Typography variant='h2' mb={4} sx={{ ...slideTitle }}>What's the Catch?</Typography>
                <Typography variant="h5" mb={2} sx={{ ...slideText, textAlign: 'left' }}>
                    None! We at Vrooli believe in free software — free to use, study, and change
                </Typography>
                <Typography variant="h5" mb={2} sx={{ ...slideText, textAlign: 'left' }}>
                    Vrooli will (hopefully) be funded through Project Catalyst and donations.
                    We aim to tackle compute and maintenance costs via smart contracts that start up
                    cloud servers
                </Typography>
                <Typography variant="h5" sx={{ ...slideText, textAlign: 'left' }}>
                    We encourage users to promote and contribute to the project and its mission.
                    If we're successful, we may just save the world🌍
                </Typography>
            </Slide>

            <Slide id='roadmap' sx={{
                color: 'white',
                background: `url(${Mission}) no-repeat center center`,
                backgroundSize: 'cover',
            }}>
                <Typography variant='h2' mb={4} sx={{ ...slideTitle }}>Roadmap</Typography>
                <Stack direction="column" spacing={10}>
                    <Box sx={{ ...translucentContainer }}>
                        <Typography variant='h5' mb={1} sx={{ ...textPop }}>March 2022</Typography>
                        <ul className='roadmapList'>
                            <li>Website launch🎉</li>
                            <li>Create, run, star, and vote on routines</li>
                        </ul>
                    </Box>
                    <Box sx={{ ...translucentContainer }}>
                        <Typography variant='h5' mb={1} sx={{ ...textPop }}>Q2 2022</Typography>
                        <ul className='roadmapList'>
                            <li>Improved routine visualizer</li>
                            <li>Fork, copy, and comment on routines</li>
                            <li>Importing/exporting routines</li>
                            <li>Improved reporting system</li>
                            <li>Improved dashboards</li>
                        </ul>
                    </Box>
                    <Box sx={{ ...translucentContainer }}>
                        <Typography variant='h5' mb={1} sx={{ ...textPop }}>Q3 2022</Typography>
                        <ul className='roadmapList'>
                            <li>First formal API spec with data storage and automation</li>
                            <li>Improved routine running experience</li>
                            <li>Smart contract library</li>
                            <li>Limited smart contract functionality in routines</li>
                        </ul>
                    </Box>
                    <Box sx={{ ...translucentContainer }}>
                        <Typography variant='h5' mb={1} sx={{ ...textPop }}>Q4 2022</Typography>
                        <ul className='roadmapList'>
                            <li>Reputation system, powered by Atala PRISM (if ready)</li>
                            <li>Connect any Cardano smart contract to a routine</li>
                        </ul>
                    </Box>
                    <Box sx={{ ...translucentContainer }}>
                        <Typography variant='h5' mb={1} sx={{ ...textPop }}>2023 and Beyond</Typography>
                        <ul className='roadmapList'>
                            <li>UX improvements</li>
                            <li>Connect custom interfaces to run routines with</li>
                            <li>Community governance</li>
                            <li>Offline support</li>
                            <li>Decentralize all the things!</li>
                        </ul>
                    </Box>
                </Stack>
                <Stack direction="row" justifyContent="center" alignItems="center" pt={5} spacing={2}>
                    <Button size="large" color="secondary" onClick={() => openLink(setLocation, `${BusinessFields.APP_URL}${APP_LINKS.Start}`)}>Start Now</Button>
                    <Button size="large" color="secondary" onClick={() => openLink(setLocation, "https://docs.google.com/document/d/1zHYdjAyy01SSFZX0O-YnZicef7t6sr1leOFnynQQOx4/edit?usp=sharing")}>White Paper</Button>
                </Stack>
            </Slide>
        </Box>
    );
}