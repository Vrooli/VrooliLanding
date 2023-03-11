import { Typography } from '@mui/material';
import { slideTitle } from 'styles';
import { SlideContainerNeon, SlideContent, SlidePage } from 'components';

export const ContributePage = () => {

    return (
        <SlidePage id="page">
            <SlideContainerNeon id="an-open-source-economy" sx={{ zIndex: 3 }}>
                <SlideContent>
                    <Typography variant='h2' component="h1" pb={4} sx={{ ...slideTitle }}>Help Us Create a Post-Capitalist Future</Typography>
                </SlideContent>
            </SlideContainerNeon>
        </SlidePage>
    );
}