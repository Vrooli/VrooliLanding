import { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import { PolicyBreadcrumbs } from 'components';
import { convertToDot, valueFromDot } from "utils";
import { Box, useTheme } from '@mui/material';
import privacyMarkdown from '../../../assets/policy/privacy.md';
import { APP_URL, BUSINESS_NAME, EMAIL, LANDING_URL, SOCIALS, SUPPORT_EMAIL } from "@shared/consts";

const BUSINESS_DATA = {
    BUSINESS_NAME,
    EMAIL,
    SUPPORT_EMAIL,
    SOCIALS,
    LANDING_URL,
    APP_URL,
}

export const PrivacyPolicyPage = () => {
    const theme = useTheme();
    // Parse privacy markdown from .md file
    const [privacy, setPrivacy] = useState<string>('');
    useEffect(() => {
        fetch(privacyMarkdown)
            .then((response) => response.text())
            .then((text) => {
                setPrivacy(text);
            });
    }, []);

    useEffect(() => {
        if (!privacy) return;
        let data = privacy;
        const business_fields = Object.keys(convertToDot(BUSINESS_DATA));
        business_fields.forEach(f => data = data?.replaceAll(`<${f}>`, valueFromDot(BUSINESS_DATA, f) || '') ?? '');
        setPrivacy(data);
    }, [privacy])

    return (
        <Box id="page" p={4} sx={{
            background: "#cad0e7",
            '& a': {
                color: theme.palette.secondary.dark,
            },
        }}>
            <PolicyBreadcrumbs />
            <ReactMarkdown>{privacy || ''}</ReactMarkdown>
        </Box>
    );
}