import { SlideContainer } from 'components/slides/SlideContainer/SlideContainer';
import { SlideContent } from 'components/slides/SlideContent/SlideContent';
import { SlideProps } from '../types';

export const Slide = ({
    hasPrevious,
    hasNext,
    id,
    children,
    sx,
}: SlideProps) => {
    return (
        <SlideContainer hasPrevious={hasPrevious} hasNext={hasNext} id={id} sx={sx}>
            <SlideContent>
                {children}
            </SlideContent>
        </SlideContainer>
    );
}