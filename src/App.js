import React, { useState, useEffect } from "react";
import API from "./api";
import Card from "./components/Card";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [products, setProducts] = useState([]);
  // This could also be set up as a single search state object (ie. { input: "", product: "" })
  const [searchInput, setSearchInput] = useState("");
  const [searchProduct, setProductInput] = useState("");

  // Uh-oh! useEffect was being called inefficiently
  // Added a second parameter to limit it just when the search props change
  // TODO: Probably could cache this result for a period of time to save on calls to the server!
  useEffect(() => {
    // Changed to use async/await instead of promises
    (async () => {
      const res = await API.getProducts()
      console.log(`API.getProducts =`, res.data)
      setProducts(res.data);
    })()
  }, [searchInput, searchProduct]);

  // Unecessary conditional branching?
  // Code duplication
  // Refactoring requires multiple identifiers to be changed
  // Usage of outdated for loop techniques
  // Missing key prop for child components
  // Imperative (ie. harder to test) mutations on array

  // const cardResults = [];

  // for (let i = 0; i < products.length; i++) {
  //   if (searchProduct || searchInput) {
  //     if (searchProduct && products[i].type.match(searchProduct)) {
  //       // Added key prop to rendered child components
  //       cardResults.push(<Card cardResults={products[i]} key={`card${i}`}/>);
  //     }
  //     if (searchInput && products[i].name.match(searchInput)) {
  //       cardResults.push(<Card cardResults={products[i]} key={`card${i}`}/>);
  //     }
  //   } else {
  //     cardResults.push(<Card cardResults={products[i]} key={`card${i}`}/>);
  //   }
  // }

  // Not sure if this is what your looking for too but
  // ideally there would be an endpoint with params to filter on the server side
  // not on the client side for searching products.

  // Refactored to use modern ES features like:
  // - destructuring
  // - safe navigation/elvis operator 
  // - arrow functions 
  // 
  // which make the code block more:
  // - readable, 
  // - functional
  // - testable 
  // - extendable
  const match = (a, b) => a.toLowerCase().match(b.toLowerCase())
  const nameMatches = searchInput ? products.filter(({ name }) => match(name, searchInput)) : []
  const typeMatches = searchProduct ? products.filter(({ type }) => match(type, searchProduct)) : []
  const cardProducts = searchProduct || searchInput ? [...nameMatches, ...typeMatches] : products

  const cardResults = cardProducts.map((product, i) =>
    <Card className='Card' cardResults={product} key={`card${i}`} />
  )

  return (
    <>
      {/* I feel like we are missing a styling library like react-bootstap with the classnames not referenced anywhere? */}
      <Header/>
      <div className="container">
        <form>
          {/* Added label htmlFor for the search box */}
          <label htmlFor="search">
            Search:
          </label>
          {/* Changed to be input type search to more clear instead of just text */}
          <input
            type="search"
            name="search"
            className="search"
            value={searchInput}
            placeholder="Search products..."
            onChange={(e) => setSearchInput(e.target.value)}
          />
          {/* Moved the product type dropdown into the form */}
          {/* Changed for prop to be proper htmlFor property */}
          <label htmlFor="type">Product type:</label>
          {/* Added missing name attribute for the corresponding label */}
          <select name="type" onChange={(e) => setProductInput(e.target.value)}>
            <option value="RETAIL">Retail</option>
            <option value="CASH">Cash</option>
          </select>
        </form>
      </div>
      <div className="container">
        {/* <h2>Results: </h2> */}
        <div>{cardResults}</div>
      </div>
      <Footer/>
   </>
  );
}

export default App;
