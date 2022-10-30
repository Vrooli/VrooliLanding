import { useState, useEffect } from 'react';
import {
    BottomNav,
    Footer,
    Navbar,
} from 'components';
import { themes } from 'utils';
import { Routes } from 'Routes';
import { Box, CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SakBunderan from './assets/font/SakBunderan.woff';
import Neuropol from './assets/font/Neuropol.woff';

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
        },
        // Add custom fonts
        '@font-face': [{
            fontFamily: 'Lato',
            src: `local('Lato'), url(${SakBunderan}) format('truetype')`,
            fontDisplay: 'swap',
        }, {
            fontFamily: 'Neuropol',
            src: `local('Neuropol'), url(${Neuropol}) format('truetype')`,
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
        }
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
                        <Footer />
                    </main>
                </Box>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}
