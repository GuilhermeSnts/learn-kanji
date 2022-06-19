import { styled } from "@/styles/theme";

export const StyledLessonButton = styled("a", {
  borderRadius: "$xl",
  boxShadow: "$sm",
  marginBottom: "$md",
  transition: "$1",
  cursor: "pointer",
  display: "flex",
  backgroundColor: "$accent",

  a: {
    width: "100%",
    height: "100%",
    textDecoration: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "$lg",
    color: "$base",
  },

  "&:hover": {
    boxShadow: "$lg",
    transform: "translateY(-0.25em)",
  },

  height: "120px",
  width: "120px",
  "@tablet": {
    height: "80px",
    width: "80px",
  },
});
