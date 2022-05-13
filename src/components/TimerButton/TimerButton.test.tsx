import { render, fireEvent } from '@testing-library/react-native';

import TimerButton from './TimerButton';

describe('TimerButton', () => {
  const color = "blue";
  const title = "Edit";
  const small = true;
  const mockOnPress = jest.fn();

  it('renders successfully', () => {
    const { toJSON } = render(
      <TimerButton
        color={color}
        title={title}
        small={small}
        onPress={mockOnPress}
      />
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('calls an onPress callback when pressed', () => {
    const { getByText } = render(
      <TimerButton
        color={color}
        title={title}
        small={small}
        onPress={mockOnPress}
      />
    );

    fireEvent.press(getByText(title));

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
