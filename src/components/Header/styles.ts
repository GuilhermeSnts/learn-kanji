import { styled } from "@/styles/theme";

export const StyledHeader = styled("header", {
  padding: "$2",
  width: "100%",
  height: "60px",
  background: "$base",
  color: "$text",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  transition: "$1",
});

export const LeftSection = styled("div", {
  flexGrow: 1,
});

export const RightSection = styled("div", {
  width: "fit-content",

  button: {
    borderRadius: "$sm",
    backgroundColor: "$base",
    padding: "$1",
    border: "none",
    cursor: "pointer",
    boxShadow: "$sm",
    transition: "$1",
    width: "2.5rem",
    height: "2.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    img: {
      width: "1.2rem",
      height: "1.2rem",
    },
    "&:hover": {
      boxShadow: "$md",
    },
  },
});
