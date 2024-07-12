import "./Article.css";

const Article = ({ className, children }) => {
  return(
    <article className={className}>
      {children}
    </article>
  );
}

export default Article;