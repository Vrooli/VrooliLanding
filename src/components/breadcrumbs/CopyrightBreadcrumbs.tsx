import { BreadcrumbsBase } from './BreadcrumbsBase';
import { BUSINESS_NAME, LANDING_LINKS } from 'utils/consts';
import { CopyrightBreadcrumbsProps } from './types';

export const CopyrightBreadcrumbs = ({ 
    sx,
    ...props 
}: CopyrightBreadcrumbsProps) => {
    const paths = [
        [`© ${new Date().getFullYear()} ${BUSINESS_NAME}`, LANDING_LINKS.Home],
        ['Privacy', LANDING_LINKS.PrivacyPolicy],
        ['Terms', LANDING_LINKS.Terms]
    ].map(row => ({ text: row[0], link: row[1] }))
    return BreadcrumbsBase({
        paths: paths,
        ariaLabel: 'Copyright breadcrumb',
        sx: {
            ...sx,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        ...props
    })
}