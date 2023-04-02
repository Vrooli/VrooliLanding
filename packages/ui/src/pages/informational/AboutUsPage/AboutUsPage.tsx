import MattSketch from 'assets/img/sketch-matt.png';
import { GlossyContainer, Slide } from 'components';
import { Box, Button, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import { openLink } from 'utils';
import { useLocation } from '@shared/route';
import { slideTitle, textPop } from 'styles';
import { LANDING_LINKS } from '@shared/consts';
import { useEffect, useMemo } from 'react';
import { GitHubIcon, HomeIcon, TwitterIcon } from '@shared/icons';

// TODO add everything from footer, since it was removed
// const contactLinks: [string, string, string, string, SvgComponent][] = [
//     ['contact-twitter', 'Find us on Twitter', SOCIALS.Twitter, 'Twitter', TwitterIcon],
//     ['contact-discord', 'Have a question or feedback? Post it on our Discord!', SOCIALS.Discord, 'Join our Discord', DiscordIcon],
//     ['contact-github', 'Check out the source code, or contribute :)', SOCIALS.GitHub, 'Source Code', GitHubIcon],
// ]

// const aboutUsLink = LANDING_LINKS.AboutUs
// const viewStatsLink = `${APP_URL}${APP_LINKS.Stats}`

// export const Footer = () => {
//     const { palette } = useTheme();
//     const [, setLocation] = useLocation();


//     return (
//         <Box
//             display='block'
//             overflow="hidden"
//             position="relative"
//             // safe-area-inset-bottom is the iOS navigation bar
//             paddingBottom='calc(64px + env(safe-area-inset-bottom))'
//             sx={{
//                 backgroundColor: palette.primary.dark,
//                 color: palette.primary.contrastText,
//                 zIndex: 10,
//             }}
//         >
//             <Grid container justifyContent='center' spacing={1}>
//                 <Grid item xs={12} sm={6}>
//                     <List component="nav">
//                         <ListItem component="h3" >
//                             <ListItemText primary="Resources" sx={{ textTransform: 'uppercase' }} />
//                         </ListItem>
//                         <ListItem
//                             component="a"
//                             href={aboutUsLink}
//                             onClick={(e) => { e.preventDefault(); openLink(setLocation, aboutUsLink) }}
//                             sx={{ padding: 2 }}
//                         >
//                             <ListItemIcon>
//                                 <InfoIcon fill={palette.primary.contrastText} />
//                             </ListItemIcon>
//                             <ListItemText primary="About Us" sx={{ color: palette.primary.contrastText }} />
//                         </ListItem>
//                         <ListItem
//                             component="a"
//                             href={viewStatsLink}
//                             onClick={(e) => { e.preventDefault(); openLink(setLocation, viewStatsLink) }}
//                             sx={{ padding: 2 }}
//                         >
//                             <ListItemIcon>
//                                 <StatsIcon fill={palette.primary.contrastText} />
//                             </ListItemIcon>
//                             <ListItemText primary="View Stats" sx={{ color: palette.primary.contrastText }} />
//                         </ListItem>
//                     </List>
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                     <List component="nav">
//                         <ListItem component="h3" >
//                             <ListItemText primary="Contact" sx={{ textTransform: 'uppercase' }} />
//                         </ListItem>
//                         {contactLinks.map(([label, tooltip, src, text, Icon], key) => (
//                             <Tooltip key={key} title={tooltip} placement="left">
//                                 <ListItem
//                                     aria-label={label}
//                                     component="a"
//                                     href={src}
//                                     onClick={(e) => { e.preventDefault(); openLink(setLocation, src) }}
//                                     sx={{ padding: 2 }}
//                                 >
//                                     <ListItemIcon>
//                                         <Icon fill={palette.primary.contrastText} />
//                                     </ListItemIcon>
//                                     <ListItemText primary={text} sx={{ color: palette.primary.contrastText }} />
//                                 </ListItem>
//                             </Tooltip>
//                         ))}
//                     </List>
//                 </Grid>
//             </Grid>
//             <CopyrightBreadcrumbs sx={{ color: palette.primary.contrastText }} />
//         </Box>
//     );
// }

type MemberData = {
    fullName: string;
    role: string;
    photo: string;
    socials: {
        website?: string;
        twitter?: string;
        github?: string;
    }
}

const memberButtonProps = {
    background: 'transparent',
    border: '0',
    '&:hover': {
        background: 'transparent',
        filter: 'brightness(1.2)',
        transform: 'scale(1.2)',
    },
    transition: 'all 0.2s ease',
}

const teamMembers: MemberData[] = [
    {
        fullName: 'Matt Halloran',
        role: 'Leader/developer',
        photo: MattSketch,
        socials: {
            website: 'https://matthalloran.info',
            twitter: 'https://twitter.com/mdhalloran',
            github: 'https://github.com/MattHalloran',
        }
    },
]

export const AboutUsPage = () => {
    const [, setLocation] = useLocation();

    // Intersection observer for fade in of member cards
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
        <Box id="page">
            <Slide id="about-the-team" sx={{
                background: 'radial-gradient(circle, rgb(6 6 46) 12%, rgb(1 1 36) 52%, rgb(3 3 20) 80%)',
                paddingTop: '10vh',
            }}>
                <Typography variant='h2' component="h1" pb={4} sx={{ ...slideTitle }}>The Team</Typography>
                {/* Vertical stack of cards, one for each member */}
                <Stack id="members-stack" direction="column" spacing={10}>
                    {teamMembers.map((member, key) => (
                        <GlossyContainer className="hidden" sx={{
                            opacity: 0,
                            height: '300px',
                        }}>
                            {/* Image, positioned to left */}
                            <Box component="img" src={member.photo} alt={`${member.fullName} sketch`} sx={{
                                maxWidth: 'min(300px, 50%)',
                                maxHeight: '100%',
                                objectFit: 'contain',
                                position: 'absolute',
                                left: '0',
                                top: '0',
                                bottom: '0',
                                margin: 'auto',
                                filter: 'brightness(3)',
                            }} />
                            {/* Name, role, and links */}
                            <Box sx={{
                                position: 'absolute',
                                right: '0',
                                top: '0',
                                bottom: '0',
                                margin: 'auto',
                                width: 'min(300px, 50%)',
                                height: 'fit-content',
                            }}>
                                <Typography variant='h4' mb={1} sx={{ ...textPop }}>{member.fullName}</Typography>
                                <Typography variant='h6' mb={2} sx={{ ...textPop }}>{member.role}</Typography>
                                <Stack direction="row" alignItems="center" justifyContent="center">
                                    {member.socials.website && (
                                        <Tooltip title="Personal website" placement="bottom">
                                            <IconButton onClick={() => openLink(setLocation, member.socials.website as string)} sx={memberButtonProps}>
                                                <HomeIcon fill='#0fa' width="50px" height="50px" />
                                            </IconButton>
                                        </Tooltip>
                                    )}
                                    {member.socials.twitter && (
                                        <Tooltip title="Twitter" placement="bottom">
                                            <IconButton onClick={() => openLink(setLocation, member.socials.twitter as string)} sx={memberButtonProps}>
                                                <TwitterIcon fill='#0fa' width="42px" height="42px" />
                                            </IconButton>
                                        </Tooltip>
                                    )}
                                    {member.socials.github && (
                                        <Tooltip title="GitHub" placement="bottom">
                                            <IconButton onClick={() => openLink(setLocation, member.socials.github as string)} sx={memberButtonProps}>
                                                <GitHubIcon fill='#0fa' width="42px" height="42px" />
                                            </IconButton>
                                        </Tooltip>
                                    )}
                                </Stack>
                            </Box>
                        </GlossyContainer>
                    ))}
                    <Stack direction="row" justifyContent="center" alignItems="center" pt={4} spacing={2}>
                        <Button
                            size="large"
                            color="secondary"
                            href={LANDING_LINKS.Contribute}
                            onClick={(e) => {
                                e.preventDefault();
                                openLink(setLocation, LANDING_LINKS.Contribute);
                            }}
                        >Join the Team</Button>
                    </Stack>
                </Stack>
                {/* <Box sx={{ ...slideImageContainer }}>
                    <img alt="Illustrated drawing of the founder of Vrooli - Matt Halloran" src={MattSketch} />
                </Box> */}
            </Slide>
        </Box>
    );
}