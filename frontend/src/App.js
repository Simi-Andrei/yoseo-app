import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("/getProducts");
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.title}</p>
          <p>{product.id}</p>
          <p>{product.body_html}</p>
          <img
            src={product.images[0].src}
            alt={product.title}
            width={200}
            height={200}
          />
        </div>
      ))}
    </div>
  );
};
export default App;
