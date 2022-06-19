import { JLPT_LEVELS } from "../../constants";
import { Link } from "react-router-dom";
import { StyledLevelSelect, StyledList } from "./styles";
import { LevelButton } from "../LevelButton";

export const LevelSelect = () => {
  return (
    <StyledLevelSelect>
      <h2>Select your level to start</h2>

      <StyledList>
        {JLPT_LEVELS.map((level) => (
          <LevelButton
            code={level.code}
            key={level.code}
            name={level.name}
            isAvailable={level.isAvailable}
          />
        ))}
      </StyledList>
    </StyledLevelSelect>
  );
};
