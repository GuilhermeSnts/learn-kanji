import { FunctionComponent } from "react";
import { LeftSection, RightSection, StyledHeader } from "./styles";
import SunImage from "@/assets/images/sun.png";
import MoonImage from "@/assets/images/moon.png";

type HeaderProps = {
  onThemeChange: (isDark: boolean) => void;
  isDarkTheme: boolean;
};

export const Header: FunctionComponent<HeaderProps> = ({
  onThemeChange,
  isDarkTheme,
}) => {
  return (
    <StyledHeader>
      <LeftSection>
        <b>Learn Kanji</b>
      </LeftSection>

      <RightSection>
        <button onClick={() => onThemeChange(!isDarkTheme)}>
          {isDarkTheme ? (
            <img src={SunImage} alt="set to light mode" />
          ) : (
            <img src={MoonImage} alt="set to dark mode" />
          )}
        </button>
      </RightSection>
    </StyledHeader>
  );
};
