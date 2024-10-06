import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";
const Products = () => {
  // const [Products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const { data: Products, status } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());

    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   console.log(data);
    //   setProducts(data);
    // };
    // fetchProducts();
  }, []);

  if (status === STATUSES.LOADING) {
    return <h2>Loading</h2>;
  } else if (status === STATUSES.ERROR) {
    return <h2>Error in getting products</h2>;
  }
  return (
    <div className="productsWrapper">
      {Products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h2>{product.title}</h2>
          <span>{product.category}</span>
          <h5>{product.price}</h5>
          <button onClick={() => dispatch(add(product))} className="btn">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
