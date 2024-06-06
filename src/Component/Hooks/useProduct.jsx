import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useProduct = () => {
    const {refetch, data: products = []} = useQuery({
        queryKey:[ 'toy' ],
        queryFn:async () =>{
            const res = await fetch('http://localhost:5000/products')
            return res.json()
        }

    })
    return [products, refetch]
};

export default useProduct;