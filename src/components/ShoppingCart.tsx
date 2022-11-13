import React from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";
import { currencyFormatter } from "../utilities/currencyFormatter";
import CartItem from "./CartItem";
import storeItems from "../data/items.json";

type shoppingCartProps = {
  isOpen: boolean;
};

const ShoppingCart = ({ isOpen }: shoppingCartProps) => {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body>
        <Stack>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total:{" "}
            {currencyFormatter(
              cartItems.reduce((total, currItem) => {
                const item = storeItems.find((it) => it.id === currItem.id);
                const itemTotal = (item?.price || 0) * currItem.qty;

                return total + itemTotal;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
