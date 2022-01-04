import Capacity from '../../settings/ProductConfiguration/capacity';
import {fireEvent, render, screen} from '@testing-library/react';
import{testStore} from "../testStore"
import {MemoryRouter as Router} from 'react-router-dom';
let wrapper:any;
import { Provider } from 'react-redux';
import selectEvent from 'react-select-event';

const setup = (initialState={})=>{
    const store = testStore(initialState);
    const wrapper = render(<Router><Provider store={store}><Capacity/></Provider></Router>);
    return wrapper; 
}
beforeEach(() => {
    wrapper = setup({});
});
test('register form test',()=>{
    const testcheck = wrapper.getByRole('heading',{name: /Select the machinery/i});
    expect(testcheck).toBeInTheDocument;
    const linenumber = wrapper.getByPlaceholderText(/Enter Line Number/i);
    expect(linenumber).toBeInTheDocument;
    expect(wrapper.getByTestId('prod-grp00')).toBeInTheDocument;
    expect(wrapper.getByText(/linetype/i)).toBeInTheDocument; 

})


//fireevents

test('onChange the product type',async ()=>{
    const linenumber = wrapper.getByPlaceholderText(/Enter Line Number/i);
    fireEvent.change(linenumber, { target: { value: "anand" } });
    expect(wrapper.getByDisplayValue(/anand/i)).toBeInTheDocument;

    fireEvent.click(wrapper.getByTestId('prod-grp00'));
    expect(wrapper.getByTestId('prod-grp00')).toBeChecked();
    expect(wrapper.getAllByText('Innerwear')).toHaveLength(2);

    expect(wrapper.getByTestId('form')).toHaveFormValues({linetype: ''})
    // await selectEvent.select(wrapper.getByLabelText('linetype'), ['open'])
    fireEvent.click(await wrapper.getByText(/linetype/i));
    expect(wrapper.findByRole('combobox')).toBeInTheDocument;
    // fireEvent.change(wrapper.getByRole('combobox',{'describedby':/react-select-5-placeholder/i}), { target: { value: "op" } });

    expect(wrapper.getByTestId('machine1')).toBeInTheDocument;

    fireEvent.click(wrapper.getByTestId('machine1'));
    expect(wrapper.getByTestId('machine1')).toBeChecked();
    expect(wrapper.getAllByText(/double needle/i)).toHaveLength(2);
    expect(wrapper.getByTestId('savemachine')).toHaveAttribute('disabled');

    fireEvent.change(wrapper.getByPlaceholderText('Enter no of machines'), { target: { value: "12" } });


})