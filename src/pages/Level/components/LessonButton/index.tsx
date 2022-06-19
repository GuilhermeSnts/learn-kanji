import { StyledLessonButton } from "./styles";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

type LessonButtonProps = {
  id?: number;
};

export const LessonButton: FunctionComponent<LessonButtonProps> = ({ id }) => {
  return (
    <StyledLessonButton>
      <Link to={`/lesson/${id}`}>{id}</Link>
    </StyledLessonButton>
  );
};
