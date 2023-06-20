import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./Item.css";


export const Item = ({id, image, stock , title , description ,price}) => {
  console.log({image, description, title, stock, price, id })

  return (
    <Card className="item">
      <Card.Img variant="top" src={image} className="item__img" />
      
      <Card.Body>

        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Stock: {stock}</Card.Text>
        <Card.Footer>Precio: {price}</Card.Footer>
        <Button variant="blue">
          <Link to={`/item/${id}`} state={{id, image, stock , title , description ,price }}> Ver detalles del producto</Link>
        </Button>
      </Card.Body>
    </Card>
  );
};


