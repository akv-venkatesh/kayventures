
import { findByText, fireEvent, getByText, render, screen } from '@testing-library/react';
import BussinessCategories from '../Admin/BussinessCategories';
import { MemoryRouter as Router } from 'react-router-dom';

const keyDownEvent = {
    key: 'ArrowDown',
};

test('initial test by elements', () => {
    render(
        <Router>
            <BussinessCategories />
        </Router>
    );

    //placeholder
    const placeOneElement = screen.queryByPlaceholderText('Search')
    expect(placeOneElement).toBeInTheDocument;

    const placeTwoElement = screen.queryByPlaceholderText('Select Buissness Category')
    expect(placeTwoElement).toBeInTheDocument;

    const placeThreeElement = screen.queryByPlaceholderText("Select")
    expect(placeThreeElement).toBeInTheDocument;
    //lable
    const lableBusiness = screen.queryByLabelText('Business Categories')
    expect(lableBusiness).toBeInTheDocument;

    const lableStatus = screen.queryByLabelText('Status')
    expect(lableStatus).toBeInTheDocument;
    //Text
    const textSerial = screen.getByText('Serial No')
    expect(textSerial).toBeInTheDocument;

    const textTwo = screen.getByText('Name')
    expect(textTwo).toBeInTheDocument;

    const textEmail = screen.getByText('Email')
    expect(textEmail).toBeInTheDocument;

    const textPhone = screen.getByText('Phone No')
    expect(textPhone).toBeInTheDocument;

    const textOrganisation = screen.getByText('Organisation')
    expect(textOrganisation).toBeInTheDocument;

    const textActions = screen.getByText('Actions')
    expect(textActions).toBeInTheDocument;


    async function selectOption(container: HTMLElement, optionText: string) {
        const placeholder = getByText(container, 'Select Buissness Category');
        fireEvent.keyDown(placeholder, keyDownEvent);
        await findByText(container, optionText);
        fireEvent.click(getByText(container, optionText));
    }
    async function selectOptions(container: HTMLElement, optionText: string) {
        const placeholder = getByText(container, 'Select');
        fireEvent.keyDown(placeholder, keyDownEvent);
        await findByText(container, optionText);
        fireEvent.click(getByText(container, optionText));
    }
})

test('clicked', () => {
    const handleClick = jest.fn()
    render(<Router>
        <BussinessCategories />
    </Router>)
    fireEvent.click(screen.getByText('Next'))
    expect(handleClick).toHaveAccessibleName
    fireEvent.click(screen.getByText('Previous'))
    expect(handleClick).toHaveAccessibleName
})


