const ItemDetail = ({ product }) => {
    return (
      <div>
        <h1>{product.title}</h1>
        <img src={product.image} alt={product.title} />
        <p>{product.description}</p>
        <p>Precio: {product.price}</p>
      </div>
    );
  };
  