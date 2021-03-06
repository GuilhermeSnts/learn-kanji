import { styled } from "@/styles/theme";

export const StyledLevelSelect = styled("section", {
  color: "$primary",
  marginBottom: "$md",
  marginTop: "$lg",
  h2: {
    marginBottom: "$md",
    fontSize: "$lg",
    fontWeight: "normal",
  },
});
export const StyledList = styled("div", {
  display: "flex",
  flexDirection: "column",

  "@tablet": {
    flexDirection: "row",
    gap: "$md"
  },
});
