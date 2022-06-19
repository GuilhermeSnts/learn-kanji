import { StyledWelcome } from "./styles";

export const Welcome = () => {
  return (
    <StyledWelcome>
      <h1>Welcome to Learn Kanji</h1>
      <p>
        Learn kanji is an open source project, it's under development during my
        personal journey to learn japanese. You can colaborate developing some
        features, reporting bugs, or giving ideas.
      </p>
      <br />
      <a href="https://github.com/GuilhermeSnts/learn-kanji">
        Click here to go to the github repository
      </a>
    </StyledWelcome>
  );
};
