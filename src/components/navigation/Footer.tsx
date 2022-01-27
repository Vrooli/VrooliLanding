import { APP_LINKS, APP_URL, LANDING_LINKS } from 'utils/consts';
import { makeStyles } from '@mui/styles';
import { SvgIconTypeMap } from '@mui/material';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Grid, Tooltip, Theme } from '@mui/material';
import {
    Email as EmailIcon,
    GitHub as GitHubIcon,
    Twitter as TwitterIcon,
} from '@mui/icons-material';
import { CopyrightBreadcrumbs } from 'components';
import { useLocation } from 'wouter';
import { EMAIL, SOCIALS } from 'utils/consts';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { openLink } from 'utils';

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

    const contactLinks: Array<[string, string, string, string, OverridableComponent<SvgIconTypeMap<{}, "svg">>]> = [
        ['contact-twitter', 'Find us on Twitter', SOCIALS.Twitter, 'Twitter', TwitterIcon],
        ['contact-email', 'Have a question or feedback? Email us!', EMAIL.Link, 'Email Us', EmailIcon],
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
                        <ListItemButton component="a" onClick={() => openLink(setLocation, LANDING_LINKS.About)} >
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
                                        <Icon className={classes.icon} ></Icon>
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
