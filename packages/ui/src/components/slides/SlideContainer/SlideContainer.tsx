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
                minHeight: '100vh',
                ...sx
            }}
        >
            {children}
        </Box>
    );
}