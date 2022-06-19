import { styled } from "@/styles/theme";

export const StyledHeader = styled("header", {
    padding: '$2',
    width: '100%',
    height: '60px',
    background: '$base',
    color: '$text',
    a: {
        textDecoration: 'underline',
        color: '$secondary'
    },
});