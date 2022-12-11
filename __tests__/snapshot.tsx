import Home from '@/src/view/pages/index';
import {render} from '@testing-library/react';

it('renders homepage unchanged', () => {
  const {container} = render(<Home />);
  expect(container).toMatchSnapshot();
});
