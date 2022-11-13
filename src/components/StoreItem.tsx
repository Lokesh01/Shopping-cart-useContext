import React from "react";
import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";
import { currencyFormatter } from "../utilities/currencyFormatter";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const {getItemQty,increaseQty,decreaseQty,removeFromCart,cartQty,cartItems} = useShoppingCart();
  const qty = getItemQty(id)
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "contain" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{currencyFormatter(price)}</span>
        </Card.Title>

        <div className="mt-auto">
          {qty === 0 ? (
            <Button className="w-100" onClick={() => increaseQty(id)}>
              + Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => increaseQty(id)}>+</Button>

                <div>
                  <span className="fs-3">{qty}</span> in Cart
                </div>

                <Button onClick={() => decreaseQty(id)}>-</Button>
              </div>

              <Button
                variant="danger"
                size="sm"
                onClick={() => removeFromCart(id)}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
