import { Box } from '@mui/material';

interface Props {
    embedId: string;
    width?: number | string;
    height?: number | string;
}

export const YoutubeEmbed = ({
    embedId,
    width,
    height
}: Props) => {
    return (
        <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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