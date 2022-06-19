import { StyledLevelButton } from "./styles";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

type LevelButtonProps = {
  code?: string;
  name?: string;
  caption?: string;
  isAvailable?: boolean;
};

export const LevelButton: FunctionComponent<LevelButtonProps> = ({
  code,
  name,
  caption,
  isAvailable,
}) => {
  return (
    <StyledLevelButton availability={isAvailable ? "available" : "unavailable"}>
      <Link to={`/level/${code}`}>
        <div>{name}</div>
        {!isAvailable && <div className="availability">unavailable</div>}
      </Link>
    </StyledLevelButton>
  );
};
