import { Action, actionsToMenu, ACTION_TAGS, getUserActions, openLink, useWindowSize } from 'utils';
import { Button, Container, Palette, useTheme } from '@mui/material';
import { useLocation } from '@shared/route';
import { useMemo } from 'react';
import { APP_LINKS } from '@shared/consts';
import { LogInIcon } from '@shared/icons';

const navItemStyle = (palette: Palette) => ({
    background: 'transparent',
    color: palette.primary.contrastText,
    textTransform: 'none',
    fontSize: '1.4em',
    '&:hover': {
        color: palette.secondary.light,
    },
})

export const NavList = () => {
    const { breakpoints, palette } = useTheme();
    const [, setLocation] = useLocation();

    const isMobile = useWindowSize(({ width }) => width <= breakpoints.values.md);
    const nav_actions = useMemo<Action[]>(() => getUserActions({ exclude: [ACTION_TAGS.Home, ACTION_TAGS.Start] }), []);

    return (
        <Container sx={{
            display: 'flex',
            height: '100%',
            paddingBottom: '0',
            paddingRight: '0 !important',
            right: '0',
        }}>
            {/* List items displayed when on wide screen */}
            {!isMobile && actionsToMenu({
                actions: nav_actions,
                setLocation,
                sx: navItemStyle(palette),
            })}
            {/* Start button */}
            <Button
                href={APP_LINKS.Start}
                onClick={(e) => { e.preventDefault(); openLink(setLocation, APP_LINKS.Start) }}
                startIcon={<LogInIcon />}
                sx={{
                    background: '#387e30',
                    color: 'white',
                    borderRadius: '10px',
                    whiteSpace: 'nowrap',
                    // Hide text on small screens, and remove start icon's padding
                    fontSize: { xs: '0px', sm: '1em', md: '1.4em' },
                    '& .MuiButton-startIcon': {
                        marginLeft: { xs: '0px', sm: '-4px' },
                        marginRight: { xs: '0px', sm: '8px' },
                    },
                }}
            >
                Start
            </Button>
        </Container>
    );
}