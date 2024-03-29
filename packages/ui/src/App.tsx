import { useState, useEffect } from 'react';
import {
    BottomNav,
    Navbar,
} from 'components';
import { themes } from 'utils';
import { Routes } from 'Routes';
import { Box, CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    "@global": {
        body: {
            backgroundColor: 'black',
            overflow: 'hidden',
        },
        '#page': {
            minWidth: '100%',
            minHeight: '100%',
        },
        // Add custom fonts
        '@font-face': [{
            fontFamily: 'SakBunderan',
            // src: `local('SakBunderan'), url(${SakBunderan}) format('truetype')`,
            src: `local('SakBunderan'), url(data:font/woff;charset=utf-8;base64,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) format('truetype')`,
            fontDisplay: 'swap',
        }, {
            fontFamily: 'Neuropol',
            src: `local('Neuropol'), url(data:font/woff;charset=utf-8;base64,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) format('truetype')`,
            fontDisplay: 'swap',
        }],
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
        },
        // Fade in animation for slide content
        '.hidden': {
            opacity: 0,
            transition: 'all 1s ease-in-out',
            filter: 'blur(10px)',
            transform: 'translateX(-100%)',
        },
        '.show': {
            opacity: 1,
            transition: 'all 1s ease-in-out',
            filter: 'blur(0px)',
            transform: 'translateX(0%)',
        },
        '@media(prefers-reduced-motion)': {
            '.hidden': {
                transition: 'none',
            }
        },
    },
}));

export function App() {
    useStyles();
    const [theme, setTheme] = useState(themes.dark);

    useEffect(() => {
        setTheme(themes.dark);
    }, [])

    useEffect(() => {
        // Add help wanted to console logs
        console.log(`
               @@@                 @@@                  
            @@     @@           @@     @@               
           @@       @@         @@       @@              
            @@     @@           @@     @@               
               @@@   @@        @   @@@                  
                        @   @@                   @@@      
                         @@                   @@     @@
                         @@             @@@@@@@       @@
            @@           @@          @@       @@     @@
    @@@  @@    @@    @@@    @@@   @@             @@@ 
 @@     @@         @@          @@                     
@@       @@       @@            @@                                  
 @@     @@        @             @@@@@@@@@@                Consider developing with us!  
    @@@           @@            @@        @@@@@           https://github.com/Vrooli/Vrooli
                   @@          @@                @      
                     @@@    @@@                  @      
                         @@                     @@@   
       @@@              @@@@                 @@     @@  
    @@     @@@@@@@@@@@@      @@             @@       @@ 
   @@       @@      @@        @@             @@     @@ 
    @@     @@        @@      @@                 @@@           
       @@@              @@@@                             
                         @@ 
                       @@@@@@                        
                     @@      @@                        
                     @@      @@                        
                       @@@@@@  
        `)
    }, []);

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
                    </main>
                </Box>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}
