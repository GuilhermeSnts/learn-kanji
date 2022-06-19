import { lessons } from "../../lessons";
import { StyledLessonSelect, StyledList } from "./styles";
import { LessonButton } from "../LessonButton";

export const LessonSelect = () => {
  return (
    <StyledLessonSelect>
      <h2>Select a lesson</h2>

      <StyledList>
        {lessons.map((lesson) => (
          <LessonButton id={lesson.id} key={lesson.id} />
        ))}
      </StyledList>
    </StyledLessonSelect>
  );
};
