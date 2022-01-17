
import { render, fireEvent } from '@testing-library/react';

import { MemoryRouter as Router } from 'react-router-dom';
import selectEvent from 'react-select-event';


import MachineryInitialPage from '../../settings/kyc/Machinery/MachineryInitialPage';
import { testStore } from '../testStore';
let wrapper: any;

const setup = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = render(<Router><MachineryInitialPage /></Router>);
    return wrapper;
}
beforeEach(() => {
    wrapper = setup({});

});

//fire events
test('onClick clicked', async () => {

    expect(wrapper.getByText('Select the manufacturing activity to complete the machinery selection')).toBeInTheDocument;
    expect(wrapper.getByText('Sewing')).toBeInTheDocument;
    expect(wrapper.getByText('Spinning')).toBeInTheDocument;
    expect(wrapper.getByText('Weaving')).toBeInTheDocument;
    expect(wrapper.getByText('Knitting')).toBeInTheDocument;

    expect(wrapper.getByRole('button', { name: /Next/i })).toHaveAttribute('disabled');

    const clickOne = wrapper.getByTestId('inputcheck1');
    fireEvent.click(clickOne);

    expect(wrapper.getByRole('button', { name: /Next/i })).not.toHaveAttribute('disabled');

    const clickNext = wrapper.getByRole('button', { name: /Next/i });
    fireEvent.click(clickNext);

    expect(wrapper.queryAllByText('Add Product Category')).toBeInTheDocument;
    expect(wrapper.queryAllByText('Machine Type')).toBeInTheDocument;
    expect(wrapper.queryAllByPlaceholderText('0')).toBeInTheDocument;
    expect(wrapper.queryAllByText('Click on the machine type to create the machine inventory')).toBeInTheDocument;
    expect(wrapper.queryAllByText('IOT')).toBeInTheDocument;

    expect(wrapper.getByRole('button', { name: /Next/i })).toHaveAttribute('disabled');
    expect(wrapper.getByRole('button', { name: /Summary/i })).toHaveAttribute('disabled');
    expect(wrapper.getByRole('button', { name: /Submit/i })).toHaveAttribute('disabled');
    expect(wrapper.getByTestId('custom-element')).not.toBeChecked();

    //selectbox for machineType
    expect(wrapper.getByTestId('machineType')).toHaveFormValues({ machinetype: '' });
    await selectEvent.select(wrapper.getByLabelText('select Machine'), ['Single Needle']);
    expect(wrapper.getByTestId('machineType')).toHaveFormValues({ machinetype: 'Single Needle' });
    expect(wrapper.getByTestId('selected_element')).toBeInTheDocument;

    //selectbox for machineBrand
    expect(wrapper.getByTestId('machineBrand')).toHaveFormValues({ machinebrand: '' });
    await selectEvent.select(wrapper.getByLabelText('select Brand'), ['Juki']);
    expect(wrapper.getByTestId('machineBrand')).toHaveFormValues({ machinebrand: 'Juki' });

    //selectbox for machineTech
    expect(wrapper.getByTestId('machineTech')).toHaveFormValues({ machinetech: '' });
    await selectEvent.select(wrapper.getByLabelText('select Technology'), ['Basic']);
    expect(wrapper.getByTestId('machineTech')).toHaveFormValues({ machinetech: 'Basic' });

    //check event
    expect(wrapper.queryAllByText('Disabled')).toBeInTheDocument;
    const testcheck0 = wrapper.getByTestId('custom-element');
    fireEvent.click(testcheck0);
    expect(testcheck0).toBeChecked();
    expect(wrapper.queryAllByText('Enabled')).toBeInTheDocument;

    //input box change event
    const input = wrapper.getByPlaceholderText('0');
    fireEvent.change(input, { target: { value: "text" } });
    expect(wrapper.getByDisplayValue(/text/i)).toBeInTheDocument;

    expect(wrapper.getByRole('button', { name: /Submit/i })).not.toHaveAttribute('disabled');

    const submitButton = wrapper.getByRole('button', { name: /submit/i })
    fireEvent.click(submitButton);
    expect(wrapper.getByRole('button', { name: /summary/i })).not.toHaveAttribute('disabled');
    expect(wrapper.getByRole('button', { name: /next/i })).not.toHaveAttribute('disabled');

    //modelbox
    expect(fireEvent.click(wrapper.getByRole('button', { name: /summary/i }))).toBeInTheDocument;
    expect(wrapper.getByRole('dialog')).toBeInTheDocument;
    expect(wrapper.getByText('Select the filters of Machine, Brand and Technology to view the required summary information.')).toBeInTheDocument;
    //in model box select option
    expect(wrapper.getByTestId('machineTypeFilter')).toHaveFormValues({ machinetypefilter: '' });
    await selectEvent.select(wrapper.getByLabelText('Select Machine'), ['Single Needle']);
    expect(wrapper.getByTestId('machineTypeFilter')).toHaveFormValues({ machinetypefilter: 'Single Needle' });

    expect(wrapper.getByTestId('brandtypeFilter')).toHaveFormValues({ brandtypeFilter: '' });
    await selectEvent.select(wrapper.getByLabelText('Select Brand'), ['Juki']);
    expect(wrapper.getByTestId('brandtypeFilter')).toHaveFormValues({ brandtypeFilter: 'Juki' });

    expect(wrapper.getByTestId('techtypefilter')).toHaveFormValues({ techtypefilter: '' });
    await selectEvent.select(wrapper.getByLabelText('Select Technology'), ['Basic']);
    expect(wrapper.getByTestId('techtypefilter')).toHaveFormValues({ techtypefilter: 'Basic' });

    expect(wrapper.getByTestId('iottypefilter')).toHaveFormValues({ iottypefilter: '' });
    await selectEvent.select(wrapper.getByLabelText('IOT'), ['Enable']);
    expect(wrapper.getByTestId('iottypefilter')).toHaveFormValues({ iottypefilter: 'Enable' });

})


