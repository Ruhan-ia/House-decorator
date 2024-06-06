import React from 'react';

const Product = ({product}) => {

    const  {image, id, ratings, price, name} = product;
    return (
        <div>
             <div className="card w-auto md:w-44 lg:w-60  glass transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-700">
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
          <p>{ratings}</p>
          <div className="card-actions justify-end">
            <button className="btn w-full hover:bg-black rounded-full"><span className="text-rose-400 font-roboto sm:text-xl md:text-sm lg:text-xl sm:font-normal md:font-semibold lg:font-semibold">Buy now!</span></button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Product;