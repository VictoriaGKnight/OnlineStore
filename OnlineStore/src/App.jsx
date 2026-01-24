import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ProductCard from './components/ProductCard';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
 return(
  <div className="app">
    <Header storeName="Online Craft store" /> 

    <Hero
      title="Hand-Made Goods!"
      subtitle="Find unique, custom made products you'll love"
      ctaText="Show Now"
      image="https://placehold.co/1200x400/FFb3C1/D3d3d3?text=Welcome+%3C3"
    />

    <h1>Best sellers!</h1>

    <ProductCard
      name="Zipper pouch"
      price={12.00}
      image="https://placehold.co/600X400"
      description="High-quality, super cute hand-made zipper pouch that can hold anything!"
    />

    <ProductCard
      name="Rag-quilt Tote Bag"
      price={65.00}
      image="https://placehold.co/600x400"
      description="Super cute hand-made tote bag! All patterns are fully customizable and bag is big enough to hold everything!" 
    />

    <ProductCard
      name="Wristlet Key-Chain"
      price={6.00}
      image="https://placehold.co/600x400"
      description="Hand-made, adorable key-chain wristlet! Fully customizable and the perfect addition to any keys!"
      />

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
