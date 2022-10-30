export interface ErrorBoundaryProps {
    children: React.ReactNode;
}

export interface SlideProps {
    id: string;
    children: JSX.Element | JSX.Element[];
    sx?: object;
}

export interface SlideContainerProps {
    id: string;
    children: JSX.Element | JSX.Element[];
    sx?: object;
}

export interface SlideContentProps {
    children: JSX.Element | JSX.Element[];
}