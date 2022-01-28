import { SxProps } from "@mui/material"
import { CSSProperties } from "@mui/styles";

export const textPop: SxProps = {
    padding: '0',
    color: 'white',
    textAlign: 'center',
    fontWeight: 600,
    textShadow:
        `-1px -1px 0 black,  
                1px -1px 0 black,
                -1px 1px 0 black,
                1px 1px 0 black`
} as CSSProperties;

export const slideTitle: SxProps = {
    textAlign: 'center',
    fontSize: { xs: '2em', sm: '3rem', md: '3.75rem' },
};

export const slideText: SxProps = {
    margin: 'auto',
    textAlign: { xs: 'left', md: 'justify' }, fontSize: { xs: '1.25rem', md: '1.5rem' }
};

export const slideImageContainer: SxProps = {
    justifyContent: 'center',
    height: '100%',
    display: 'flex',
    '& > img': {
        maxWidth: 'min(300px, 90%)',
        maxHeight: '100%',
        objectFit: 'contain',
        zIndex: '3',
    }
} as CSSProperties;

export const translucentContainer: SxProps = {
    boxShadow: '0px 0px 6px #040505',
    backgroundColor: 'rgba(255,255,255,0.2)',
    backdropFilter: 'blur(6px)',
    borderRadius: '0.5rem',
    textAlign: 'center',
    padding: 1.5,
} as CSSProperties;