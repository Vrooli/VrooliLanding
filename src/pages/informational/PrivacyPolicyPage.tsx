import { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import { PolicyBreadcrumbs } from 'components';
import { convertToDot, valueFromDot } from "utils";
import { Box, useTheme } from '@mui/material';
import * as businessFields from "utils/consts";

export const PrivacyPolicyPage = () => {
    const theme = useTheme();
    const privacyData = require('../../assets/policy/privacy.md');
    const [privacy, setPrivacy] = useState<string | null>(null);

    useEffect(() => {
        if (!privacyData) return;
        let data = privacyData;
        const business_fields = Object.keys(convertToDot(businessFields));
        business_fields.forEach(f => data = data?.replaceAll(`<${f}>`, valueFromDot(businessFields, f) || '') ?? '');
        setPrivacy(data);
    }, [privacyData])

    return (
        <Box id="page" sx={{
            '& a': {
                color: theme.palette.secondary.dark,
            },
        }}>
            <PolicyBreadcrumbs textColor={theme.palette.secondary.dark} />
            <ReactMarkdown>{ privacy || '' }</ReactMarkdown>
        </Box>
    );
}