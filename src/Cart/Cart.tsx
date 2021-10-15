import CartItem from '../CartItem/CartItem'
//styles
import { Wrapper } from './Cart.styles'
//
import { CartItemType } from '../App'

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart:(id: number) => void
}

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {

    const calculateTotal = (item:CartItemType[]) => 
        item.reduce((ack: number, item) => ack + item.amount * item.price, 0)
    return (
        <Wrapper>
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? <p>No items in cart.</p> : null}
            {cartItems.map(item => (
                <CartItem
                key = {item.id}
                item = {item}
                addToCart = {addToCart}
                removeFromCart = {removeFromCart}


                />
            ))}
            <div>
                <h2>Your total: ${calculateTotal(cartItems).toFixed(2)}</h2>
            </div>
        </Wrapper>
    )
}

export default Cart;