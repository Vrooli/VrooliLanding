import { useEffect, useState } from 'react';
import { ContactInfo } from 'components';
import { actionsToList, ACTION_TAGS, getUserActions, PUBS } from 'utils';
import PubSub from 'pubsub-js';
import {
    Close as CloseIcon,
    ContactSupport as ContactSupportIcon,
    ExpandLess as ExpandLessIcon,
    ExpandMore as ExpandMoreIcon,
    Menu as MenuIcon,
} from '@mui/icons-material';
import { IconButton, SwipeableDrawer, List, ListItem, ListItemIcon, Collapse, ListItemText, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CopyrightBreadcrumbs } from 'components';
import { useLocation } from 'wouter';

const useStyles = makeStyles((theme: Theme) => ({
    drawerPaper: {
        background: theme.palette.primary.light,
        borderLeft: `1px solid ${theme.palette.text.primary}`,
    },
    menuItem: {
        color: theme.palette.primary.contrastText,
        borderBottom: `1px solid ${theme.palette.primary.dark}`,
    },
    close: {
        color: theme.palette.primary.contrastText,
        borderRadius: 0,
        borderBottom: `1px solid ${theme.palette.primary.dark}`,
        justifyContent: 'end',
        flexDirection: 'row-reverse',
    },
    menuIcon: {
        color: theme.palette.primary.contrastText,
    },
}));

export const Hamburger = () => {
    const classes = useStyles();
    const [, setLocation] = useLocation();
    const [contactOpen, setContactOpen] = useState(true);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        let openSub = PubSub.subscribe(PUBS.BurgerMenuOpen, (_, b) => {
            setOpen(open => b === 'toggle' ? !open : b);
        });
        return () => { PubSub.unsubscribe(openSub) };
    }, [])

    const closeMenu = () => PubSub.publish(PUBS.BurgerMenuOpen, false);
    const toggleOpen = () => PubSub.publish(PUBS.BurgerMenuOpen, 'toggle');

    const handleContactClick = () => {
        setContactOpen(!contactOpen);
    };

    const nav_actions = getUserActions({ exclude: [ACTION_TAGS.Home] });

    return (
        <>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleOpen}>
                <MenuIcon />
            </IconButton>
            {/* @ts-ignore TODO */}
            <SwipeableDrawer classes={{ paper: classes.drawerPaper }} anchor="right" open={open} onOpen={() => { }} onClose={closeMenu}>
                <IconButton className={classes.close} onClick={closeMenu}>
                    <CloseIcon fontSize="large" />
                </IconButton>
                <List>
                    {/* Collapsible contact information */}
                    <ListItem className={classes.menuItem} button onClick={handleContactClick}>
                        <ListItemIcon><ContactSupportIcon className={classes.menuIcon} /></ListItemIcon>
                        <ListItemText primary="Contact Us" />
                        {contactOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </ListItem>
                    <Collapse className={classes.menuItem} in={contactOpen} timeout="auto" unmountOnExit>
                        <ContactInfo />
                    </Collapse>
                    {actionsToList({
                        actions: nav_actions,
                        setLocation,
                        classes: { listItem: classes.menuItem, listItemIcon: classes.menuIcon },
                        onAnyClick: closeMenu,
                    })}
                </List>
                <CopyrightBreadcrumbs
                    sx={{
                        color: (t) => t.palette.primary.contrastText,
                        padding: 3,
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: 'auto',
                    }}
                />
            </SwipeableDrawer>
        </>
    );
}