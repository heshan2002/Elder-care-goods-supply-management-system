import React from "react";
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
    const {Products} = props;
    const {addToCart} = useContext(ShopContext);
    return(
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={Products.image} alt="" />
                    <img src={Products.image} alt="" />
                    <img src={Products.image} alt="" />
                    <img src={Products.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className="productdisplay-main-img" src={Products.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{Products.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${Products.old_price}</div>
                    <div className="productdisplay-right-price-new">${Products.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                Ensure that you have both ShopContext and useParams imported at the top of your 
                Products.jsx file, and the errors should be resolved. Make sure the paths in the 
                import statements are correct based on your project structure
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>

                </div>
                <button onClick={()=>{addToCart(Products.id)}}>ADD TO CART</button>
                <p className="productdisplay-right-category"><span>Category :</span>Dry food, elder</p>
                <p className="productdisplay-right-category"><span>Tags :</span>Modern, Latest</p>
            </div>
        </div>
    )
}

export default ProductDisplay