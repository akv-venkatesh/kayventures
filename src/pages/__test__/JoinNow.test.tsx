import Joinnow from '../JoinNow';
import * as ReactDom  from 'react-dom';
import {render, screen} from '@testing-library/react';

test('initial test by role',()=>{
  render(<Joinnow />);
  const headingElement = screen.getByRole('heading', {name : 'KAY VENTURES'})
  expect(headingElement).toBeInTheDocument;
})