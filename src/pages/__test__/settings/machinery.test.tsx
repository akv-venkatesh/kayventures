
import { render, screen, fireEvent } from '@testing-library/react';

import { MemoryRouter as Router } from 'react-router-dom';
import selectEvent from 'react-select-event';


import Machine from '../../settings/kyc/Machine/Machine';
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


    //input box change event
    const input = screen.getByPlaceholderText('0');
    fireEvent.change(input, { target: { value: "vinoth" } });
    expect(wrapper.getByDisplayValue(/vinoth/i)).toBeInTheDocument;


    //selectbox for machineType
    expect(wrapper.getByTestId('machineType')).toHaveFormValues({ machinetype: '' });
    await selectEvent.select(wrapper.getByLabelText('select Machine'), ['Single Needle']);
    expect(wrapper.getByTestId('machineType')).toHaveFormValues({ machinetype: 'Single Needle' });
    expect(wrapper.getByTestId('testMachineType')).toBeInTheDocument;

    //selectbox for machineBrand
    expect(wrapper.getByTestId('machineBrand')).toHaveFormValues({ machinebrand: '' });
    await selectEvent.select(wrapper.getByLabelText('select Brand'), ['Juki']);
    expect(wrapper.getByTestId('machineBrand')).toHaveFormValues({ machinebrand: 'Juki' });

    //selectbox for machineTech
    expect(wrapper.getByTestId('machineTech')).toHaveFormValues({ machinetech: '' });
    await selectEvent.select(wrapper.getByLabelText('select Technology'), ['Basic']);
    expect(wrapper.getByTestId('machineTech')).toHaveFormValues({ machinetech: 'Basic' });

    expect(screen.getByRole('button', { name: /Next/i })).toHaveAttribute('disabled');
    //check event
    const submitButton = wrapper.getByText(/submit/i);
    const testcheck0 = wrapper.getByTestId('custom-element');
    fireEvent.click(testcheck0);
    expect(testcheck0).toBeChecked();
    expect(submitButton).not.toHaveAttribute('disabled');

    const testSummary = screen.getByRole('button', { name: /summary/i })
    expect(testSummary).not.toHaveAttribute('disabled');

    fireEvent.click(submitButton);
    expect(testSummary).not.toHaveAttribute('disabled');

    expect(screen.getByRole('heading', { name: /Add machinary information to view the summary./i })).toBeInTheDocument;

    //nextbutton
    expect(screen.getByRole('button', { name: /Next/i })).not.toHaveAttribute('disabled');
    //modelbox
    const summaryContainer = fireEvent.click(screen.getByRole('button', { name: /summary/i }))
    const dialogContainer = screen.getByRole('dialog');
    expect(summaryContainer).toBeInTheDocument;
    expect(dialogContainer).toBeInTheDocument;

})


