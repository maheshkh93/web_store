import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";

const Search = ({ setShowSearch }) => {
    const [query, setQuery] = useState("");

    const onChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div className="search-modal">
            <div className="form-field">
                <input
                    autoFocus
                    type="text"
                    placeholder="Search for products"
                    value={query}
                    onChange={onChange}
                />
                <MdClose
                    className="close-btn"
                    onClick={() => setShowSearch(false)}
                />
            </div>
            <div className="search-result-content">
             
                <div className="search-results">
                    
                </div>
            </div>
        </div>
    );
};

export default Search;
