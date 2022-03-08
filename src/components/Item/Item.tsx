import React from 'react';
import {Wrapper} from "./Item.styles";
import {CartItemType} from "../../App";
import {Button} from "@material-ui/core";

type Props = {
    item: CartItemType,
    onAddToCart: (clickedItem: CartItemType) => void
}

const Item: React.FC<Props> = ({item, onAddToCart}) => {
    return (
        <Wrapper>
            <img src={item.image} alt={item.title}/>
            <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <h3>{item.price} $</h3>
            </div>
            <Button onClick={() => onAddToCart(item)}>Add to cart</Button>
        </Wrapper>
    );
};

export default Item;