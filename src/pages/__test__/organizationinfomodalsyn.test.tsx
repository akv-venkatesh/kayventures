import OrganizationinfoModalSyn from '../settings/Organization/OrganizationinfoModalSyn';
import {fireEvent, render, screen} from '@testing-library/react';
import{testStore} from "./testStore";
import logo_img from  '../../../assets/insertImage.png';
import {MemoryRouter as Router} from 'react-router-dom';
let wrapper:any;

const setup = (initialState={})=>{
    const store = testStore(initialState);
    const wrapper = render(<Router><OrganizationinfoModalSyn /></Router>);
    return wrapper;
}
beforeEach(() => {
    wrapper = setup({});
});

test('initial test ',()=>{
  const headingElement = screen.getByRole('heading', {name : 'Syndicate Fashions'});
  const paraElement = screen.getByTestId('para');
  expect(headingElement).toBeInTheDocument;
  expect(paraElement).toHaveTextContent("Private Limited Company")
  })

describe('insertImage', () => {
  test('Image must have src={logo_img} and alt = "insertImage"', () => {
    render(<OrganizationinfoModalSyn/>);
    const insertImage = screen.getByRole('img');
    expect(insertImage).toHaveAttribute('src', 'logo_img');
    expect(insertImage).toHaveAttribute('alt', 'insertImage');
  });
});





