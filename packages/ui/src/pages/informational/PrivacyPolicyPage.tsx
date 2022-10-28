import { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import { PolicyBreadcrumbs } from 'components';
import { convertToDot, valueFromDot } from "utils";
import { Box, useTheme } from '@mui/material';
import { BusinessFields } from "utils/consts";
import privacyMarkdown from '../../assets/policy/privacy.md';

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
        const business_fields = Object.keys(convertToDot(BusinessFields));
        business_fields.forEach(f => data = data?.replaceAll(`<${f}>`, valueFromDot(BusinessFields, f) || '') ?? '');
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
            <ReactMarkdown>{ privacy || '' }</ReactMarkdown>
        </Box>
    );
}