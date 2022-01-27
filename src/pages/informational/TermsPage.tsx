import { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import { PolicyBreadcrumbs } from 'components';
import { convertToDot, valueFromDot } from "utils";
import { Box, useTheme } from '@mui/material';
import * as businessFields from "utils/consts";

export const TermsPage = () => {
    const theme = useTheme();
    const termsData = require('../../assets/policy/terms.md');
    const [terms, setTerms] = useState<string | null>(null);

    useEffect(() => {
        if (termsData === undefined) return;
        let data = termsData;
        const business_fields = Object.keys(convertToDot(businessFields));
        business_fields.forEach(f => data = data?.replaceAll(`<${f}>`, valueFromDot(businessFields, f) || '') ?? '');
        setTerms(data);
    }, [termsData])

    return (
        <Box id="page" sx={{
            '& a': {
                color: theme.palette.secondary.light,
            }
        }}>
            <PolicyBreadcrumbs textColor={theme.palette.secondary.dark} />
            <ReactMarkdown>{ terms || '' }</ReactMarkdown>
        </Box>
    );
}