
import { getByRole, render, screen, fireEvent } from '@testing-library/react';

import { MemoryRouter as Router } from 'react-router-dom';
import Esg from '../../settings/Esg/Esg';



import { testStore } from '../testStore';
let wrapper: any;

const setup = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = render(<Router><Esg /></Router>);
    return wrapper;
}
beforeEach(() => {
    wrapper = setup({});
});

test('test esg', () => {
    const facilityone = screen.getByText('Facility 1');
    expect(facilityone).toBeInTheDocument;
    const facilitytwo = screen.getByText('Facility 2');
    expect(facilitytwo).toBeInTheDocument;
    const facilitythree = screen.getByText('Facility 3');
    expect(facilitythree).toBeInTheDocument;

})

test('esg button click', () => {
    const summaryClick = jest.fn()
    fireEvent.click(screen.getByText(/summary/i))
    expect(summaryClick).toBeInTheDocument;
    const envClick = jest.fn()
    fireEvent.click(screen.getByText(/environmental/i))
    expect(envClick).toBeInTheDocument;
    const socialClick = jest.fn()
    fireEvent.click(screen.getByText(/social/i))
    expect(socialClick).toBeInTheDocument;
    const giverClick = jest.fn()
    fireEvent.click(screen.getByText(/governance/i))
    expect(giverClick).toBeInTheDocument;

    const saveClick = jest.fn()
    fireEvent.click(screen.getByText(/save/i))
    expect(saveClick).toBeInTheDocument;
    const removeClick = jest.fn()
    fireEvent.click(screen.getByText(/remove/i))
    expect(removeClick).toBeInTheDocument;

    const envevent = fireEvent.click(screen.getByRole('button', { name: /environmental/i }))
    const heading = screen.getByRole('heading', { name: /Attach your certificates/i })
    const certifyNum = screen.getByPlaceholderText('Certificate No.')
    const date = screen.getByPlaceholderText('Valid Till')
    expect(envevent).toBeInTheDocument;
    expect(heading).toBeInTheDocument;
    expect(certifyNum).toBeInTheDocument;
    expect(date).toBeInTheDocument;
})

test('first page text', () => {
    const road = screen.getByText('SGG Road');
    expect(road).toBeInTheDocument;
    const stage = screen.getByText('2nd stage');
    expect(stage).toBeInTheDocument;
    const dani = screen.getByText('Jeevan dani road');
    expect(dani).toBeInTheDocument;
    const ph = screen.queryAllByText('8948295532');
    expect(ph).toBeInTheDocument;
    const pin = screen.getByText('pin code: 000798');
    expect(pin).toBeInTheDocument;
    const date = screen.getByText('Mon- Fri');
    expect(date).toBeInTheDocument;
    const time = screen.getByText('8.00AM -7.00PM');
    expect(time).toBeInTheDocument;



})