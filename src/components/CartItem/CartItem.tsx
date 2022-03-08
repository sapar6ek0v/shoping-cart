import React from 'react';
import {Button} from "@material-ui/core";
import {Wrapper} from "./CartItem.styles";
import {CartItemType} from "../../App";

type Props = {
    item: CartItemType,
    onAdd: (clickedItem: CartItemType) => void,
    onRemove: (id: number) => void
}

const CartItem: React.FC<Props> = ({item, onAdd, onRemove}) => {
    return (
        <Wrapper>
            <div>
                <h3>{item.title}</h3>
                <div className='info'>
                    <p>Price: {item.price}$</p>
                    <p>Total: {(item.amount * item.price).toFixed(2)}$</p>
                </div>
                <div className='buttons'>
                    <Button
                        size='small'
                        variant='contained'
                        disableElevation
                        onClick={() => onRemove(item.id)}
                    >
                        -
                    </Button>
                    <p>{item.amount}</p>
                    <Button
                        size='small'
                        variant='contained'
                        disableElevation
                        onClick={() => onAdd(item)}
                    >
                        +
                    </Button>
                </div>
            </div>
            <img src={item.image} alt={item.title}/>
        </Wrapper>
    );
};

export default CartItem;