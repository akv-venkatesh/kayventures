import Capacity from '../../settings/ProductConfiguration/capacity';
import {fireEvent,findByText, render, screen, getByText   } from '@testing-library/react';
import{testStore} from "../testStore"
import {MemoryRouter as Router} from 'react-router-dom';
let wrapper:any;
import { Provider } from 'react-redux';
import selectEvent from 'react-select-event';


let container: HTMLDivElement
const setup = (initialState={})=>{
    const store = testStore(initialState);
    wrapper = render(<Router><Provider store={store}><Capacity/></Provider></Router>);
    return wrapper; 
}
beforeEach(() => {
    wrapper = setup({});
});
const keyDownEvent = {
    key: 'ArrowDown',
};
test('register form test',()=>{
    const testcheck = wrapper.getByRole('heading',{name: /Select the machinery/i});
    expect(testcheck).toBeInTheDocument;
    const linenumber = wrapper.getByPlaceholderText(/Enter Line Number/i);
    expect(linenumber).toBeInTheDocument;
    expect(wrapper.getByTestId('prod-grp00')).toBeInTheDocument;

})


//fireevents

test('onChange the product type',async ()=>{

    //step1
    const linenumber = wrapper.getByPlaceholderText(/Enter Line Number/i);
    fireEvent.change(linenumber, { target: { value: "anand" } });
    expect(wrapper.getByDisplayValue(/anand/i)).toBeInTheDocument;

    //step2
    fireEvent.click(wrapper.getByTestId('prod-grp00'));
    expect(wrapper.getByTestId('prod-grp00')).toBeChecked();
    expect(wrapper.getAllByText('Innerwear')).toHaveLength(2);

    //select Event--step3
    expect(wrapper.getByTestId('form-line-type')).toHaveFormValues({linetype: ''});
    await selectEvent.select( wrapper.getByLabelText('LineType'), ['Open']);
    expect(wrapper.getByTestId('form-line-type')).toHaveFormValues({linetype:'Open'});
    
    expect(wrapper.getByTestId('form-material-type')).toHaveFormValues({materialtype: ''});
    await selectEvent.select( wrapper.getByLabelText('MaterialType'), 'Natural');
    expect(wrapper.getByTestId('form-material-type')).toHaveFormValues({materialtype:'Natural'});
    
    //step4
    expect(wrapper.getByTestId('machine1')).toBeInTheDocument;
    fireEvent.click(wrapper.getByTestId('machine1'));
    expect(wrapper.getByTestId('machine1')).toBeChecked();
    expect(wrapper.getAllByText(/double needle/i)).toHaveLength(2);


    //step5
    expect(wrapper.getByTestId('savemachine')).toHaveAttribute('disabled');
    fireEvent.change(wrapper.getByPlaceholderText('Enter no of machines'), { target: { value: "12" } });

    expect(wrapper.getByTestId('savemachine')).not.toHaveAttribute('disabled');

    //click save btn
    expect(wrapper.getByRole('button',{name: 'Add Machine'})).toHaveAttribute('disabled');
    expect(wrapper.getByTestId('saveline')).toHaveAttribute('disabled');
    fireEvent.click(wrapper.getByTestId('savemachine'));
    expect(wrapper.getByRole('button',{name: 'Add Machine'})).not.toHaveAttribute('disabled');
    expect(wrapper.getByTestId('saveline')).not.toHaveAttribute('disabled');

    //click save for line
    const addline = wrapper.queryByRole('button',{name: 'Add Line'});
    expect(addline).toBeInTheDocument;
    const summary = wrapper.queryByRole('button',{name: 'Summary'});
    expect(summary).not.toBeInTheDocument;
    fireEvent.click(wrapper.getByTestId('saveline'));
    expect(wrapper.getByRole('button',{name: 'Add Line'})).toBeInTheDocument;
    expect(wrapper.getByRole('button',{name: 'Summary'})).toBeInTheDocument;


})