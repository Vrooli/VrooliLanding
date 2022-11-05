export interface SlideProps {
    hasPrevious: boolean;
    hasNext: boolean;
    id: string;
    children: React.ReactNode;
    sx?: object;
}

export interface SlideContainerProps {
    hasPrevious: boolean;
    hasNext: boolean;
    id: string;
    children: React.ReactNode;
    sx?: object;
}

export interface SlideContainerNeonProps {
    id: string;
    children: React.ReactNode;
    sx?: object;
}

export interface SlideContentProps {
    children: React.ReactNode;
    sx?: object;
}