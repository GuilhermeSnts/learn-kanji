import { styled } from "@/styles/theme";

export const StyledWelcome = styled("section", {
  color: "$primary",
  marginBottom: "$md",
  h1: {
    marginBottom: "$sm",
    fontSize: "$xl",
  },
  a: {
    color: "$accent",
  },
});
