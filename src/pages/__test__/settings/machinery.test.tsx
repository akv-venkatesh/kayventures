
import { render, screen, fireEvent } from '@testing-library/react';

import { MemoryRouter as Router } from 'react-router-dom';


import Machine from '../../settings/Machine/Machine';
import { testStore } from '../testStore';
let wrapper: any;

const setup = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = render(<Router><Machine /></Router>);
    return wrapper;
}
beforeEach(() => {
    wrapper = setup({});

});


test('test machinery', () => {
    const machine = screen.queryAllByText('Add the No. of machines');
    expect(machine).toBeInTheDocument;
    const type = screen.queryAllByText('Machine Type');
    expect(type).toBeInTheDocument;
    const iot = screen.queryAllByText('IOT Enabled');
    expect(iot).toBeInTheDocument;

    const facilityone = screen.queryAllByText('Facility 1');
    expect(facilityone).toBeInTheDocument;
    const facilitytwo = screen.queryAllByText('Facility 2');
    expect(facilitytwo).toBeInTheDocument;
    const facilitythree = screen.queryAllByText('Facility 3');
    expect(facilitythree).toBeInTheDocument;

    const machineplace = screen.queryAllByPlaceholderText('0');
    expect(machineplace).toBeInTheDocument;
    const role = screen.queryAllByText('Add machinary information to view the summary.');
    expect(role).toBeInTheDocument;

})

test('onClick clicked', () => {
    const submitClick = jest.fn()
    fireEvent.click(screen.getByText(/submit/i))
    expect(submitClick).toBeInTheDocument;
    const resetClick = jest.fn()
    fireEvent.click(screen.getByText(/reset/i))
    expect(resetClick).toBeInTheDocument;


    const input = screen.getByPlaceholderText('0');
    expect(input).toBeInTheDocument;
    fireEvent.change(input, { target: { value: "vinoth" } });
    expect(wrapper.getByDisplayValue(/vinoth/i)).toBeInTheDocument;

    const submitButton = wrapper.getByText(/submit/i);
    const inputele = screen.getByPlaceholderText('0');
    fireEvent.change(inputele);
    expect(submitButton).not.toHaveAttribute('disabled');

    const testcheck0 = wrapper.getByTestId('custom-element');
    fireEvent.click(testcheck0);
    expect(testcheck0).toBeChecked();


    const summaryContainer = fireEvent.click(screen.getByRole('button', { name: /summary/i }))
    const dialogContainer = screen.getByRole('dialog');
    expect(summaryContainer).toBeInTheDocument;
    expect(dialogContainer).toBeInTheDocument;


})



// test('selectbox', async () => {
//     const selectEvent = screen.queryAllByRole('combobox');
//     await selectEvent.select(screen.getByTestId('machineNeedle'), 'Single Needle')
//     expect(screen.getByTestId('machineNeedle')).toHaveFormValues({
//         needleinput: ['Thread Over Look', 'Double Needle', 'Single Needle'],
//     })
// })