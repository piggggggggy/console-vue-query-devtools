import { style } from '@vanilla-extract/css';

export const selectTrigger = style({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4px',
    padding: '0 15px',
    fontSize: '13px',
    lineHeight: '1',
    height: '35px',
    gap: '5px',
    backgroundColor: 'var(--gray-1)',
    color: 'var(--violet-11)',
    boxShadow: '0 2px 10px var(--black-a7)',
    selectors: {
        '&:hover': {
            backgroundColor: 'var(--mauve-3)',
        },
        '&:focus': {
            boxShadow: '0 0 0 2px black',
        },
        '&[data-placeholder]': {
            color: 'var(--violet-9)',
        },
    },
});

export const selectIcon = style({
    color: 'var(--violet-11)',
});

export const selectContent = style({
    overflow: 'hidden',
    backgroundColor: 'white',
    borderRadius: '6px',
    boxShadow: '0 10px 38px -10px rgba(22, 23, 24, 0.35), 0 10px 20px -15px rgba(22, 23, 24, 0.2)',
});

export const selectViewport = style({
    padding: '5px',
});

export const selectItem = style({
    fontSize: '13px',
    lineHeight: '1',
    color: 'var(--violet-11)',
    borderRadius: '3px',
    display: 'flex',
    alignItems: 'center',
    height: '25px',
    padding: '0 35px 0 25px',
    position: 'relative',
    userSelect: 'none',
    selectors: {
        '&[data-disabled]': {
            color: 'var(--mauve-8)',
            pointerEvents: 'none',
        },
        '&[data-highlighted]': {
            outline: 'none',
            backgroundColor: 'var(--violet-9)',
            color: 'var(--violet-1)',
        },
    },
});

export const selectLabel = style({
    padding: '0 25px',
    fontSize: '12px',
    lineHeight: '25px',
    color: 'var(--mauve-11)',
});

export const selectItemIndicator = style({
    position: 'absolute',
    left: 0,
    width: '25px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export const selectScrollButton = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '25px',
    backgroundColor: 'white',
    color: 'var(--violet-11)',
    cursor: 'default',
});
