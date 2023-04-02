import { BoxProps } from "@mui/material";

export interface ErrorBoundaryProps {
    children: React.ReactNode;
}

export interface GlossyContainerProps extends BoxProps {
    children: React.ReactNode;
    sx?: { [key: string]: any };
}

export interface TwinklingStarsProps {
    amount?: number;
    size?: number;
    color?: string;
    speed?: number;
    sx?: { [key: string]: any };
}