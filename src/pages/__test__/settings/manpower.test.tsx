
import { render, screen, fireEvent } from '@testing-library/react';

import { MemoryRouter as Router } from 'react-router-dom';
import selectEvent from 'react-select-event';
import Manpower from '../../settings/kyc/Manpower/Manpower';



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


test('test manpower text', () => {
    const machine = wrapper.getByRole('heading', { name: /Operations/i });
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
//fire events
test('manpower button click', async () => {
    const submitClick = jest.fn()
    fireEvent.click(screen.getByText(/submit/i))
    expect(submitClick).toBeInTheDocument;
    const resetClick = jest.fn()
    fireEvent.click(screen.getByText(/reset/i))
    expect(resetClick).toBeInTheDocument;
    const summaryClick = jest.fn()
    fireEvent.click(screen.getByText(/summary/i))
    expect(summaryClick).toBeInTheDocument;


    //input chage event
    const inpute = screen.getByPlaceholderText('Enter no. of operators');
    fireEvent.change(inpute, { target: { value: "vinoth" } });
    expect(wrapper.getByDisplayValue(/vinoth/i)).toBeInTheDocument;

    //model box
    const sumContainer = fireEvent.click(screen.getByRole('button', { name: /summary/i }))
    const diaContainer = screen.getByRole('dialog');
    expect(sumContainer).toBeInTheDocument;
    expect(diaContainer).toBeInTheDocument;

    //selectbox for Grade
    expect(wrapper.getByTestId('grade')).toHaveFormValues({ grade: '' });
    await selectEvent.select(wrapper.getByLabelText('select Grade'), ['Grade A']);
    expect(wrapper.getByTestId('grade')).toHaveFormValues({ grade: 'Grade A' });

    //selectbox for operation
    // expect(wrapper.getByTestId('opertaion')).toHaveFormValues({ opertaion: '' });
    // await selectEvent.select(wrapper.getByLabelText('select Opertion'), ['Tailor']);
    // expect(wrapper.getByTestId('opertaion')).toHaveFormValues({ opertaion: 'Tailor' });

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

})
