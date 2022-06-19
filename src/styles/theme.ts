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
            sm: '8px',
            md: '16px',
            lg: '32px',
        },
        fontSizes: {
            sm: '1rem',
            md: '1.2rem',
            lg: '1.8rem',
            xl: '2rem',
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
    media: {
        phone: '(min-width: 640px)',
        tablet: '(min-width: 768px)',
        desktop: '(min-width: 1024px)',
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