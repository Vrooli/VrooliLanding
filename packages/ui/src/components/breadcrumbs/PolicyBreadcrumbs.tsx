import { LANDING_LINKS } from 'utils/consts';
import { BreadcrumbsBase } from './BreadcrumbsBase';
import { PolicyBreadcrumbsProps } from './types';

const paths = [
    ['Privacy', LANDING_LINKS.PrivacyPolicy],
    ['Terms', LANDING_LINKS.Terms]
].map(row => ({ text: row[0], link: row[1] }))

export const PolicyBreadcrumbs = ({...props}: PolicyBreadcrumbsProps) => BreadcrumbsBase({
    paths: paths,
    ariaLabel: 'Policies breadcrumb',
    sx: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: 'larger',
        color: (t) => t.palette.secondary.dark,
    },
    ...props
})