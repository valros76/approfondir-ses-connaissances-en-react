import {Title, Paragraph} from "@/components";
import "./Card.css";

const Card = ({ props }) => {
  return(
    <div className="card">
      {props?.avatarUrl && (
        <div className="card-image-container">
        <img src={props?.avatarUrl} alt={props?.title} className="card-image"/>
        </div>
        )}
      <div className="card-content">
      <Title
        title={props?.title}
        levelTitle={2}
        className="card-title"
      />
      {props?.description && (<Paragraph className="card-description">
        {props?.description}
      </Paragraph>)}
      {props?.location && (<Paragraph>
        🗺️ {props?.location}
      </Paragraph>)
      }
      {props?.isLikeable && (
        <button className="card-cta-like">
          {props?.isLiked ? "💖" : "🤍"}
        </button>
      )}
      </div>
    </div>
  );
}

export default Card;