import { makeStyles } from '@mui/styles';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Grid, Tooltip, Theme } from '@mui/material';
import { DiscordIcon, GitHubIcon, TwitterIcon } from 'assets/img';
import { CopyrightBreadcrumbs } from 'components';
import { useLocation } from '@shared/route';
import { openLink } from 'utils';
import { APP_LINKS, APP_URL, LANDING_LINKS, SOCIALS } from '@shared/consts';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        overflow: 'hidden',
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText,
        position: 'relative',
        paddingBottom: '7vh',
    },
    upper: {
        textTransform: 'uppercase',
    },
    imageContainer: {
        maxWidth: '33vw',
        padding: 10,
    },
    image: {
        maxWidth: '100%',
        maxHeight: 200,
        background: theme.palette.primary.contrastText,
    },
    icon: {
        fill: theme.palette.primary.contrastText,
    },
    copyright: {
        color: theme.palette.primary.contrastText,
    },
}));

export const Footer = () => {
    const classes = useStyles();
    const [, setLocation] = useLocation();

    const contactLinks: Array<[string, string, string, string, any]> = [
        ['contact-twitter', 'Find us on Twitter', SOCIALS.Twitter, 'Twitter', TwitterIcon],
        ['contact-email', 'Have a question or feedback? Post it to our Discord!', SOCIALS.Discord, 'Join our Discord', DiscordIcon],
        ['contact-github', 'Check out the source code, or contribute :)', SOCIALS.GitHub, 'Source Code', GitHubIcon],
    ]

    return (
        <Box className={classes.root}>
            <Grid container justifyContent='center' spacing={1}>
                <Grid item xs={12} sm={6}>
                    <List component="nav" sx={{ display: 'grid', justifyContent: 'center' }}>
                        <ListItem component="h2" >
                            <ListItemText className={classes.upper} primary="Resources" />
                        </ListItem>
                        <ListItemButton component="a" onClick={() => openLink(setLocation, LANDING_LINKS.AboutUs)} >
                            <ListItemText primary="About Us" />
                        </ListItemButton>
                        <ListItemButton component="a" onClick={() => openLink(setLocation, `${APP_URL}${APP_LINKS.Stats}`)} >
                            <ListItemText primary="View Stats" />
                        </ListItemButton>
                    </List>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <List component="nav" sx={{ display: 'grid', justifyContent: 'center' }}>
                        <ListItem component="h2" >
                            <ListItemText className={classes.upper} primary="Contact" />
                        </ListItem>
                        {contactLinks.map(([label, tooltip, src, text, Icon], key) => (
                            <Tooltip key={key} title={tooltip} placement="left">
                                <ListItemButton aria-label={label} onClick={() => window.open(src, '_blank', 'noopener,noreferrer')}>
                                    <ListItemIcon>
                                        <Icon fill="white" />
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </Tooltip>
                        ))}
                    </List>
                </Grid>
            </Grid>
            <CopyrightBreadcrumbs sx={{color: (t) => t.palette.primary.contrastText}} />
        </Box>
    );
}
