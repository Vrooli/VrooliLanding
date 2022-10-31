import MattSketch from 'assets/img/thought-sketch-edited-3.png';
import { Slide } from 'components';
import { Box, Button, Grid, Stack, Tooltip, Typography } from '@mui/material';
import { openLink } from 'utils';
import { useLocation } from '@shared/route';
import { slideImageContainer, slideText, slideTitle } from 'styles';
import { SOCIALS } from '@shared/consts';

export const AboutUsPage = () => {
    const [, setLocation] = useLocation();
    return (
        <Box id="page">
            <Slide hasPrevious={false} hasNext={false} id="about-the-team" sx={{ background: "fixed radial-gradient(circle, rgba(208,213,226,1) 7%, rgba(179,191,217,1) 66%, rgba(160,188,249,1) 94%)" }}>
                <Typography variant='h2' component="h1" pb={4} sx={{...slideTitle}}>About the Team</Typography>
                <Typography variant="h4" margin='auto' textAlign="left" sx={{
                    fontSize: { xs: '1.5rem', sm: '1.75rem' },
                    color: "#247406",
                    fontWeight: "600"
                }}>
                    Leader/Developer - Matt Halloran
                </Typography>
                <Typography variant="h5" sx={{...slideText}}>
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
                    <Grid item xs={12} sm={6} sx={{paddingLeft: '0 !important'}}>
                        <Box sx={{ ...slideImageContainer }}>
                            <img alt="Illustrated drawing of the founder of Vrooli - Matt Halloran" src={MattSketch} />
                        </Box>
                    </Grid>
                </Grid>
                <Stack direction="row" spacing={2} pb={4} justifyContent="center" alignItems="center">
                    <Tooltip title="See Matt's other projects" placement="bottom">
                        <Button size="large" color="secondary" onClick={() => openLink(setLocation, 'https://github.com/MattHalloran')} sx={{ height: '100%' }}>Other Projects</Button>
                    </Tooltip>
                    <Tooltip title="Contact Matt" placement="bottom">
                        <Button size="large" color="secondary" onClick={() => openLink(setLocation, 'https://matthalloran.info')} sx={{ height: '100%' }}>Contact / Support</Button>
                    </Tooltip>
                </Stack>
                <Typography variant="h4" margin='auto' textAlign="left" sx={{
                    fontSize: { xs: '1.5rem', sm: '1.75rem' },
                    color: "#247406",
                    fontWeight: "600"
                }}>
                    Other Team Members - Possibly YOU!
                </Typography>
                <Typography variant="h5" sx={{...slideText}}>
                    Vrooli has a bright future ahead, but we need all hands on deck! If you are interested
                    in contributing in any way, don't hesitate to reach out to us!
                </Typography>
                <Stack direction="row" justifyContent="center" alignItems="center">
                    <Tooltip title="Become part of our Discord community" placement="bottom">
                        <Button size="large" color="secondary" onClick={() => openLink(setLocation, SOCIALS.Discord)}>Join Us</Button>
                    </Tooltip>
                </Stack>
            </Slide>
        </Box>
    );
}