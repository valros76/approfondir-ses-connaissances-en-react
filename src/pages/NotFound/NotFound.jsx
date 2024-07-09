import {Title, Paragraph} from "@/components";
import "./NotFound.css";

const NotFound = () => {
  return(
    <div>
      <Title
        title="Erreur 404"
        levelTitle={2}
      />
      <Paragraph>
        La ressource demandée est introuvable...
      </Paragraph>
    </div>
  );
}

export default NotFound;