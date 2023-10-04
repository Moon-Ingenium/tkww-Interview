import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Card from './Card'

const name = 'Some Name';
const image = null;
const type = 'some type';
const brandName = 'some brand';
const price = 100;
const storeName = 'some store';

const product = {
    name,
    image,
    type,
    brandName,
    price,
    storeName,
}

describe('Card testing', () => {

    it('Should have the product name', () => {
        initRender()
        const element = screen.getByTestId('name')
        checkVisible(element)
    });

    it('Should have the product type', () => {
        initRender()
        const element = screen.getByTestId('type')
        checkVisible(element)
    });

    it('Should have the product brand name', () => {
        initRender()
        const element = screen.getByTestId('brand')
        checkVisible(element)
    });

    it('Price should not be in the render', () => {
        initRender()
        const element = screen.queryByTestId('price')
        expect(element).not.toBeInTheDocument()
    })

    it('After click price, It should be visible', () => {
        initRender()
        const card = screen.getByTestId('card');
        userEvent.click(card);

        checkVisible(screen.getByTestId('price'))
    })

})

function initRender() {
    render(<Card product={product} />)
}

function checkVisible(element) {
    expect(element).toBeInTheDocument()
    expect(element).toBeVisible();
}