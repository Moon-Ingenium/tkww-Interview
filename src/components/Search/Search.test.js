import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Search from './Search'

const search = {
    name: '',
    type: 'CASH',
}

function searchCallback(data) {
    search.name += data.name;
    search.type = data.type;
}

describe('Search testing', () => {
    it('Should have the search input', () => {
        initRender();
        const element = screen.getByTestId('search');
        checkVisible(element);
    });

    it('Should have the search type', () => {
        initRender();
        const element = screen.getByTestId('search-by-type');
        checkVisible(element);
    });

    it('Should have the search by name', () => {
        initRender();
        const element = screen.getByTestId('search-by-name');
        checkVisible(element);
    });

    it('Once changed the search by name, It should change the state', () => {
        initRender()
        const input = screen.getByTestId('search-by-name');
        userEvent.type(input, 'some name');
        expect(search.name).toBe('some name');
    });

    it('Once select type is changed, It should change the state', () => {
        initRender()
        const select = screen.getByTestId('search-by-type');
        userEvent.selectOptions(select, 'RETAIL');
        expect(search.type).toBe('RETAIL');
    })
})

function initRender() {
    render(<Search searchCallback={searchCallback} search={search} />);
}

function checkVisible(element) {
    expect(element).toBeVisible();
}