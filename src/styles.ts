import { SxProps } from "@mui/material"
import { CSSProperties } from "@mui/styles";

export const textPop: SxProps = {
    padding: '0',
    color: 'white',
    textAlign: 'center',
    fontWeight: 600,
    textShadow:
        `-1px -1px 0 black,  
                1px -1px 0 black,
                -1px 1px 0 black,
                1px 1px 0 black`
} as CSSProperties;