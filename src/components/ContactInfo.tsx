import { BusinessFields } from 'utils/consts';
import {  
    BottomNavigation, 
    BottomNavigationAction, 
    IconButton, 
    Theme, 
    Tooltip 
} from '@mui/material';
import { DiscordIcon, GitHubIcon, TwitterIcon } from 'assets/img';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
    tableHead: {
        background: theme.palette.primary.main,
    },
    tableHeadCell: {
        color: theme.palette.primary.contrastText,
    },
    tableRow: {
        background: theme.palette.background.paper,
    },
    nav: {
        alignItems: 'baseline',
        background: 'transparent',
        height: 'fit-content',
    },
    navAction: {
        alignItems: 'center',
        color: theme.palette.primary.contrastText,
        overflowWrap: 'anywhere',
    },
    iconButton: {
        background: theme.palette.secondary.main,
        fill: theme.palette.secondary.contrastText,
    },
}));

interface Props {
    className?: string;
}

export const ContactInfo = ({
    className,
    ...props
}: Props) => {
    const classes = useStyles();

    const openLink = (e, link) => {
        window.open(link, '_blank', 'noopener,noreferrer');
        e.preventDefault();
    }

    const contactInfo = [
        ['Find us on Twitter', 'Twitter', BusinessFields.SOCIALS.Twitter, TwitterIcon],
        ['Join our Discord', 'Discord', BusinessFields.SOCIALS.Discord, DiscordIcon],
        ['Source code', 'Code', BusinessFields.SOCIALS.GitHub, GitHubIcon],
    ]

    return (
        <div style={{ minWidth: 'fit-content', height: 'fit-content'}} {...props}>
            <BottomNavigation className={classes.nav} showLabels>
                {contactInfo.map(([tooltip, label, link, Icon], index: number) => (
                    <Tooltip key={`contact-info-button-${index}`} title={tooltip} placement="top">
                        <BottomNavigationAction className={classes.navAction} label={label} onClick={(e) => openLink(e, link)} icon={
                            <IconButton sx={{background: (t) => t.palette.secondary.main}}>
                                <Icon fill="#1e581f"/>
                            </IconButton>
                        } />
                    </Tooltip>
                ))}
            </BottomNavigation>
        </div>
    );
}