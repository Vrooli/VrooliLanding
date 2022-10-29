/* eslint-disable @typescript-eslint/no-redeclare */
import { APP_LINKS, LANDING_LINKS } from '@shared/consts';
import {
    BottomNavigationAction,
    Button,
    IconButton,
} from '@mui/material';
import { openLink } from 'utils';
import { Session, SetLocation } from 'types';
import { HelpIcon, HomeIcon, InfoIcon, OrganizationIcon, SvgComponent } from '@shared/icons';
import { getCurrentUser, guestSession } from 'utils/authentication';

export enum ACTION_TAGS {
    Home = 'Home',
    Contribute = 'Contribute',
    Features = 'Features',
    AboutUs = 'AboutUs',
    Start = 'Start',
}

export type ActionArray = [string, any, string, any];
export interface Action {
    label: string;
    value: ACTION_TAGS;
    link: string;
    Icon: SvgComponent;
}

// Returns navigational actions available to the user
interface GetUserActionsProps {
    session?: Session | null | undefined;
    exclude?: ACTION_TAGS[] | null | undefined;
}
export function getUserActions({ session = guestSession, exclude = [] }: GetUserActionsProps): Action[] {
    const { id: userId } = getCurrentUser(session);
    const actions: ActionArray[] = [
        ['Home', ACTION_TAGS.Home, LANDING_LINKS.Home, HomeIcon],
        ['Contribute', ACTION_TAGS.Contribute, LANDING_LINKS.Contribute, OrganizationIcon],
        ['Features', ACTION_TAGS.Features, LANDING_LINKS.Features, HelpIcon],
        ['About Us', ACTION_TAGS.AboutUs, LANDING_LINKS.AboutUs, InfoIcon],
        ['Start', ACTION_TAGS.Start, APP_LINKS.Start, SearchIcon],
    ]
    return actions.map(a => createAction(a)).filter(a => !(exclude ?? []).includes(a.value));
}

// Factory for creating action objects
const createAction = (action: ActionArray): Action => {
    const keys = ['label', 'value', 'link', 'Icon'];
    return action.reduce((obj: {}, val: any, i: number) => { obj[keys[i]] = val; return obj }, {}) as Action;
}

// Factory for creating a list of action objects
export const createActions = (actions: ActionArray[]): Action[] => actions.map(a => createAction(a));

// Display actions in a horizontal menu
interface ActionsToMenuProps {
    actions: Action[];
    setLocation: SetLocation;
    sx?: { [key: string]: any };
}
export const actionsToMenu = ({ actions, setLocation, sx = {} }: ActionsToMenuProps) => {
    return actions.map(({ label, value, link }) => (
        <Button
            key={value}
            variant="text"
            size="large"
            href={link}
            onClick={(e) => { e.preventDefault(); openLink(setLocation, link) }}
            sx={sx}
        >
            {label}
        </Button>
    ));
}

// Display actions in a bottom navigation
interface ActionsToBottomNavProps {
    actions: Action[];
    setLocation: SetLocation;
}
export const actionsToBottomNav = ({ actions, setLocation }: ActionsToBottomNavProps) => {
    return actions.map(({ label, value, link, Icon }) => (
        <BottomNavigationAction
            key={value}
            label={label}
            value={value}
            href={link}
            onClick={(e: any) => {
                e.preventDefault();
                // Check if link is different from current location
                const shouldScroll = link === window.location.pathname;
                // If same, scroll to top of page instead of navigating
                if (shouldScroll) window.scrollTo({ top: 0, behavior: 'smooth' });
                // Otherwise, navigate to link
                else openLink(setLocation, link);
            }}
            sx={{ color: 'white' }}
        />
    ));
}

// Display an action as an icon button
interface ActionToIconButtonProps {
    action: Action;
    setLocation: SetLocation;
    classes?: { [key: string]: string };
}
export const actionToIconButton = ({ action, setLocation, classes = { root: '' } }: ActionToIconButtonProps) => {
    const { value, link, Icon } = action;
    return <IconButton classes={classes} edge="start" color="inherit" aria-label={value} onClick={() => openLink(setLocation, link)}>
        <Icon />
    </IconButton>
}