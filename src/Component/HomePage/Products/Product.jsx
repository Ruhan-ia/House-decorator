import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useCart';

const Product = ({product}) => {
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();

    const  {image, _id, rating, price, name} = product;
    const handleCart = (product) => {
      if (user && user.email) {
        const product = {
          image,
          ProductID: _id,
          name,
          rating,
          price,
          email: user.email,
        };
        fetch("https://home-decoration-tool-server.vercel.app/dashBoard/cart", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(product),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              refetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: " successfully added to cart!!",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    }
    return (
        <div>
             <div className="card w-auto md:w-44 lg:w-60 h-full    glass transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-700">
      <div>
      <div className="avatar ">
          <div className="w-auto  rounded">
            <img  src={image} />
          </div>
      </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{price}</p>
          <p>{rating}</p>
          <div className="card-actions justify-end">
           {
           user ? <> <button onClick={()=>handleCart(product)} className="btn w-full hover:bg-black rounded-full">
            <Link to="/dashBoard/cart"><span className="text-rose-400 font-roboto sm:text-xl md:text-sm lg:text-xl sm:font-normal md:font-semibold lg:font-semibold">Buy now!</span></Link>
            </button>
           </>:<>
              
              <Link
                to="/login"
                className="btn w-full hover:bg-black rounded-full">
                 <span className="text-rose-400 font-roboto sm:text-xl md:text-sm lg:text-xl sm:font-normal md:font-semibold lg:font-semibold">Buy now!</span>
              
                
              </Link>
            </>}
          </div>
        </div>
      </div>
        </div>
    );
};

export default Product;