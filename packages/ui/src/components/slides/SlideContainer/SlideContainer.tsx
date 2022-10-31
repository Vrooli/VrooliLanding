import { Box } from '@mui/material';
import { SlideContainerProps } from '../types';

export const SlideContainer = ({
    id,
    children,
    sx,
}: SlideContainerProps) => {
    return (
        <Box
            id={id}
            key={id}
            sx={{
                position: 'relative',
                display: 'flex',
                overflow: 'hidden',
                justifyContent: 'center',
                alignItems: 'center',
                // Make slide slightly larger than full height
                // minHeight: 'calc(100vh + 300px)',
                // // Extra height fades out at bottom
                // maskImage: '-webkit-gradient(linear, center top, center bottom, color-stop(0.50,  rgba(0,0,0,1)), color-stop(1.00,  rgba(0,0,0,0)))',
                // webkitMaskImage: '-webkit-gradient(linear, center top, center bottom, color-stop(0.50,  rgba(0,0,0,1)), color-stop(1.00,  rgba(0,0,0,0)))',
                // // Extra height fades out at top
                // maskImage: '-webkit-gradient(linear, center top, center bottom, color-stop(0.00,  rgba(0,0,0,0)), color-stop(0.50,  rgba(0,0,0,1)))',
                // webkitMaskImage: '-webkit-gradient(linear, center top, center bottom, color-stop(0.00,  rgba(0,0,0,0)), color-stop(0.50,  rgba(0,0,0,1)))',
                minHeight: '100vh',
                ...sx
            }}
        >
            {children}
        </Box>
    );
}