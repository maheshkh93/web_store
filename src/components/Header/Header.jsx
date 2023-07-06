import "./Header.scss";
import {TbSearch} from "react-icons/tb";
import { AiOutlineHeart} from "react-icons/ai";
import { CgShoppingCart} from "react-icons/cg";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context"; 
import { useEffect, useState, useContext } from "react";

const Header = () => {

    const[scrolled, setScrolled]= useState(false)
    const[showSearch, setShowSearch]= useState(false)

    const handleScroll =()=>{
        const offset = window.scrollY
        if(offset>200){
            setScrolled(true)
        }else{
            setScrolled(false)
        }
    };

    useEffect (()=>{
        window.addEventListener("scroll", handleScroll)
    },[])

    const { cartCount, showCart, setShowCart } = useContext(Context);

    return (
        <>
    <header className={`main-header ${scrolled?'sticky-header':''}`}>
        <div className="header-content">
            <ul className="left">
                <li>Home</li>
                <li>About</li>
                <li>Categories</li>
            </ul>
            <div className="center">Web Store</div>
            <div className="right">
                
                <TbSearch onClick={()=>setShowSearch(true)} />
                <AiOutlineHeart/>
                <span 
                className="cart-icon"
                onClick={()=>setShowCart(true)}
                >
                    <CgShoppingCart/>
                    <span>{cartCount}</span>
                </span>
            </div>
        </div>
    </header>
    {showCart && <Cart setShowCart={setShowCart}/>}
    {showSearch && <Search setShowSearch={setShowSearch}/>}
    </>
    )
};

export default Header;
