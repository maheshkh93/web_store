import "./Product.scss";

const Product = ({item, name, price}) => {
    return (
    <div className="product-card">
        <div className="thumbnail">
            <img src={item} alt="" />
            
        </div>
        <div className="prod-details">
            <span className="name">
                {name}
            </span>
            <span className="price">
                &#8377;{price}
            </span>
        </div>
    </div>
    );
};

export default Product;
