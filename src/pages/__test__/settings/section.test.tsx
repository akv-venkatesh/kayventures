import { render, fireEvent } from '@testing-library/react';

import { MemoryRouter as Router } from 'react-router-dom';
import selectEvent from 'react-select-event';

import Section from '../../settings/kyc/Section';
import { testStore } from '../testStore';
let wrapper: any;

const setup = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = render(<Router><Section /></Router>);
    return wrapper;
}
beforeEach(() => {
    wrapper = setup({});
});

test('initial test section', async () => {
    expect(wrapper.getByRole('heading', { name: /Add Sections/i })).toBeInTheDocument;
    expect(wrapper.getByRole('heading', { name: /Add Photos & Videos/i })).toBeInTheDocument;
});

//fire events
test('fire event section', async () => {
    //select box
    expect(wrapper.getByTestId('areaType')).toHaveFormValues({ areaType: '' });
    await selectEvent.select(wrapper.getByLabelText('Building Area'), ['Building Area']);
    expect(wrapper.getByTestId('areaType')).toHaveFormValues({ areaType: 'Building Area' });


});