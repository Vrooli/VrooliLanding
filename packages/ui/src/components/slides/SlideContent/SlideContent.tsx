import { Stack } from '@mui/material';
import { SlideContentProps } from '../types';

export const SlideContent = ({
    children,
}: SlideContentProps) => {
    return (
        <Stack
            direction="column"
            spacing={2}
            p={2}
            textAlign="center"
            zIndex={1}
            sx={{
                maxWidth: { xs: '100vw', sm: '90vw', md: 'min(80vw, 1000px)' },
            }}
        >
            {children}
        </Stack>
    );
}