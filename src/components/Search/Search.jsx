/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import './Search.scss';

export const TYPE_OPTIONS = ['Retail', 'Cash'];

export default function Search({ searchCallback }) {
    const [search, setSearch] = useState({ name: '', type: '' });

    useEffect(() => {
        searchCallback(search);
    }, [search]);

    return (
        <form id="search-form" data-testid="search">
            <label htmlFor="search-by-name">
                Search:
                <input
                    data-testid="search-by-name"
                    type="search-by-name"
                    name="search-by-name"
                    id="search-by-name"
                    value={search.name}
                    onChange={(e) =>
                        setSearch({ ...search, name: e.target.value })
                    }
                />
            </label>
            <label htmlFor="search-by-type">
                Choose a product type:
                <select
                    data-testid="search-by-type"
                    name="search-by-type"
                    id="search-by-type"
                    onChange={(e) =>
                        setSearch({ ...search, type: e.target.value })
                    }
                >
                    {TYPE_OPTIONS.map((type, index) => (
                        <option key={index} value={type.toLowerCase()}>
                            {type}
                        </option>
                    ))}
                </select>
            </label>
        </form>
    );
}
