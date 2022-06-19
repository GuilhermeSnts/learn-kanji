import { JLPT_LEVELS } from "../../constants";
import { Link } from "react-router-dom";
import { StyledLevelSelect } from "./styles";
import { LevelButton } from "../LevelButton";

export const LevelSelect = () => {
  return (
    <StyledLevelSelect>
      <h2>Select your level to start</h2>

      {JLPT_LEVELS.map((level) => (
        <LevelButton
          caption={level.caption}
          code={level.code}
          key={level.code}
          name={level.name}
        />
      ))}
    </StyledLevelSelect>
  );
};
