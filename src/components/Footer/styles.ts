import { styled } from "@/styles/theme";

export const StyledFooter = styled("footer", {
    padding: '$md',
    width: '100%',
    background: '$base',
    color: '$text',
    height: '60px',
    textAlign: 'center',
    transition: '$sm',
    a: {
        textDecoration: 'underline',
        color: '$secondary'
    },
});