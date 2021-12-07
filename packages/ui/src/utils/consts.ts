/* eslint-disable @typescript-eslint/no-redeclare */
import { ValueOf } from '@local/shared';

export const PUBS = {
    Loading: "loading",
    AlertDialog: "alertDialog",
    Snack: "snack",
    BurgerMenuOpen: "burgerMenuOpen",
    ArrowMenuOpen: "arrowMenuOpen",
    Theme: "theme",
}
export type PUBS = ValueOf<typeof PUBS>;