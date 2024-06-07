import useProduct from "../../Hooks/useProduct";
import Product from "./Product";

const Products = () => {

    const [products, ] =useProduct();
    
  return (
    
    <section className="mt-20">
      <h1 className="text-center py-4">
        <span className="py-2 border-b-2 border-b-green-700">
          <span className="text-5xl  font-thin text-green-500 font-roboto ">
            Our
          </span>{" "}
          <span className="font-bold text-orange-600 text-3xl">-</span>
          <span className="font-bold text-3xl text-green-600">-</span>{" "}
          <span className="text-5xl  font-thin text-orange-500 font-roboto">
            Collections
          </span>
        </span>
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 container mx-auto justify-items-center">
            {
                products.map(product =>  <Product key={product.id} product={product}></Product>)
            }
      </div>

     
    </section>
  );
};

export default Products;
