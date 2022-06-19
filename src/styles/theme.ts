import { createStitches, createTheme } from '@stitches/react'

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
            2: '1.2rem',
            3: '1.8rem',
            4: '2rem',
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
        radii: {
            sm: '8px',
            md: '16px'
        },
        shadows: {
            sm: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
            md: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
            lg: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
        },
        zIndices: {},
        transitions: {
            1: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
        },
    },
});

export const darkTheme = createTheme({
    colors: {
        main: '#232323',
        text: '#f8f5f2',
        primary: '#f45d48',
        secondary: '#078080',
        base: '#1c1c1c',
    },
  });