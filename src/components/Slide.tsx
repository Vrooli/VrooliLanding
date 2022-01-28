import { Box, Stack } from '@mui/material';

export interface SlideProps {
    id: string;
    children: JSX.Element | JSX.Element[];
    isFirst?: boolean;
    sx?: object;
}

export const Slide = ({
    id,
    children,
    isFirst = false,
    sx,
}: SlideProps) => {
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
                minHeight: { xs: 'calc(100vh - 56px)', md: '100vh' },
                ...sx
            }}
        >
            <Stack
                direction="column"
                spacing={2}
                p={4}
                textAlign="center"
                zIndex={1}
                sx={{
                    maxWidth: { xs: '100vw', sm: '90vw', md: 'min(80vw, 1000px)' },
                }}
            >
                {children}
            </Stack>
        </Box>
    );
}