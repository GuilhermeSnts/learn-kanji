import { styled } from "@/styles/theme";

export const StyledLevelButton = styled("a", {
  borderRadius: "$sm",
  height: "200px",
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
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  div: {
    fontWeight: "bold",
  },

  "&:hover": {
    boxShadow: "$lg",
    transform: "translateY(-0.25em)",
  },
  "@tablet": {
    width: "300px",
  },

  variants: {
    availability: {
      available: {
        backgroundColor: "$accent",
        div: {
          color: "$base",
        },
      },
      unavailable: {
        backgroundColor: "#base",
        div: {
          color: "$accent",
        },
      },
    },
  },
});
