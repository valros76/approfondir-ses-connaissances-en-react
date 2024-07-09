import {Section, Article, Title, Paragraph} from "@/components";
import "./Home.css";

const Home = () => {
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
        </Article>
      </Section>
    </>
  );
}

export default Home;