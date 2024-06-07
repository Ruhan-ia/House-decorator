import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useCart = () => {
    const {user} = useContext(AuthContext)

    const {refetch, data: cart = []} = useQuery({
        queryKey:[ 'cart', user?.email ],
       
        queryFn:async () =>{
            const res = await fetch(`https://home-decoration-tool-server.vercel.app/dashBoard/cart?email=${user?.email}`) 
            
            
            return res.json()
        }
    })
    return [cart, refetch]
};

export default useCart;