import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ProductCard from './components/ProductCard';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { useState } from "react";
import CartItem from "./components/CartItem"

function App() {

 const products = [
  {
    id: 1,
    name:"Zipper pouch",
    price:12.00,
    image:"https://placehold.co/600X400",
    description:"High-quality, super cute hand-made zipper pouch that can hold anything!"
  },
  {
    id: 2,
    name:"Rag-quilt Tote Bag",
    price:65.00,
    image:"https://placehold.co/600x400",
    description:"Super cute hand-made tote bag! All patterns are fully customizable and bag is big enough to hold everything!"
  },
  {
    id: 3,
    name:"Wristlet Key-Chain",
    price:6.00,
    image:"https://placehold.co/600x400",
    description:"Hand-made, adorable key-chain wristlet! Fully customizable and the perfect addition to any keys!"
  }
 ] 

 const [cart, setCart] = useState([]); 

 const addToCart = (product) => {
  console.log("adding to cart:", product);
  setCart([...cart, product]);
 };

 const removeFromCart = (id) => {
  setCart(cart.filter(item => item.id !== id));
 };

 const cartTotal = cart.reduce(
  (total, item) => total + item.price,
  0
 );

 return(
  <div className="app">
    <Header 
      storeName="Online Craft store"
      cartCount={cart.length} 
    /> 
    

    <Hero
      title="Hand-Made Goods!"
      subtitle="Find unique, custom made products you'll love"
      ctaText="Show Now"
      image="https://placehold.co/1200x400/FFb3C1/D3d3d3?text=Welcome+%3C3"
    />

    <h1>Best sellers!</h1>

    {products.map(product => (
      <ProductCard
        key={product.id}
        product={product}
        onAddToCart={addToCart}
      />
    ))}

    <div className="shopping-cart">
      <h2>Your Shopping Cart:</h2>
    </div>

    {cart.length > 0 ? (
      <>
        {cart.map(item => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={removeFromCart}
          />
        ))}

        <h4 className="cart-total">
          Total: ${cartTotal.toFixed(2)}
        </h4>
      </>
    ) : (
      <div className="empty-cart">
        <p>Aww! Your cart is empty.</p>
        <p>Add something now!</p>
      </div>
    )}

    <Footer
      storeName="Online Craft Store"
      email="lovecrafts@create.com"
      phone="(123) 456-7890"
      address="123 Maker Street, lovesville, SC 12345"
    />
           
  </div>
 );
}

export default App
