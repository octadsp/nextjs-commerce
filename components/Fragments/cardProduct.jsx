import React from "react";
import Button from "../Elements/Button/index";

function cardProduct() {
  const products = [
    {
      title: "Laptop Rog",
      description: "Laptop Baru dari ROG",
      price: "20000",
      qty: "20",
      image: "https://placehold.co/600x400",
    },
    {
      title: "Laptop Rog",
      description: "Laptop Baru dari ROG",
      price: "20000",
      qty: "20",
      image: "https://placehold.co/600x400",
    },
    {
      title: "Laptop Rog",
      description: "Laptop Baru dari ROG",
      price: "20000",
      qty: "20",
      image: "https://placehold.co/600x400",
    },
    {
      title: "Laptop Rog",
      description: "Laptop Baru dari ROG",
      price: "20000",
      qty: "20",
      image: "https://placehold.co/600x400",
    },
  ];

  return (
    <>
      {products.map((product, index) => (
        <div key={index}>
          <div>
            <img src={product.image} alt={product.title} />
          </div>
          <div className="flex flex-col py-3">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <p>Qty: {product.qty}</p>
          </div>
          <div>
            <Button type={"btn"} name={"Add to Cart"} color={"slate-50"} />
          </div>
        </div>
      ))}
    </>
  );
}

export default cardProduct;
