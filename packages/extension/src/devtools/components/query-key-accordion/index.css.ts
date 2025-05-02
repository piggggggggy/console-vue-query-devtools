import { keyframes, style } from '@vanilla-extract/css';

export const accordionRoot = style({
    borderRadius: '6px',
    width: '100%',
    maxWidth: '100%',
    backgroundColor: 'var(--mauve-6)',
    boxShadow: '0 2px 10px var(--black-a4)',
});

export const accordionItem = style({
    overflow: 'hidden',
    marginTop: '1px',
    selectors: {
        '&:first-child': {
            marginTop: 0,
            borderTopLeftRadius: '4px',
            borderTopRightRadius: '4px',
        },
        '&:last-child': {
            borderBottomLeftRadius: '4px',
            borderBottomRightRadius: '4px',
        },
        '&:focus-within': {
            position: 'relative',
            zIndex: 1,
            boxShadow: '0 0 0 2px var(--mauve-12)',
        },
    },
});

export const accordionHeader = style({
    display: 'flex',
    margin: 'unset',
});

export const accordionTrigger = style({
    fontFamily: 'inherit',
    padding: '0 20px',
    height: '45px',
    whiteSpace: 'nowrap',
    maxWidth: '100%',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    lineHeight: 1,
    boxShadow: '0 1px 0 var(--mauve-6)',
    backgroundColor: 'var(--mauve-3)',
    selectors: {
        '&:hover': {
            backgroundColor: 'var(--mauve-2)',
        },
    },
});
export const triggerText = style({
    fontFamily: 'inherit',
    textAlign: 'left',
    fontSize: '15px',
    color: 'var(--violet-11)',
    maxWidth: 'calc(100% - 30px)',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
});

const slideDown = keyframes({
    from: { height: '0' },
    to: { height: 'var(--radix-accordion-content-height)' },
});

const slideUp = keyframes({
    from: { height: 'var(--radix-accordion-content-height)' },
    to: { height: '0' },
});

export const accordionContent = style({
    overflow: 'hidden',
    fontSize: '15px',
    color: 'var(--mauve-11)',
    backgroundColor: 'var(--mauve-2)',
    selectors: {
        '&[data-state="open"]': {
            animation: `${slideDown} 300ms ease-out`,
        },
        '&[data-state="closed"]': {
            animation: `${slideUp} 300ms ease-out`,
        },
    },
});

export const accordionContentText = style({
    padding: '15px 20px',
});

export const accordionChevron = style({
    width: '20px',
    color: 'var(--violet-10)',
    transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
    selectors: {
        '&[data-state="open"]': {
            transform: 'rotate(180deg)',
        },
    },
});

export const noQuerySection = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
});
