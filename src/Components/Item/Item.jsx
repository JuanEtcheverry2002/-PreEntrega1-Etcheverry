import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./Item.css";


export const Item = ({img, description, title, stock, price }) => {
  return (
    <Card className="item">
      <Card.Img variant="top" src={img} className="item__img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text> {stock}</Card.Text>
        <Card.Footer>Precio: {price}</Card.Footer>
        <Button variant="blue">
          <Link to={"/item/1"}> Comprar</Link>
        </Button>
      </Card.Body>
    </Card>
  );
};