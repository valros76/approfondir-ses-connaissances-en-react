import { Section, Article, Title, Paragraph } from "@/components";
import "./Product.css";

const Product = () => {
  return (
    <Section
      sectionTitle="Page produit"
      className="product-section"
    >
      <Article className="product-images-viewer">
        <figure className="product-image-primary-container">
          <img src="https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image 1" className="product-image-primary" />
        </figure>
        <div className="product-image-thumbnails-viewer">
          <figure className="product-image-thumbnail-container">
            <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image 2" className="product-image-thumbnail" />
          </figure>
          <figure className="product-image-thumbnail-container">
            <img src="https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image 3" className="product-image-thumbnail" />
          </figure>
          <figure className="product-image-thumbnail-container">
            <img src="https://plus.unsplash.com/premium_photo-1682096261732-88a83f8bb20b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image 4" className="product-image-thumbnail" />
          </figure>
        </div>
      </Article>
      <Article className="product-content">
        <Paragraph>
          <span className="product-category">
            POLO RALPH
          </span>
        </Paragraph>
        <Title
          title="Custom Fit Polo Bear Oxford Shirt"
          levelTitle={2}
          addStyles={{
            justifyContent:"stretch",
            textAlign:"left"
          }}
        />
        <Paragraph className="product-description">
          Blue polo with a classic cut. Made of smooth and soft cotton.
        </Paragraph>
        <Paragraph>
          <span className="promotion-price">99,00€</span> <span className="promotion-tag">-25%</span>
        </Paragraph>
        <Paragraph>
          <span className="initialPrice">132,00€</span>
        </Paragraph>

        <Paragraph>
          <strong>Choisir la taille</strong>
        </Paragraph>
        <div className="product-size-cta-container">
          <button onClick={() => { }}>
            S
          </button>
          <button onClick={() => { }}>
            M
          </button>
          <button onClick={() => { }}>
            L
          </button>
          <button onClick={() => { }}>
            XL
          </button>
          <button onClick={() => { }}>
            XXL
          </button>
        </div>

        <button className="product-cta-add-to-cart">
          Ajouter au panier
        </button>
      </Article>
    </Section>
  );
}

export default Product;