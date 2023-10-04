import React, { useState, useEffect } from 'react';
import API from './lib/api';
import Header from './components/Header/Header';
import Card from './components/Card/Card'
import Footer from './components/Footer/Footer';
import Search from './components/Search/Search';
import MainSection from './components/Sections/MainSection';

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState({ name: '', type: '' });

  useEffect(() => {
    API.getProducts().then((res) => {
      const { data } = res;
      setProducts(data)
    })
  }, []);

  const cardResults = products.filter((product) => {
    if (search.name === '' && search.type === '') return true;

    const { name, type } = product;

    if (search.name && !name.toLowerCase().match(search.name.toLowerCase())) {
      return false;
    }

    if (search.type && !type.toLowerCase().match(search.type.toLowerCase())) {
      return false;
    }

    return true;
  })

  const renderCards = () => {
    return (
      cardResults.map((product, index) => (<Card key={index} product={product} />))
    )
  }

  const getTitle = () => {
    let title = 'Results'

    if (search.name) {
      title += ` for '${search.name.toLowerCase()}'`
    }

    if (search.type) {
      title += ` in ${search.type.toLowerCase()}`
    }

    return title
  }

  return (
    <>
      <Header>
        <Search searchCallback={setSearch} search={search} />
      </Header>
      <MainSection className={'product-list'} title={getTitle()}>
        {renderCards()}
      </MainSection>
      <Footer />
    </>
  );
}

export default App;
