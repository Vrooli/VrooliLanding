import { useState, useEffect } from 'react';
import {
    BottomNav,
    Footer,
    Navbar,
} from 'components';
import PubSub from 'pubsub-js';
import { PUBS, themes } from 'utils';
import { Routes } from 'Routes';
import { Box, CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SakBunderan from './assets/font/SakBunderan.woff';
import hotkeys from 'hotkeys-js';

const useStyles = makeStyles(() => ({
    "@global": {
        body: {
            backgroundColor: 'black',
            overflowX: 'hidden',
            overflowY: 'auto',
        },
        '#page': {
            minWidth: '100%',
            minHeight: '100%',
            marginTop: '10vh',
        },
        '@font-face': {
            fontFamily: 'Lato',
            src: `local('Lato'), url(${SakBunderan}) format('truetype')`,
            fontDisplay: 'swap',
        },
        '.slideList': {
            '& li': {
                listStyleType: 'circle',
                fontSize: 'x-large',
                textAlign: 'left',
            }
        },
        '.roadmapList': {
            '& li': {
                listStyleType: 'circle',
                fontSize: 'large',
                textAlign: 'left',
            }
        },
        '.tsparticles-canvas': {
            position: 'absolute',
            overflow: 'hidden',
        }
    },
}));

export function App() {
    const classes = useStyles();
    const [theme, setTheme] = useState(themes.light);

    useEffect(() => {

        const handlers = {
            OPEN_MENU: () => PubSub.publish(PUBS.BurgerMenuOpen, true),
            TOGGLE_MENU: () => PubSub.publish(PUBS.BurgerMenuOpen, 'toggle'),
            CLOSE_MENU: () => PubSub.publish(PUBS.BurgerMenuOpen, false),
            CLOSE_MENU_OR_POPUP: () => {
                handlers.CLOSE_MENU();
            }
        }
        hotkeys('left', handlers.OPEN_MENU);
        hotkeys('right', handlers.CLOSE_MENU);
        hotkeys('m', handlers.TOGGLE_MENU);
        hotkeys('escape,backspace', handlers.CLOSE_MENU_OR_POPUP);
    }, []);

    useEffect(() => {
        //if (session && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) setTheme(themes.dark);
        setTheme(themes.light);
    }, [])

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <Box id="App">
                    <main
                        id="page-container"
                        style={{
                            background: theme.palette.background.default,
                            color: theme.palette.background.textPrimary,
                        }}
                    >
                        <Box id="content-wrap" sx={{ minHeight: '100vh' }}>
                            <Navbar />
                            <Routes />
                        </Box>
                        <BottomNav />
                        <Footer />
                    </main>
                </Box>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}
