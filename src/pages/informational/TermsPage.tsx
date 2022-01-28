import { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import { PolicyBreadcrumbs } from 'components';
import { convertToDot, valueFromDot } from "utils";
import { Box, useTheme } from '@mui/material';
import { BusinessFields } from "utils/consts";
import termsMarkdown from '../../assets/policy/privacy.md';

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
        const business_fields = Object.keys(convertToDot(BusinessFields));
        business_fields.forEach(f => data = data?.replaceAll(`<${f}>`, valueFromDot(BusinessFields, f) || '') ?? '');
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