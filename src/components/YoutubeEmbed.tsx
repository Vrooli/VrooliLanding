import { Box } from '@mui/material';

interface Props {
    embedId: string;
    width?: number;
    height?: number;
}

export const YoutubeEmbed = ({
    embedId,
    width,
    height
}: Props) => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            overflow: 'hidden',
            paddingBottom: '56.25%',
            position: 'relative',
            height: 0,
            '& iframe': {
                left: 0,
                top: 0,
                height: '100%',
                width: '100%',
                position: 'absolute',
            }
        }}>
            <iframe
                width={width}
                height={height}
                src={`https://www.youtube.com/embed/${embedId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </Box>
    )
};