import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./Item.css";


export const Item = ({id, img, stock , title , description ,price }) => {

  return (
    <Card className="item">
      <Card.Img variant="top" src={"." + img} className="item__img" />
      <Card.Body>

        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text> {stock}</Card.Text>
        <Card.Footer>Precio: {price}</Card.Footer>
        <Button variant="blue">
          <Link to={`/item/${id}`}> Ver detalles del producto</Link>
        </Button>
      </Card.Body>
    </Card>
  );
};





/*
return (


  <article className="CartItem">
    <header className="Header">
      <h2 className="ItemHeader">
        {title}
      </h2>
    </header>
    <picture>
      <img src={img} alt={title} className="ItemImg"/>
    </picture>
    <section>
      <p className="info">
        Precio: ${price}
      </p>
      <p className="info">
        Stock disponible : ${stock}
      </p>

      <footer className="ItemFooter">
        <Link to= {
        `/item/${id}`} className="option"></Link>
      </footer>
    </section>









  </article>
)

*/