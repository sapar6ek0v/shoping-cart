import React from 'react';
import {Badge} from "@material-ui/core";
import {AddShoppingCart} from "@material-ui/icons";
import {StyledBtn, Wrapper} from "./Header.styles";
import {CartItemType} from "../../App";

type Props = {
    setCartOpen: (item: boolean) => void,
    getTotalItems: (cartItems: CartItemType[]) => void
    cartItems: CartItemType[]
}

const Header: React.FC<Props> = ({setCartOpen, getTotalItems, cartItems}) => {
    return (
        <Wrapper>
            <StyledBtn onClick={() => setCartOpen(true)}>
                <Badge badgeContent={() => getTotalItems(cartItems)} color='error'>
                    <AddShoppingCart />
                </Badge>
            </StyledBtn>
        </Wrapper>
    );
};

export default Header;