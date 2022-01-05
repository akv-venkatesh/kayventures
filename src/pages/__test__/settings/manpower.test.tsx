
import { render, screen, fireEvent } from '@testing-library/react';

import { MemoryRouter as Router } from 'react-router-dom';
import Manpower from '../../settings/Manpower/Manpower';



import { testStore } from '../testStore';
let wrapper: any;

const setup = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = render(<Router><Manpower /></Router>);
    return wrapper;
}
beforeEach(() => {
    wrapper = setup({});

});


test('test manpower', () => {
    const machine = wrapper.getByText('Operations');
    expect(machine).toBeInTheDocument;

    const facilityone = screen.getByText('Facility 1');
    expect(facilityone).toBeInTheDocument;
    const facilitytwo = screen.getByText('Facility 2');
    expect(facilitytwo).toBeInTheDocument;
    const facilitythree = screen.getByText('Facility 3');
    expect(facilitythree).toBeInTheDocument;

    const machineplace = screen.getByPlaceholderText('Enter no. of operators');
    expect(machineplace).toBeInTheDocument;
    const role = screen.getByRole('heading', { name: 'You can view the manpower resources grade wise' });
    const setup = screen.getByRole('heading', { name: 'Manpower Setup' });
    const roletext = screen.queryAllByText('You can view the manpower resources grade wise');
    expect(role).toBeInTheDocument;
    expect(roletext).toBeInTheDocument;
    expect(setup).toBeInTheDocument;

})

test('manpower button click', () => {
    const submitClick = jest.fn()
    fireEvent.click(screen.getByText(/submit/i))
    expect(submitClick).toBeInTheDocument;
    const resetClick = jest.fn()
    fireEvent.click(screen.getByText(/reset/i))
    expect(resetClick).toBeInTheDocument;
    const summaryClick = jest.fn()
    fireEvent.click(screen.getByText(/summary/i))
    expect(summaryClick).toBeInTheDocument;
})
test('manpower button event', () => {
    const buttonA = jest.fn()
    fireEvent.click(screen.getByText(/Grade A/i))
    expect(buttonA).toBeInTheDocument;
    const buttonB = jest.fn()
    fireEvent.click(screen.getByText(/Grade B/i))
    expect(buttonB).toBeInTheDocument;
    const buttonC = jest.fn()
    fireEvent.click(screen.getByText(/Grade C/i))
    expect(buttonC).toBeInTheDocument;


    // const sumContainer = fireEvent.click(screen.getByRole('button', { name: /summary/i }))
    // const diaContainer = screen.getByRole('dialog');
    // expect(sumContainer).toBeInTheDocument;
    // expect(diaContainer).toBeInTheDocument;


})



test('input element', () => {
    const inpute = screen.getByPlaceholderText('Enter no. of operators');
    expect(inpute).toBeInTheDocument;
    fireEvent.change(inpute, { target: { value: "vinoth" } });
    expect(wrapper.getByDisplayValue(/vinoth/i)).toBeInTheDocument;
})