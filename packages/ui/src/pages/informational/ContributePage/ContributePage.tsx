import { openLink } from 'utils';
import Thinking from 'assets/img/thinking.png';
import Target from 'assets/img/target.webp';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { blackRadial, blueRadial, slideImageContainer, slideText, slideTitle } from 'styles';
import { useLocation } from '@shared/route';
import { Slide, SlidePage } from 'components';
import { APP_LINKS, APP_URL, WHITE_PAPER_URL } from '@shared/consts';

export const ContributePage = () => {
    const [, setLocation] = useLocation();

    return (
        <SlidePage id="page">
            <Slide id="the-problem" sx={{ color: 'white', background: blackRadial }}>
                <Typography variant='h2' component="h1" pb={4} sx={{ ...slideTitle, paddingTop: { xs: 16, sm: 0 } }}>Use your skills and knowledge to help solve the world's most pressing problems.</Typography>
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
            <Slide id='our-mission' sx={{ background: blueRadial }}>
                <Typography variant='h2' mb={4} sx={{ ...slideTitle }}>Design Your Ideal Work Schedule</Typography>
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
            <Slide id='whats-the-catch' sx={{ background: blackRadial }}>
                <Typography variant='h2' mb={4} sx={{ ...slideTitle }}>Improve Existing Routines</Typography>
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
            <Slide id='whats-the-catch' sx={{ background: blueRadial }}>
                <Typography variant='h2' mb={4} sx={{ ...slideTitle }}>Turn Prototypes Into Reality</Typography>
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
            <Slide id='whats-the-catch' sx={{ background: blackRadial }}>
                <Typography variant='h2' mb={4} sx={{ ...slideTitle }}>Join the Movement</Typography>
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
        </SlidePage>
    );
}