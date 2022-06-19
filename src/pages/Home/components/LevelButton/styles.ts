import { styled } from "@/styles/theme";

export const StyledLevelButton = styled("a", {
  backgroundColor: "$accent",
  borderRadius: "$sm",
  height: "200px",
  color: "$primary",
  boxShadow: "$sm",
  marginBottom: "$md",
  transition: "$1",
  cursor: "pointer",
  display: "flex",

  a: {
    width: "100%",
    height: "100%",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  span: {
    color: "$base",
    fontWeight: "bold",
  },

  "&:hover": {
    boxShadow: "$lg",
    transform: "translateY(-0.25em)",
  },
  "@desktop": {
    maxWidth: "300px",
  },
});
