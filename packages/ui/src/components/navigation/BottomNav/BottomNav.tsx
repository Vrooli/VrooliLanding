import { useLocation } from '@shared/route';
import { BottomNavigation } from '@mui/material';
import { actionsToBottomNav, getUserActions, useKeyboardOpen } from 'utils';
import { useCallback, useEffect, useState } from 'react';

export const BottomNav = () => {
    const [, setLocation] = useLocation();

    let actions = actionsToBottomNav({
        actions: getUserActions({}),
        setLocation,
    });

    // Hide the nav if the keyboard is open. This is because fixed bottom navs 
    // will appear above the keyboard on Android for some reason.
    const invisible = useKeyboardOpen();

    // Track scrollY to change navbar color from transparent to solid
    const [scrollY, setScrollY] = useState(0);
    const handleScroll = useCallback(() => {
        setScrollY(window.scrollY);
    }, []);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    if (invisible) return null;
    return (
        <BottomNavigation
            showLabels
            sx={{
                // Background starts at 0 opacity, then becomes increases in opacity as the user scrolls down. At 420px, it is fully palette.primary.dark
                background: `linear-gradient(rgba(24, 29, 30, ${scrollY / 420}), rgba(24, 29, 30, ${scrollY / 420}))`,
                position: 'fixed',
                zIndex: 5,
                bottom: 0,
                paddingBottom: 'env(safe-area-inset-bottom)',
                paddingLeft: 'calc(4px + env(safe-area-inset-left))',
                paddingRight: 'calc(4px + env(safe-area-inset-right))',
                height: 'calc(56px + env(safe-area-inset-bottom))',
                width: '100%',
                display: { xs: 'flex', md: 'none' },
            }}
        >
            {actions}
        </BottomNavigation>
    );
}