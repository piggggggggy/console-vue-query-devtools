import { style } from '@vanilla-extract/css';

export const tabsRoot = style({
    display: 'flex',
    flexDirection: 'column',
    width: 'calc(100vw - 36px)',
    maxWidth: '100%',
    padding: '10px',
    boxShadow: '0 2px 10px var(--black-a4)',
});

export const tabsList = style({
    flexShrink: 0,
    display: 'flex',
    borderBottom: '1px solid var(--mauve-6)',
    padding: '0 10px',
});

export const tabsTrigger = style({
    fontFamily: 'inherit',
    backgroundColor: 'var(--mauve-3)',
    padding: '0 10px',
    width: '33%',
    maxWidth: '80px',
    height: '40px',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    lineHeight: 1,
    color: 'var(--mauve-11)',
    userSelect: 'none',
    selectors: {
        '&:first-child': {
            borderTopLeftRadius: '6px',
        },
        '&:last-child': {
            borderTopRightRadius: '6px',
        },
        '&:hover': {
            color: 'var(--violet-11)',
        },
        '&:focus': {
            position: 'relative',
            boxShadow: '0 0 0 2px black',
        },
        '&[data-state="active"]': {
            color: 'var(--violet-11)',
            boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
        },
    },
});

export const tabsTriggerText = style({
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
});

export const tabsContent = style({
    padding: '10px',
});
