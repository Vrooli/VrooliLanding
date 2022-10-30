import { SlideContainer } from 'components/SlideContainer/SlideContainer';
import { SlideContent } from 'components/SlideContent/SlideContent';
import { SlideProps } from '../types';

export const Slide = ({
    id,
    children,
    sx,
}: SlideProps) => {
    return (
        <SlideContainer id={id} sx={sx}>
            <SlideContent>
                {children}
            </SlideContent>
        </SlideContainer>
    );
}