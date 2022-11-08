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
    fontSize: { xs: '2.4em', sm: '3rem', md: '3.75rem' },
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
    backgroundColor: 'rgba(255,255,255,0.3)',
    backdropFilter: 'blur(24px)',
    borderRadius: '0.5rem',
    textAlign: 'center',
    padding: 1.5,
} as CSSProperties;

/**
 * Disables text highlighting
 */
 export const noSelect: SxProps = {
    WebkitTouchCallout: 'none', /* iOS Safari */
    WebkitUserSelect: 'none', /* Safari */
    MozUserSelect: 'none',
    msUserSelect: 'none', /* Internet Explorer/Edge */
    userSelect: 'none', /* Non-prefixed version, currently
    supported by Chrome, Edge, Opera and Firefox */
};

export const blueRadial = 'radial-gradient(circle, rgba(14,10,93,1) 0%, rgba(16,13,73,1) 55%, rgba(2,0,36,1) 100%)'
export const blackRadial = 'radial-gradient(circle, rgb(6 6 46) 12%, rgb(1 1 36) 52%, rgb(3 3 20) 80%)'