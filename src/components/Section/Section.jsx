import {Title} from "@/components";
import "./Section.css";

const Section = ({ sectionTitle, className, children }) => {
  return(
    <section className={className}>
      {sectionTitle !== "" && <Title
        title={sectionTitle}
        levelTitle={2}
      />}
      {children}
    </section>
  );
}

export default Section;