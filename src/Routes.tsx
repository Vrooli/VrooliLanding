import { Suspense, useCallback } from 'react';
import { lazily } from 'react-lazily';
import { Route, Switch } from 'wouter';
import { LANDING_LINKS as LINKS } from 'utils/consts';
import { BUSINESS_NAME } from 'utils/consts';

// Lazy loading in the Routes component is a recommended way to improve performance. See https://reactjs.org/docs/code-splitting.html#route-based-code-splitting
const {
    AboutPage,
    HomePage,
    MissionPage,
    NotFoundPage,
    Page,
    PrivacyPolicyPage,
    TermsPage,
} = lazily(() => import('./pages'));

const Routes = () => {

    const title = useCallback((page: string) => `${page} | ${BUSINESS_NAME}`, []);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                {/* ========= START INFORMATIONAL ROUTES ========= */}
                {/* Informational pages to describe Vrooli to potential customers */}
                <Route path={LINKS.Home}>
                    <Page title={title('Home')}>
                        <HomePage />
                    </Page>
                </Route>
                <Route path={LINKS.Mission}>
                    <Page title={title('Mission')}>
                        <MissionPage />
                    </Page>
                </Route>
                <Route path={LINKS.About}>
                    <Page title={title('About')}>
                        <AboutPage />
                    </Page>
                </Route>
                <Route path={LINKS.PrivacyPolicy}>
                    <Page title={title('Privacy Policy')}>
                        <PrivacyPolicyPage />
                    </Page>
                </Route>
                <Route path={LINKS.Terms}>
                    <Page title={title('Terms & Conditions')}>
                        <TermsPage />
                    </Page>
                </Route>
                {/* ========= END INFORMATIONAL ROUTES ========= */}
                <Route>
                    <Page title={title('404')}>
                        <NotFoundPage />
                    </Page>
                </Route>
            </Switch>
        </Suspense>
    );
}

export { Routes };