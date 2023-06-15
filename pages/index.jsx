import Navbar from "../components/Fragments/navbar.jsx";
import Button from "../components/Elements/Button/index.jsx";

export default function Home() {
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
    <div className="px-20 py-10">
      <nav>
        <Navbar />
      </nav>

      <section>
        <div className="flex flex-wrap gap-10 justify-center mt-10">
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
                <Button name={"Add to Cart"} color={"slate-50"} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
