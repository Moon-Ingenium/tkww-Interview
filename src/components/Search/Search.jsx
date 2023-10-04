import './Search.css';

export default function Search({ searchCallback, search }) {
    const handleSearchName = (name) => {
        searchCallback({ ...search, name });
    };

    const handleSearchType = (type) => {
        searchCallback({ ...search, type });
    };

    return (
        <form id="search" data-testid="search">
            <label htmlFor="search" />
            Search:
            <input
                data-testid="search-by-name"
                type="text"
                name="search"
                rel="search"
                value={search.name}
                onChange={(e) => handleSearchName(e.target.value)}
            />
            <label htmlFor="type">Choose a product type:</label>
            <select
                data-testid="search-by-type"
                name="type"
                onChange={(e) => handleSearchType(e.target.value)}
            >
                <option value="RETAIL">Retail</option>
                <option value="CASH">Cash</option>
            </select>
        </form>
    );
}
