import { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import { PolicyBreadcrumbs } from 'components';
import { convertToDot, valueFromDot } from "utils";
import { Box, useTheme } from '@mui/material';
import termsMarkdown from '../../../assets/policy/privacy.md';
import { APP_URL, BUSINESS_NAME, EMAIL, LANDING_URL, SOCIALS, SUPPORT_EMAIL } from "@shared/consts";

const BUSINESS_DATA = {
    BUSINESS_NAME,
    EMAIL,
    SUPPORT_EMAIL,
    SOCIALS,
    LANDING_URL,
    APP_URL,
}

export const TermsPage = () => {
    const theme = useTheme();
    // Parse terms markdown from .md file
    const [terms, setTerms] = useState<string>('');
    useEffect(() => {
        fetch(termsMarkdown)
            .then((response) => response.text())
            .then((text) => {
                setTerms(text);
            });
    }, []);

    useEffect(() => {
        if (terms === undefined) return;
        let data = terms;
        const business_fields = Object.keys(convertToDot(BUSINESS_DATA));
        business_fields.forEach(f => data = data?.replaceAll(`<${f}>`, valueFromDot(BUSINESS_DATA, f) || '') ?? '');
        setTerms(data);
    }, [terms])

    return (
        <Box id="page" p={4} sx={{
            background: "#cad0e7",
            '& a': {
                color: theme.palette.secondary.dark,
            }
        }}>
            <PolicyBreadcrumbs />
            <ReactMarkdown>{ terms || '' }</ReactMarkdown>
        </Box>
    );
}