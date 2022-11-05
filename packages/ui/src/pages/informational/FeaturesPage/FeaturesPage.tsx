import { openLink } from 'utils';
import Thinking from 'assets/img/thinking.png';
import Target from 'assets/img/target.webp';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { slideImageContainer, slideText, slideTitle, translucentContainer, textPop, blackRadial, blueRadial } from 'styles';
import { useLocation } from '@shared/route';
import { Slide, SlideContainer, SlideContent, TwinkleStars } from 'components';
import { APP_LINKS, APP_URL, WHITE_PAPER_URL } from '@shared/consts';

export const FeaturesPage = () => {
    const [, setLocation] = useLocation();

    return (
        <Box id="page">
            <Slide hasPrevious={false} hasNext={true} id="the-problem" sx={{ color: 'white', background: blackRadial }}>
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
            <Slide hasPrevious={true} hasNext={true} id='our-mission' sx={{ background: blueRadial }}>
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
            <SlideContainer hasPrevious={true} hasNext={false} id='roadmap' sx={{ background: blackRadial }}>
                <TwinkleStars
                    amount={400}
                />
                <SlideContent>
                    <Typography variant='h2' mb={4} sx={{ ...slideTitle, fontFamily: 'Neuropol' }}>Roadmap</Typography>
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
                        <Button size="large" color="secondary" onClick={() => openLink(setLocation, `${APP_URL}${APP_LINKS.Start}`)}>Start Now</Button>
                        <Button size="large" color="secondary" onClick={() => openLink(setLocation, WHITE_PAPER_URL)}>White Paper</Button>
                    </Stack>
                </SlideContent>
            </SlideContainer>
        </Box>
    );
}