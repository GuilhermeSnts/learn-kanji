import { styled } from "@/styles/theme";

export const StyledLessonSelect = styled("section", {
  color: "$primary",
  marginBottom: "$md",
  marginTop: "$lg",
  h2: {
    marginBottom: "$lg",
    fontSize: "$lg",
    fontWeight: "normal",
  },
});

export const StyledList = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  "@tablet": {
    flexDirection: "row",
    gap: "$md"
  },
});
