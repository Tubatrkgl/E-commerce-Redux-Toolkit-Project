import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCartsTotal } from '../redux/cartSlice';
import CartComp from '../components/cart/CartComp';

const Cart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);

    useEffect(() => {
        dispatch(getCartsTotal());
    }, [dispatch]);

    return (
        <div>
            {carts?.length > 0 ? (
                <div>
                    {carts.map((cart, i) => (
                        <CartComp key={i} cart={cart} />
                    ))}
                    <div className='flex justify-end text-xl'>TOTAL: {totalAmount}</div>
                </div>
            ) : (
                <div>Kartınız Boş...</div>
            )}
        </div>
    );
};

export default Cart;
