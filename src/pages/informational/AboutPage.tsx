import MattSketch from 'assets/img/thought-sketch-edited-3.png';
import { Slide } from 'components';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { openLink } from 'utils';
import { useLocation } from 'wouter';

export const AboutPage = () => {
    const [, setLocation] = useLocation();
    return (
        <Box id="page">
            <Slide id="about-the-team" sx={{background: "fixed radial-gradient(circle, rgba(208,213,226,1) 7%, rgba(179,191,217,1) 66%, rgba(160,188,249,1) 94%)"}}>
                <Stack direction="column" spacing={2} textAlign="center">
                    <Typography variant='h2' component="h1" textAlign="center" pb={4}>About the Team</Typography>
                    <Typography variant="h4" margin='auto' textAlign="left">
                        Leader/Developer - Matt Halloran
                    </Typography>
                    <Typography variant="h5" margin='auto' textAlign="justify">
                        Matt is a 24-year-old with a life-long passion for contemplating the future.
                        He is very detail-oriented, and spends a considerable (arguably too much) amount of time examining our best
                        chances for surviving the Great Filter. These thoughts led him to start Vrooli, in hopes that
                        the platform will significantly accelerate humanity's rate of progress - empowering us to solve our most pressing 
                        problems before it is too late.
                    </Typography>
                    <Grid container spacing={2} pb={2}>
                        <Grid item xs={12} sm={6}>
                            <ul className='slideList'>
                                <li>Bachelors in Computer Science, 3.85 GPA</li>
                                <li>Plutus Pioneers 1st Cohort graduate</li>
                                <li>💻 Developer 🤔 Philosopher 💭 Dreamer</li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box sx={{ justifyContent: 'center', height: '100%', display: 'flex' }}>
                                <img
                                    alt="Illustrated drawing of the founder of Vrooli - Matt Halloran"
                                    src={MattSketch}
                                    style={{
                                        maxWidth: '90%',
                                        maxHeight: '100%',
                                        objectFit: 'contain',
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                    <Stack direction="row" spacing={2} pb={4} justifyContent="center" alignItems="center">
                        <Button size="large" color="secondary" onClick={() => openLink(setLocation, 'https://github.com/MattHalloran')}>Other Projects</Button>
                        <Button size="large" color="secondary" onClick={() => openLink(setLocation, 'https://matthalloran.info')}>Contact/Support</Button>
                    </Stack>
                    <Typography variant="h4" margin='auto' textAlign="left">
                        Other Team Members - Possibly YOU!
                    </Typography>
                    <Typography variant="h5" margin='auto' textAlign="justify">
                        Vrooli has a bright future ahead, but we need all hands on deck! If you are interested 
                        in contributing in any way, don't hesitate to reach out to us!
                    </Typography>
                </Stack>
            </Slide>
        </Box>
    );
}