import { createStitches } from '@stitches/react'

export const { theme, styled, css } = createStitches({
    theme: {
        colors: {
            main: '##fffffe',
            text: '#232323',
            primary: '#f45d48',
            secondary: '#078080',
            base: '#f8f5f2',
        },
        space: {
            1: '8px',
            2: '16px',
            3: '32px',
        },
        fontSizes: {
            1: '1rem',
            2: '2rem',
            3: '3rem',
        },
        fonts: {
            untitled: 'Untitled Sans, apple-system, sans-serif',
            mono: 'Söhne Mono, menlo, monospace',
        },
        fontWeights: {},
        lineHeights: {},
        letterSpacings: {},
        sizes: {},
        borderWidths: {
            sm: '8px',
            md: '16px'
        },
        borderStyles: {},
        radii: {},
        shadows: {},
        zIndices: {},
        transitions: {},
    },
});