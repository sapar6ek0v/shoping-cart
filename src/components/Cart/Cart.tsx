import React from 'react'
import {Wrapper} from './Cart.styles'
import {CartItemType} from "../../App";
import CartItem from "../CartItem/CartItem";

type Props = {
    cartItems: CartItemType[],
    onAdd: (clickedItems: CartItemType) => void,
    onRemove: (id: number) => void
}

const Cart: React.FC<Props> = ({cartItems, onAdd, onRemove}) => {
    const totalAmount = (items: CartItemType[]) => {
        return items.reduce((acc: number, it) => (
            acc + it.amount * it.price
        ), 0)
    }

    return (
        <Wrapper>
            <h2>You shopping cart</h2>
            {cartItems.length === 0 ? <p>No item in cart.</p> : null}
            {
                cartItems.map(it => {
                    return <CartItem
                               key={it.id}
                               item={it}
                               onAdd={onAdd}
                               onRemove={onRemove}
                            />
                })
            }
            <h2>Total: {totalAmount(cartItems).toFixed(2)}</h2>
        </Wrapper>
    );
};

export default Cart;