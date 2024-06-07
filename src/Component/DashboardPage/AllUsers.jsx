import React from 'react';
import Users from './Users';
import useUser from '../Hooks/useUser';

const AllUsers = () => {
    
    const [users] = useUser();
    return (
        <div className="overflow-x-auto ">
        <table className="table table-lg  ">
        <thead>
      <tr className='font-roboto font-bold text-xl  '>
        <th>Photo</th>
        <th>Name</th>
        <th>Email</th>
        
       
        
      </tr>
    </thead>
           { 
           
           users.map(user => <Users key={user._id} user= {user}></Users>) 
           }
         
    {/* foot */}
    
    
  </table>
</div>
    );
};

export default AllUsers;