import { Box } from '@mui/material';

export interface SlideProps {
    id: string;
    children: JSX.Element | JSX.Element[];
    sx?: object;
}

export const Slide = ({
    id,
    children,
    sx,
}: SlideProps) => {
    return (
        <Box
            id={id}
            key={id}
            sx={{
                display: 'flex',
                overflowX: 'hidden',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                ...sx
            }}
        >
            <Box sx={{ padding: 4, zIndex: 1 }}>
                {children}
            </Box>
        </Box>
    );
}