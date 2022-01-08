
import { getByRole, render, screen, fireEvent } from '@testing-library/react';

import { MemoryRouter as Router } from 'react-router-dom';
import selectEvent from 'react-select-event';
import Esg from '../../settings/kyc/Esg/Esg';



import { testStore } from '../testStore';
let wrapper: any;

const setup = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = render(<Router><Esg /></Router>);
    return wrapper;
}
beforeEach(() => {
    wrapper = setup({});
});

test('test esg text', () => {

    expect(screen.getByText('Click on the above buttons to add the')).toBeInTheDocument;
    expect(screen.getByText('ESG Certificates.')).toBeInTheDocument;

})

//fire event
test('esg button click', async () => {
    const summaryClick = jest.fn()
    fireEvent.click(screen.getByText(/summary/i))
    expect(summaryClick).toBeInTheDocument;
    const envClick = jest.fn()
    fireEvent.click(screen.getByRole('button', { name: /environmental/i }))
    expect(envClick).toBeInTheDocument;
    const socialClick = jest.fn()
    fireEvent.click(screen.getByRole('button', { name: /social/i }))
    expect(socialClick).toBeInTheDocument;
    const giverClick = jest.fn()
    fireEvent.click(screen.getByRole('button', { name: /governance/i }))
    expect(giverClick).toBeInTheDocument;


    const envevent = fireEvent.click(screen.getByRole('button', { name: /Environmental/i }))
    const heading = screen.getByRole('heading', { name: /Attach your certificates/i })
    const certifyNum = screen.getByPlaceholderText('Certificate No.')
    fireEvent.change(certifyNum, { target: { value: "vinoth" } })
    expect(envevent).toBeInTheDocument;
    expect(heading).toBeInTheDocument;
    expect(certifyNum).toBeInTheDocument;
    expect(wrapper.getByDisplayValue(/vinoth/i).toBeInTheDocument);
    expect(wrapper.getByLabelText(/Attach your certificate here/i).toBeInTheDocument);

    const saveClick = jest.fn()
    fireEvent.click(screen.getByText(/save/i))
    expect(saveClick).toBeInTheDocument;
    const removeClick = jest.fn()
    fireEvent.click(screen.getByText(/remove/i))
    expect(removeClick).toBeInTheDocument;


    //selectbox when environmental button click
    expect(wrapper.getByTestId('environmental')).toHaveFormValues({ environmental: '' });
    await selectEvent.select(wrapper.getByLabelText('Select Certificate'), ['EMAS']);
    expect(wrapper.getByTestId('environmental')).toHaveFormValues({ environmental: 'EMAS' });

    //cerifiedby selectbox when environmental button click
    expect(wrapper.getByTestId('CerifiedBy')).toHaveFormValues({ CerifiedBy: '' });
    await selectEvent.select(wrapper.getByLabelText('Cerified by'), ['SSG']);
    expect(wrapper.getByTestId('CerifiedBy')).toHaveFormValues({ CerifiedBy: 'SSG' });

    //selectbox when social button click
    const eventSocial = fireEvent.click(wrapper.getByRole('button', { name: /social/i }));
    expect(eventSocial).toBeInTheDocument;
    expect(wrapper.getByTestId('social')).toHaveFormValues({ social: '' });
    await selectEvent.select(wrapper.getByLabelText('Select Certificate'), ['SA 8000']);
    expect(wrapper.getByTestId('social')).toHaveFormValues({ social: 'SA 8000' });

    //selectbox when social button click
    const eventgovernance = fireEvent.click(wrapper.getByRole('button', { name: /governance/i }));
    expect(eventgovernance).toBeInTheDocument;
    expect(wrapper.getByTestId('governance')).toHaveFormValues({ governance: '' });
    await selectEvent.select(wrapper.getByLabelText('Select Certificate'), ['PE, ESI']);
    expect(wrapper.getByTestId('governance')).toHaveFormValues({ governance: 'PE, ESI' });
})

