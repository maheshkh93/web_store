import "./Products.scss";
import Product from "./Product/Product"

import prod from "./../../assets/products/earbuds-prod-1.webp"
import prod1 from "./../../assets/products/earbuds-prod-2.webp"
import prod2 from "./../../assets/products/headphone-prod-1.webp"
import prod3 from "./../../assets/products/headphone-prod-2.webp"
import prod4 from "./../../assets/products/speaker-prod-1.webp"
import prod5 from "./../../assets/products/speaker-prod-2.webp"
import prod6 from "./../../assets/products/watch-prod-1.webp"
import prod7 from "./../../assets/products/watch-prod-2.webp"

const Products = ({innerPage, headingText}) => { 
    return (
    <div className="products-container">
        {!innerPage && <div className="sec-heading">{headingText}</div>}
        <div className="products">
            
            <Product item={prod} name="" price="499"/>
            <Product item={prod1} name="" price="899"/>
            <Product item={prod2} name="" price="999"/>
            <Product item={prod3} name="" price="799"/>
            <Product item={prod4} name="" price="1499"/>
            <Product item={prod5} name="" price="799"/>
            <Product item={prod6} name="" price="1199"/>
            <Product item={prod7} name="" price="999"/>

        </div>
    </div>
    );
};

export default Products;
 