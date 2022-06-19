import { StyledLevelButton } from "./styles";
import { FunctionComponent } from "react";

type LevelButtonProps = {
  code?: string;
  name?: string;
  caption?: string;
};

export const LevelButton: FunctionComponent<LevelButtonProps> = ({
  code,
  name,
  caption,
}) => {
  return (
      <StyledLevelButton href={`/level/${code}`}>
          <span>
            {name} - {caption}
          </span>
      </StyledLevelButton>
  );
};
