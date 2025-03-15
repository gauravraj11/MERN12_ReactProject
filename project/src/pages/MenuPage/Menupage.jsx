import React, { useContext, useState } from "react";
import Footer from '../../components/Footer/Footer'
import { StoreContext } from "../../Context/StoreContext";
import './Menupage.css'
export default function Menupage() {
    const { food_list, addToCart, currency } = useContext(StoreContext);
    const [searchQuery, setSearchQuery] = useState("");

    // Filter dishes based on search query
    const filteredDishes = food_list.filter((dish) =>
        dish.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            {/* Search Bar */}
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search for a dish..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />
                <button className="search-button">SearchByproductTitle</button>
            </div>

            {/* Dishes Container */}
            <div className='dishes-container'>
                {filteredDishes.length > 0 ? (
                    filteredDishes.map((dish) => (
                        <div className="dish-card" key={dish.id}>
                            <img src={dish.image} alt={dish.name} className="dish-image" />
                            <div className="dish-body">
                                <div className="dish-price">{currency} {dish.price}</div>
                                <h3 className="dish-title">{dish.title}</h3>
                                <button className="add-to-cart-button" onClick={() => addToCart(dish.id)}>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-results">No dishes found.</p>
                )}
            </div>

            <Footer />
        </>
    );
}
