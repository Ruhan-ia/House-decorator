import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useUser = () => {
    const {refetch, data: users = []} = useQuery({
        queryKey:[ 'users' ],
        
            queryFn:async () =>{
                const res = await fetch('https://home-decoration-tool-server.vercel.app/dashBoard/user') 
                
                
                return res.json()
            }

    })
    return [users, refetch]
};

export default useUser;