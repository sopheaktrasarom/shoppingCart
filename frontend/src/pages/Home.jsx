import { useGetAllProductsQuery } from "../Components/features/productApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../Components/features/cartSlice";
export default function Home() {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  function handleAddToCart(product) {
    dispatch(addToCart(product));
  }
  return (
    <section className="home_section section">
      <div className="home-container">
        {isLoading ? (
          <p>loding...</p>
        ) : error ? (
          <p>error</p>
        ) : (
          <>
            <h2>New arrival</h2>
            <div className="product">
              {data?.map((product) => (
                <div className="product_container" key={product.id}>
                  <h3>{product.name}</h3>

                  <img src={product.img} alt={product.name} />

                  <div className="detail">
                    <div className="detail_content">
                      <span className="description">{product.des} display</span>
                      <span className="price">${product.price}</span>
                    </div>
                    <button
                      className="addtocart"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
