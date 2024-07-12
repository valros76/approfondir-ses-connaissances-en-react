import { useState, useEffect } from "react";
import { Title, Paragraph } from "@/components";
import "./CitationCard.css";

const CitationCard = () => {

  const [citation, setCitation] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const fetchCitation = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://api.quotable.io/random");
      if (!response.ok) {
        throw new Error("La réponse de l'API n'est pas ok.");
      }
      const data = await response.json();
      setCitation(data);
      deferSetLoading(false);
    }
    catch (error) {
      setError("Une erreur s'est produite lors de la récupération des données.");
      setLoading(false);
    }
  }

  const deferSetLoading = (state = false, time = 1000) => {
    setTimeout(() => {
      setLoading(state);
    }, time);
  }

  const sayHello = (name) => {
    alert(`Bonjour ${name.toUpperCase()} !`);
  }

  useEffect(() => {
    fetchCitation();
  }, []);

  return (
    <>
      {loading && (
      <div className="citation-card">
          <figure className="avatar-container">
            <img src="https://placeskull.com/96/96" alt="image de la citation" className="avatar" />
          </figure>
          <div className="citation-card-content">
            <Title
              title="Charge Ment"
              levelTitle="h2"
            />
            <Paragraph>
              <small>@trollingtime</small>
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos nihil ut esse nostrum quibusdam corporis facere, itaque illo ipsum!
            </Paragraph>
          </div>
        </div>
      )
      }
      {error && (
      <div className="citation-card error">
          <figure className="avatar-container">
            <img src="https://placeskull.com/96/96" alt="image de la citation" className="avatar" />
          </figure>
          <div className="citation-card-content">
            <Title
              title="ERREUR"
              levelTitle="h2"
            />
            <Paragraph>
              <small>@death_error</small>
            </Paragraph>
            <Paragraph>
              {error}
            </Paragraph>
          </div>
        </div>
      )
      }
      {(citation && !loading && !error) && (
        <div className="citation-card">
          <figure className="avatar-container">
            <img src="https://placeskull.com/96/96" alt="image de la citation" className="avatar" />
          </figure>
          <div className="citation-card-content">
            <Title
              title={citation?.author ?? "Jean Peuxplus"}
              levelTitle="h2"
            />
            <Paragraph>
              <small>@{citation?.authorSlug ?? "jeanpeuxplus"}</small>
            </Paragraph>
            <Paragraph>
              {citation?.content ?? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos nihil ut esse nostrum quibusdam corporis facere, itaque illo ipsum!"}
            </Paragraph>
            <div className="card-cta-container">
              <button className="card-cta primary" onClick={() => fetchCitation()}>
                Génération
              </button>
              <button className="card-cta secondary" onClick={() => sayHello(citation?.author ?? "John Doe")}>
                Bonjour !
              </button>
            </div>
          </div>
        </div>
      )
      }
    </>
  );
}

export default CitationCard;