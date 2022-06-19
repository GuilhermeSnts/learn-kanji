import { StyledLevelButton } from "./styles";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

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
    <StyledLevelButton>
      <Link to={`/level/${code}`}>
        <span>
          {name} - {caption}
        </span>
      </Link>
    </StyledLevelButton>
  );
};
