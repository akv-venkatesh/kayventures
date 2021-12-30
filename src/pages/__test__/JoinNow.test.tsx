import Joinnow from '../JoinNow';
import {render, screen} from '@testing-library/react';

test('initial test by role',()=>{
  render(<Joinnow />);
  const headingElement = screen.getByRole('heading', {name : 'KAY VENTURES'})
  expect(headingElement).toBeInTheDocument;
})