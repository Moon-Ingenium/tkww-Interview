import { formatPrice } from '../../lib/utils';
import './Card.scss';
import React, { useState } from 'react';

export default function Card({ product }) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => setClicked((value) => !value);

    const { name, image, type, brandName, price, storeName } = product;

    return (
        <article data-testid='card' className='card' onClick={handleClick}>
            <div className='img-container'>
                <img alt={name} src={image ? image : '/logo.svg'} />

                <div className='tags'>
                    {type && <span data-testid='type'>{type.toLowerCase()}</span>}
                    {brandName && <span data-testid='brand'>{brandName.toLowerCase()}</span>}
                    {storeName && <span data-testid='storeName'>{storeName.toLowerCase()}</span>}
                </div>

                {clicked && (
                    <div data-testid='price' className='price'>
                        {price && (
                            <span>
                                Price:{' '}
                                {formatPrice(price)}
                            </span>
                        )}
                    </div>
                )}
            </div>

            <h3 data-testid='name'>{name}</h3>
        </article>
    );
}
