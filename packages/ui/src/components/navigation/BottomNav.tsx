import { useLocation } from 'wouter';
import { makeStyles } from '@mui/styles';
import { BottomNavigation, Theme } from '@mui/material';
import { actionsToBottomNav, getUserActions } from 'utils';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        background: theme.palette.primary.dark,
        position: 'fixed',
        zIndex: 5,
        bottom: '0',
        width: '100%',
    },
    icon: {
        color: theme.palette.primary.contrastText,
        '&:hover': {
            color: theme.palette.secondary.light,
        },
    },
    [theme.breakpoints.up(1000)]: {
        root: {
            display: 'none',
        }
    },
}));

export const BottomNav = () => {
    const [, setLocation] = useLocation();
    const classes = useStyles();

    let actions = actionsToBottomNav({
        actions: getUserActions({}),
        setLocation,
        classes: { root: classes.icon }
    });

    return (
        <BottomNavigation
            className={classes.root}
            showLabels
        >
            {actions}
        </BottomNavigation>
    );
}