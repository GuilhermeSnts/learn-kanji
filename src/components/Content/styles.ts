import { styled } from "@/styles/theme";

export const StyledContent = styled("main", {
    width: '100%',
    height: 'calc(100vh - 120px)',
    padding: '$md',
    backgroundColor: '$base',
    transition: '$sm',
    overflowY: 'auto'
});