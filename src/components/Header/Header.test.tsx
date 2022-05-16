import { render } from '@testing-library/react-native';

import Header from './Header';

describe('Header', () => {
  it('renders successfully', () => {
    const title = "Timers";

    const { toJSON } = render(<Header title={title} />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const title = "Timers";

    const { queryByText } = render(<Header title={title} />);

    expect(queryByText(title)).toBeDefined();
  });
});
