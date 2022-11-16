import { openLink } from 'utils';
import Thinking from 'assets/img/thinking.png';
import Target from 'assets/img/target.webp';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { slideImageContainer, slideText, slideTitle, textPop } from 'styles';
import { useLocation } from '@shared/route';
import { GlossyContainer, PulseButton, Slide, SlideContainer, SlideContent } from 'components';
import { APP_LINKS, APP_URL, WHITE_PAPER_URL } from '@shared/consts';
import { useEffect, useMemo } from 'react';
import { SlideContainerNeon } from 'components/slides/SlideContainerNeon/SlideContainerNeon';
import { ArticleIcon, PlayIcon } from '@shared/icons';

export const FeaturesPage = () => {
    const [, setLocation] = useLocation();

    // Intersection observer for fade in of roadmap sections
    const observer = useMemo(() => new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        })
    }), []);
    useEffect(() => {
        const roadmapSections = document.querySelectorAll('.hidden');
        roadmapSections.forEach(section => {
            observer.observe(section);
        }
        )
    }, [observer])

    return (
        <SlideContainerNeon
            id="features-background"
            sx={{
                zIndex: 3,
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
            }}
        >
            <Box sx={{
                height: '100vh',
                scrollSnapType: 'y proximity',
                overflowY: 'scroll',
                scrollBehavior: 'smooth',
            }}>
                <Slide id="the-problem" sx={{ color: 'white', background: 'transparent', zIndex: 3, position: 'sticky' }}>
                    <Typography variant='h2' component="h1" pb={4} sx={{ ...slideTitle, paddingTop: { xs: 16, sm: 0 } }}>Available Now</Typography>
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
                <Slide id='our-mission' sx={{ background: 'transparent', zIndex: 3, position: 'sticky' }}>
                    <Typography variant='h2' mb={4} sx={{ ...slideTitle }}>Coming Soon</Typography>
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
                        <Button size="large" color="secondary" onClick={() => openLink(setLocation, WHITE_PAPER_URL)}>White Paper</Button>
                    </Stack>
                </Slide>
                <SlideContainer id='roadmap' sx={{ background: 'transparent', zIndex: 3, position: 'sticky', scrollSnapAlign: 'none' }}>
                    <SlideContent sx={{
                        zIndex: 4,
                        transform: 'translateZ(0) scale(1)',
                    }}>
                        <Typography variant='h2' mb={4} sx={{ ...slideTitle, fontFamily: 'Neuropol' }}>Roadmap 🚀</Typography>
                        <Stack id="roadmap-stack" direction="column" spacing={10}>
                            <GlossyContainer className="hidden" sx={{ opacity: 0 }}>
                                <Typography variant='h4' mb={1} sx={{ ...textPop }}>March 2022</Typography>
                                <ul className='roadmapList'>
                                    <li>Website launch🎉</li>
                                    <li>Create, run, star, and vote on routines</li>
                                </ul>
                            </GlossyContainer>
                            <GlossyContainer className="hidden" sx={{ opacity: 0 }}>
                                <Typography variant='h4' mb={1} sx={{ ...textPop }}>Q2 2022</Typography>
                                <ul className='roadmapList'>
                                    <li>Improved routine visualizer</li>
                                    <li>Fork, copy, and comment on routines</li>
                                    <li>Importing/exporting routines</li>
                                    <li>Improved reporting system</li>
                                    <li>Improved dashboards</li>
                                </ul>
                            </GlossyContainer>
                            <GlossyContainer className="hidden" sx={{ opacity: 0 }}>
                                <Typography variant='h4' mb={1} sx={{ ...textPop }}>Q3 2022</Typography>
                                <ul className='roadmapList'>
                                    <li>First formal API spec with data storage and automation</li>
                                    <li>Improved routine running experience</li>
                                    <li>Smart contract library</li>
                                    <li>Limited smart contract functionality in routines</li>
                                </ul>
                            </GlossyContainer>
                            <GlossyContainer className="hidden" sx={{ opacity: 0 }}>
                                <Typography variant='h4' mb={1} sx={{ ...textPop }}>Q4 2022</Typography>
                                <ul className='roadmapList'>
                                    <li>Reputation system, powered by Atala PRISM (if ready)</li>
                                    <li>Connect any Cardano smart contract to a routine</li>
                                </ul>
                            </GlossyContainer>
                            <GlossyContainer className="hidden" sx={{ opacity: 0 }}>
                                <Typography variant='h4' mb={1} sx={{ ...textPop }}>2023 and Beyond</Typography>
                                <ul className='roadmapList'>
                                    <li>UX improvements</li>
                                    <li>Connect custom interfaces to run routines with</li>
                                    <li>Community governance</li>
                                    <li>Offline support</li>
                                    <li>Decentralize all the things!</li>
                                </ul>
                            </GlossyContainer>
                        </Stack>
                        <Stack direction="row" justifyContent="center" alignItems="center" pt={5} pb={10} spacing={2}>
                            <PulseButton
                                variant="outlined"
                                color="secondary"
                                onClick={() => openLink(setLocation, `${APP_URL}${APP_LINKS.Start}`)}
                                startIcon={<PlayIcon fill='#0fa' />}
                            >Start</PulseButton>
                            <PulseButton
                                variant="outlined"
                                color="secondary"
                                onClick={() => openLink(setLocation, WHITE_PAPER_URL)}
                                startIcon={<ArticleIcon fill='#0fa' />}
                            >White Paper</PulseButton>
                        </Stack>
                    </SlideContent>
                </SlideContainer>
            </Box>
        </SlideContainerNeon>
    );
}