import React from "react";
import ReactDOM from "react-dom";

/**
 * Header
    -Logo
    -Nav Items
    -Search
 *Body
    -RestaurantContainer
    -RestaurantCard
        -Img
        -Name of Restaurant
        -Rating
        -Cusine
        -Delivery Time
 *Footer
    -Copyright
    -Link
    -Contact Information
 */
const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img 
                className="logo"
                src="https://www.shutterstock.com/image-vector/food-logo-smile-label-company-250nw-1271590297.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const RestaurantCard =()=>{
    return(
        <div className="restaurant-card">
            <img 
            className="restaurant-logo"
            src="https://b.zmtcdn.com/data/pictures/chains/1/50691/ecfdc75d21bd7cd9d880f05c8382bc65.jpg"
             alt="restaurant-logo" />
              <h3>Meghna Foods</h3>
              <h4>Biryani,North Indian,Asian</h4>
              <h4>4.8*</h4>
              <h4>38 Minutes</h4>

        </div>
    )
}
const Body = () =>{
    return(
        <div className="body">
            <div className="search"></div>
            <div className="restaurant-container">
                <div className="restaurant-cards">
                    <RestaurantCard/>
                </div>
            </div>
        </div>
    )
}

const Applayout = () =>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    ) 
}





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>);