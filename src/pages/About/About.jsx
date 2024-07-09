import { Section, Article, Title, Paragraph } from "@/components";
import "./About.css";

const About = () => {
  return (
    <Section sectionTitle="À propos de l'application">
      <Article>
        <Title
          title="Développeur de l'application"
          levelTitle={3}
        />
        <Paragraph>
          Nom du développeur : Dufrène Valérian
        </Paragraph>
        <Paragraph>
          Gérant de {"l'entreprise"} Webdevoo depuis Mars 2019 et de {"l'organisme"} de Webdevoo Formation depuis Juin 2023.
        </Paragraph>
        <Paragraph>
          Spécialités (liste non exhaustive) : PHP, HTML, CSS, Javascript, React, Angular, React Native, SolidJS, Remix, Lua, Python, Prestashop, Wordpress, Thirty Bees, ...
        </Paragraph>
      </Article>

      <Article>
        <Title
          title="Technologies utilisées"
          levelTitle={3}
        />
        <Paragraph>
          Cette application a été développée en React (version 18.3.1).
        </Paragraph>
        <Paragraph>
          Le routage est géré par la librairie React Router.
        </Paragraph>
        <Paragraph>
          Aucune librairie UI {"n'a"} été implémentée sur {"l'application"}.
        </Paragraph>
      </Article>
    </Section>
  );
}

export default About;