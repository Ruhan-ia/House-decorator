import React from 'react';
import Carts from './Carts';
import useCart from '../Hooks/useCart';

const Cart = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, toy) => toy.price + sum, 0)
    return (
        <div>
        <div className='flex justify-center items-center my-10 gap-5'>
       <h3 className='text-green-600 font-roboto font-bold text-4xl'>Total amount:  <span className='text-3xl text-red-500  font-semibold font-roboto'>${total}</span></h3>
        <div className="card-actions justify-end">
    <button className="btn btn-outline btn-secondary">Pay Now</button>
  </div>
  </div>
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 text-center mx-auto'>
       {
        cart.map(product => <Carts key={product._id} product={product}></Carts>)
       }
    </div>
    </div>
    );
};

export default Cart;