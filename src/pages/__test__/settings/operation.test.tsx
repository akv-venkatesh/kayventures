import Configuration from '../../settings/ProductConfiguration/configuration';
import {fireEvent, render, screen} from '@testing-library/react';
import{testStore} from "../testStore"
import {MemoryRouter as Router} from 'react-router-dom';
let wrapper:any;
import { Provider } from 'react-redux';

const setup = (initialState={})=>{
    const store = testStore(initialState);
    const wrapper = render(<Router><Provider store={store}><Configuration/></Provider></Router>);
    return wrapper; 
}
beforeEach(() => {
    wrapper = setup({});
});
test('register form test',()=>{
    const testcheck = wrapper.getByTestId('testcheck1');
    expect(testcheck).toBeInTheDocument;
    const woven = wrapper.getByLabelText(/woven/i);
    expect(woven).toBeInTheDocument;
    const women = wrapper.getByLabelText(/women/i);
    expect(women).toBeInTheDocument;
    const knitted = wrapper.getByLabelText(/knitted/i);
    expect(knitted).toBeInTheDocument;
    const men = wrapper.getByLabelText('Men');
    expect(men).toBeInTheDocument;
})


//fireevents

test('operation test    ',()=>{
    const testcheck0 = wrapper.getByTestId('testcheck0');
    const nextbtn = wrapper.getByText(/next/i);
    const savebtn = wrapper.getByText(/save/i);
    const removebtn = wrapper.getByText(/remove/i);
    const backbtn = wrapper.getByText(/back/i);

    expect(savebtn).toBeInTheDocument;
    expect(nextbtn).toBeInTheDocument;
    expect(removebtn).toBeInTheDocument;

    expect(savebtn).toHaveAttribute('disabled');
    expect(removebtn).toHaveAttribute('disabled');
    expect(nextbtn).toHaveAttribute('disabled');

    fireEvent.click(testcheck0);
    expect(testcheck0).toBeChecked();
    expect(savebtn).not.toHaveAttribute('disabled');
    expect(removebtn).not.toHaveAttribute('disabled');
    const test0 = wrapper.getByTestId('prod0');
    expect(test0).toBeInTheDocument;

    fireEvent.click(savebtn);
    expect(nextbtn).not.toHaveAttribute('disabled');

    fireEvent.click(nextbtn);
    expect(nextbtn).toHaveAttribute('disabled');
    expect(savebtn).toHaveAttribute('disabled');
    expect(removebtn).toHaveAttribute('disabled');
    expect(wrapper.findByText(/Select product group/i)).toBeInTheDocument;
    const grp0 = wrapper.getByTestId('testcheck0');
    expect(grp0).toBeInTheDocument;

    fireEvent.click(grp0);
    expect(grp0).toBeChecked();
    expect(savebtn).not.toHaveAttribute('disabled');
    expect(removebtn).not.toHaveAttribute('disabled');
    const grpshow0 = wrapper.getByTestId('grp0');
    expect(grpshow0).toBeInTheDocument;

    fireEvent.click(savebtn);
    expect(nextbtn).not.toHaveAttribute('disabled');

    fireEvent.click(nextbtn);
    expect(nextbtn).toHaveAttribute('disabled');
    expect(savebtn).toHaveAttribute('disabled');
    expect(removebtn).toHaveAttribute('disabled');
    expect(wrapper.getByText(/Click on the selected Product groups/i)).toBeInTheDocument;

    fireEvent.click(grpshow0);
    expect(wrapper.getByTestId('testcheck0')).toBeInTheDocument;
    expect(wrapper.getByLabelText(/slips/i)).toBeInTheDocument;
    expect(savebtn).toHaveAttribute('disabled');
    expect(removebtn).toHaveAttribute('disabled');
    
    fireEvent.click(wrapper.getByLabelText(/slips/i));
    expect(wrapper.getByLabelText(/slips/i)).toBeChecked();
    expect(savebtn).not.toHaveAttribute('disabled');
    expect(removebtn).not.toHaveAttribute('disabled');
    expect(nextbtn).toHaveAttribute('disabled');
    
    fireEvent.click(savebtn);
    expect(nextbtn).not.toHaveAttribute('disabled');

    fireEvent.click(nextbtn);
    expect(wrapper.getByRole('button',{name:/summary/i})).toBeInTheDocument;

    fireEvent.click(wrapper.getByRole('button',{name:/summary/i}));
    expect(wrapper.getByRole('dialog'));

})