
import { render, screen, fireEvent } from '@testing-library/react';

import { MemoryRouter as Router } from 'react-router-dom';
import selectEvent from 'react-select-event';


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


test('test machinery text', () => {
    const machine = wrapper.getByRole('heading', { name: /Add the No. of machines/i });
    expect(machine).toBeInTheDocument;
    const type = wrapper.getByRole('heading', { name: /Machine Type/i });
    expect(type).toBeInTheDocument;
    const iot = wrapper.getByText('IOT Enabled');
    expect(iot).toBeInTheDocument;

    const facilityone = wrapper.queryAllByText('Facility 1');
    expect(facilityone).toBeInTheDocument;
    const facilitytwo = wrapper.queryAllByText('Facility 2');
    expect(facilitytwo).toBeInTheDocument;
    const facilitythree = wrapper.queryAllByText('Facility 3');
    expect(facilitythree).toBeInTheDocument;

    const machineplace = wrapper.queryAllByPlaceholderText('0');
    expect(machineplace).toBeInTheDocument;
    const role = wrapper.queryAllByText('Add machinary information to view the summary.');
    expect(role).toBeInTheDocument;

})
//fire events
test('onClick clicked', async () => {
    const submitClick = jest.fn()
    fireEvent.click(screen.getByText(/submit/i))
    expect(submitClick).toBeInTheDocument;
    const resetClick = jest.fn()
    fireEvent.click(screen.getByText(/reset/i))
    expect(resetClick).toBeInTheDocument;

    //input box change event
    const input = screen.getByPlaceholderText('0');
    fireEvent.change(input, { target: { value: "vinoth" } });
    expect(wrapper.getByDisplayValue(/vinoth/i)).toBeInTheDocument;

    const submitButton = wrapper.getByText(/submit/i);
    const inputele = screen.getByPlaceholderText('0');
    fireEvent.change(inputele);
    expect(submitButton).not.toHaveAttribute('disabled');

    //check event
    const testcheck0 = wrapper.getByTestId('custom-element');
    fireEvent.click(testcheck0);
    expect(testcheck0).toBeChecked();

    //modelbox
    const summaryContainer = fireEvent.click(screen.getByRole('button', { name: /summary/i }))
    const dialogContainer = screen.getByRole('dialog');
    expect(summaryContainer).toBeInTheDocument;
    expect(dialogContainer).toBeInTheDocument;


    //selectbox for machineType
    expect(wrapper.getByTestId('machineType')).toHaveFormValues({ machinetype: '' });
    await selectEvent.select(wrapper.getByLabelText('select Machine'), ['Single Needle']);
    expect(wrapper.getByTestId('machineType')).toHaveFormValues({ machinetype: 'Single Needle' });

    //selectbox for machineBrand
    expect(wrapper.getByTestId('machineBrand')).toHaveFormValues({ machinebrand: '' });
    await selectEvent.select(wrapper.getByLabelText('select Brand'), ['Juki']);
    expect(wrapper.getByTestId('machineBrand')).toHaveFormValues({ machinebrand: 'Juki' });

    //selectbox for machineTech
    expect(wrapper.getByTestId('machineTech')).toHaveFormValues({ machinetech: '' });
    await selectEvent.select(wrapper.getByLabelText('select Technology'), ['Basic']);
    expect(wrapper.getByTestId('machineTech')).toHaveFormValues({ machinetech: 'Basic' });

})


