import { Suspense, useCallback } from 'react';
import { lazily } from 'react-lazily';
import { Route, Switch } from '@shared/route';
import { LANDING_LINKS as LINKS } from 'utils/consts';
import { BusinessFields } from 'utils/consts';
import { ScrollToTop } from 'components';
import { Page } from 'pages/wrapper/Page';
import { Box, CircularProgress } from '@mui/material';

// Lazy loading in the Routes component is a recommended way to improve performance. See https://reactjs.org/docs/code-splitting.html#route-based-code-splitting
const { AboutPage } = lazily(() => import('./pages/informational/AboutPage'));
const { HomePage } = lazily(() => import('./pages/informational/HomePage'));
const { MissionPage } = lazily(() => import('./pages/informational/MissionPage'));
const { NotFoundPage } = lazily(() => import('./pages/NotFoundPage'));
const { PrivacyPolicyPage } = lazily(() => import('./pages/informational/PrivacyPolicyPage'));
const { TermsPage } = lazily(() => import('./pages/informational/TermsPage'));

const Fallback = <Box sx={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 100000,
}}>
    <CircularProgress size={100} />
</Box>

const Routes = () => {

    const title = useCallback((page: string) => `${page} | ${BusinessFields.BUSINESS_NAME}`, []);

    return (
        <>
            <ScrollToTop />
            <Switch>
                {/* ========= START INFORMATIONAL ROUTES ========= */}
                {/* Informational pages to describe Vrooli to potential customers */}
                <Route
                    path={LINKS.Home}
                    sitemapIndex
                    priority={1.0}
                    changeFreq="weekly"
                >
                    <Suspense fallback={Fallback}>
                        <Page title={title('Home')}>
                            <HomePage />
                        </Page>
                    </Suspense>
                </Route>
                <Route
                    path={LINKS.Mission}
                    sitemapIndex
                    priority={0.7}
                    changeFreq="monthly"
                >
                    <Suspense fallback={Fallback}>
                        <Page title={title('Mission')}>
                            <MissionPage />
                        </Page>
                    </Suspense>
                </Route>
                <Route
                    path={LINKS.About}
                    sitemapIndex
                    priority={0.7}
                    changeFreq="monthly"
                >
                    <Suspense fallback={Fallback}>
                        <Page title={title('About')}>
                            <AboutPage />
                        </Page>
                    </Suspense>
                </Route>
                <Route
                    path={LINKS.PrivacyPolicy}
                    sitemapIndex
                    priority={0.3}
                    changeFreq="monthly"
                >
                    <Suspense fallback={Fallback}>
                        <Page title={title('Privacy Policy')}>
                            <PrivacyPolicyPage />
                        </Page>
                    </Suspense>
                </Route>
                <Route
                    path={LINKS.Terms}
                    sitemapIndex
                    priority={0.3}
                    changeFreq="monthly"
                >
                    <Suspense fallback={Fallback}>
                        <Page title={title('Terms & Conditions')}>
                            <TermsPage />
                        </Page>
                    </Suspense>
                </Route>
                {/* ========= END INFORMATIONAL ROUTES ========= */}
                <Route>
                    <Suspense fallback={Fallback}>
                        <Page title={title('404')}>
                            <NotFoundPage />
                        </Page>
                    </Suspense>
                </Route>
            </Switch>
        </>
    );
}

export { Routes };