import { Box } from '@mui/material';
import { SlidePageProps } from '../types';

export const SlidePage = ({
    children,
    id,
    sx,
}: SlidePageProps) => {
    return (
        <Box
            id={id}
            sx={{ 
                scrollSnapType: 'y proximity', 
                overflowY: 'scroll', 
                height: '100vh', 
                scrollBehavior: 'smooth',
                ...(sx || {}),
            }}
        >
            {children}
        </Box>
    );
}