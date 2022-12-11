import {fireEvent, render, screen} from '@testing-library/react';
import {Button} from './Button';

test('render button', () => {
  const onClick = jest.fn();
  render(<Button onClick={onClick}>Button</Button>);
  const buttonElement = screen.getByText('clickMe');
  fireEvent.click(buttonElement);
  expect(onClick).toHaveBeenCalledTimes(1);
});
