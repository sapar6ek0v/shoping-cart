import React, {useState} from 'react';
import {useQuery} from "react-query";
import {Drawer, LinearProgress, Grid} from "@material-ui/core";
import {Wrapper} from "./App.styles";
import Item from "./components/Item/Item";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";

export interface CartItemType {
    id: number,
    description: string,
    title: string,
    category: string,
    price: number,
    image: string,
    amount: number
}

const getProducts = async (): Promise<CartItemType[]> =>
    await (await fetch('https://fakestoreapi.com/products')).json()

const App: React.FC = () => {
    const [openCart, setCartOpen] = useState<boolean>(false)
    const [cartItems, setCartItems] = useState([] as CartItemType[])
    const {data, error, isLoading} = useQuery<CartItemType[]>('products', getProducts)

    const getTotalItems = (items: CartItemType[]) => {
        return items.reduce((acc, it) => acc += it.amount, 0 )
    }

    const handleAddToCart = (clickedItem: CartItemType) => {
        setCartItems(prev => {
            const isItemInCart = prev.find(it => it.id === clickedItem.id)

            if (isItemInCart) {
                return prev.map(item => (
                    item.id == clickedItem.id
                    ? {...item, amount: item.amount + 1}
                        : item
                ))
            }

            return [...prev, {...clickedItem, amount: 1}]
        })
    }

    const handleRemoveFromCart = (id: number) => {
        setCartItems(prev => (
            prev.reduce((acc, it) => {
                if (it.id === id) {
                    if (it.amount === 0) return acc
                    return [...acc, {...it, amount: it.amount - 1}]
                } else {
                    return [...acc, it]
                }
            }, [] as CartItemType[])
        ))
    }

    if (isLoading) return <LinearProgress/>
    if (error) return <div>Something went wrong ...</div>

    return (
        <>
            <Header
                cartItems={cartItems}
                setCartOpen={setCartOpen}
                getTotalItems={getTotalItems}
            />
            <Wrapper>
                <Drawer anchor="right" open={openCart} onClose={() => setCartOpen(false)}>
                    <Cart
                        cartItems={cartItems}
                        onAdd={handleAddToCart}
                        onRemove={handleRemoveFromCart} />
                </Drawer>

                <Grid container spacing={3}>
                    {
                        data?.map(it => {
                            return (
                                <Grid item key={it.id} xs={12} sm={4}>
                                    <Item item={it} onAddToCart={handleAddToCart} />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Wrapper>
        </>
    );
}

export default App;
