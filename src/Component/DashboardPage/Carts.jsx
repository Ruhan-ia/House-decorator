import React from 'react';
import { GrAdd } from 'react-icons/gr';
import Swal from 'sweetalert2';
import useCart from '../Hooks/useCart';

const Carts = ({product}) => {
    const [, refetch] = useCart();
  const { image,name,rating,price, _id } = product;
  console.log(product);

  const handleDelete = product =>{
   
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://home-decoration-tool-server.vercel.app/dashBoard/cart/${product._id}`,{

        method:'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data)
          if(data.deletedCount > 0){
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
        })
        
        
       
      }
    });
  }
    return (
        <div className="card w-auto bg-base-100 shadow-xl">
        <div className="avatar">
          <div className="w-auto rounded-xl">
            <img src={image}/>
          </div>
        </div>{" "}
        <div className="card-body">
          <h2 className="card-title font-roboto font-bold">{name}</h2>
  
          <p className="font-roboto font-semibold ">Ratings: <span className="text-green-600 font-semibold">{rating}</span></p>
          <p className="text-red-500 font-roboto ">${price}</p>
          
          <div className="card-actions flex justify-end ">
          <button  className="btn btn-outline "><GrAdd /></button>
  
            <button onClick={() => handleDelete(product)} className="btn btn-outline btn-warning">Remove</button>
          </div>
        </div>
      </div>
    );
};

export default Carts;