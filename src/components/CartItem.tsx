import React from "react";
import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";
import storeItems from "../data/items.json";
import { currencyFormatter } from "../utilities/currencyFormatter";

type cartItemProps = {
  id: number;
  qty: number;
};

const CartItem = ({ id, qty }: cartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((it) => it.id === id);
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item?.imgUrl}
        alt="item-image"
        className="shadow-sm"
        style={{ width: "125px", height: "75px", objectFit: "contain" }}
      />

      <div className="me-auto">
        <div>
          {item?.name}{" "}
          {qty > 1 && (
            <span className="text-muted" style={{ fontSize: ".8rem" }}>
              x {qty}
            </span>
          )}
        </div>

        <div className="text-muted" style={{ fontSize: ".9rem" }}>
          {currencyFormatter(item?.price || 0)}
        </div>
      </div>

      <div className="text-muted" style={{ fontSize: ".9rem" }}>
        {currencyFormatter((item?.price || 0) * qty)}
      </div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item?.id || 0)}
      >
        &times;
      </Button>
    </Stack>
  );
};

export default CartItem;
