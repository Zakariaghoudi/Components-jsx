import product from "../Product";
const Image = () => {
  return <img className="Image" src={product.image} alt={product.name} />;
};

export default Image;
