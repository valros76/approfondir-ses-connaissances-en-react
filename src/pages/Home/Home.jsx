import {Section, Article, Title, Paragraph} from "@/components";
import "./Home.css";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext/ThemeContext";

const Home = () => {

  const {darkMode, switchDarkMode} = useContext(ThemeContext);

  return(
    <>
      <Section
      sectionTitle="Mon application React">
        <Article>
          <Title
            title="Mon premier article"
            levelTitle={3}
          />
          <Paragraph>
            Voici le premier article sur le projet fil rouge de la formation {`"Appronfondir ses connaissances en React"`}.
          </Paragraph>

        <button onClick={() => switchDarkMode()}>
          {darkMode ? "☀️" : "🌙"}
        </button>

        </Article>
      </Section>
    </>
  );
}

export default Home;