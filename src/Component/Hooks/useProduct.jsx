import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useProduct = () => {
    const {refetch, data: products = []} = useQuery({
        queryKey:[ 'product' ],
        queryFn:async () =>{
            const res = await fetch('https://home-decoration-tool-server.vercel.app/products')
            return res.json()
        }

    })
    return [products, refetch]
};

export default useProduct;