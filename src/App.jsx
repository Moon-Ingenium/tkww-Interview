import React, { useState, useEffect } from 'react';
import API from './lib/api';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import Search from './components/Search/Search';
import MainSection from './components/Sections/MainSection';

const TITLE = 'Results';

function App() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [title, setTitle] = useState(TITLE);

    useEffect(() => {
        API.getProducts().then((res) => {
            const { data } = res;
            setProducts(data);
            setFilteredProducts(data);
        });
    }, []);

    const filterProducts = (name = '', type = '') => {
        setupTitle(name, type);

        const data = products.filter((product) => {
            if ((!name || name === '') && (!type || type === '')) return true;

            if (name && !product.name.toLowerCase().match(name.toLowerCase())) {
                return false;
            }

            if (type && !product.type.toLowerCase().match(type.toLowerCase())) {
                return false;
            }

            return true;
        });

        setFilteredProducts(data);
    };

    const setupTitle = (name = '', type = '') => {
        setTitle(TITLE);

        if (name !== '') {
            setTitle((value) => `${value} for '${name}'`);
        }

        if (type !== '') {
            setTitle((value) => `${value} of type '${type}'`);
        }
    };

    const renderProducts = () => {
        if (products.length === 0) {
            return <h3>Loading...</h3>;
        }

        if (filteredProducts.length === 0) {
            return <h3>No products found</h3>;
        }

        return filteredProducts.map((product, index) => (
            <Card key={index} product={product} />
        ));
    };

    return (
        <>
            <Header>
                <Search
                    searchCallback={(s) => filterProducts(s.name, s.type)}
                />
            </Header>
            <MainSection className={'product-list'} title={title}>
                {renderProducts()}
            </MainSection>
            <Footer />
        </>
    );
}

export default App;
