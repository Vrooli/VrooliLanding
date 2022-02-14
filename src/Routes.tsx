import { Suspense, useCallback } from 'react';
import { lazily } from 'react-lazily';
import { Route, Switch } from 'wouter';
import { LANDING_LINKS as LINKS } from 'utils/consts';
import { BusinessFields } from 'utils/consts';
import { ScrollToTop } from 'components';
import { Page } from 'pages/wrapper/Page';

// Lazy loading in the Routes component is a recommended way to improve performance. See https://reactjs.org/docs/code-splitting.html#route-based-code-splitting
const { AboutPage } = lazily(() => import('./pages/informational/AboutPage'));
const { HomePage } = lazily(() => import('./pages/informational/HomePage'));
const { MissionPage } = lazily(() => import('./pages/informational/MissionPage'));
const { NotFoundPage } = lazily(() => import('./pages/NotFoundPage'));
const { PrivacyPolicyPage } = lazily(() => import('./pages/informational/PrivacyPolicyPage'));
const { TermsPage } = lazily(() => import('./pages/informational/TermsPage'));

const Routes = () => {

    const title = useCallback((page: string) => `${page} | ${BusinessFields.BUSINESS_NAME}`, []);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ScrollToTop />
            <Switch>
                {/* ========= START INFORMATIONAL ROUTES ========= */}
                {/* Informational pages to describe Vrooli to potential customers */}
                <Route path={LINKS.Home}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Page title={title('Home')}>
                            <HomePage />
                        </Page>
                    </Suspense>
                </Route>
                <Route path={LINKS.Mission}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Page title={title('Mission')}>
                            <MissionPage />
                        </Page>
                    </Suspense>
                </Route>
                <Route path={LINKS.About}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Page title={title('About')}>
                            <AboutPage />
                        </Page>
                    </Suspense>
                </Route>
                <Route path={LINKS.PrivacyPolicy}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Page title={title('Privacy Policy')}>
                            <PrivacyPolicyPage />
                        </Page>
                    </Suspense>
                </Route>
                <Route path={LINKS.Terms}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Page title={title('Terms & Conditions')}>
                            <TermsPage />
                        </Page>
                    </Suspense>
                </Route>
                {/* ========= END INFORMATIONAL ROUTES ========= */}
                <Route>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Page title={title('404')}>
                            <NotFoundPage />
                        </Page>
                    </Suspense>
                </Route>
            </Switch>
        </Suspense>
    );
}

export { Routes };