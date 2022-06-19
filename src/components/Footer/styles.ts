import { styled } from "@/styles/theme";

export const StyledFooter = styled("footer", {
    padding: '$2',
    width: '100%',
    background: '$base',
    color: '$text',
    height: '60px',
    a: {
        textDecoration: 'underline',
        color: '$secondary'
    },
});