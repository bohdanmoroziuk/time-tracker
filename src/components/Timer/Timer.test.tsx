import { render, fireEvent } from '@testing-library/react-native';
import { Alert } from 'react-native';

import Timer from './Timer';

jest.spyOn(Alert, 'alert');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Timer', () => {
  const id = '1';
  const title = 'Abs';
  const project = 'Workout';
  const elapsed = 132323;
  const humanReadableElapsed = "00:02:12";
  const isRunning = false;
  const mockOnEdit = jest.fn();
  const mockOnRemove = jest.fn();

  it('renders successfully', () => {
    const { toJSON } = render(
      <Timer
        {...{
          id,
          title,
          project,
          elapsed,
          isRunning,
          onEdit: mockOnEdit,
          onRemove: mockOnRemove,
        }}
      />
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const { getByText } = render(
      <Timer
        {...{
          id,
          title,
          project,
          elapsed,
          isRunning,
          onEdit: mockOnEdit,
          onRemove: mockOnRemove,
        }}
      />
    );

    expect(getByText(title)).toBeDefined();
    expect(getByText(project)).toBeDefined();
    expect(getByText(humanReadableElapsed)).toBeDefined();
  });

  it('calls an onEdit callback when the edit button is pressed', () => {
    const { getByText } = render(
      <Timer
        {...{
          id,
          title,
          project,
          elapsed,
          isRunning,
          onEdit: mockOnEdit,
          onRemove: mockOnRemove,
        }}
      />
    );

    fireEvent.press(getByText('Edit'));

    expect(mockOnEdit).toHaveBeenCalledTimes(1);
  });

  it('calls an onRemove callback when the remove button is pressed', () => {
    const { getByText } = render(
      <Timer
        {...{
          id,
          title,
          project,
          elapsed,
          isRunning,
          onEdit: mockOnEdit,
          onRemove: mockOnRemove,
        }}
      />
    );

    fireEvent.press(getByText('Remove'));

    /**
     * @see https://stackoverflow.com/a/61125322
     * @see https://spectrum.chat/testing-library/help-react-native/how-do-you-test-an-alert~c05e61a9-c46d-4e2b-b012-3d5d2497aa79?m=MTU3NDA5NjQ0NDMzOQ==
     */
    (Alert.alert as jest.Mock).mock.calls[0][2][1].onPress();

    expect(mockOnRemove).toHaveBeenCalledTimes(1);
    expect(mockOnRemove).toHaveBeenCalledWith(id);
  });
});