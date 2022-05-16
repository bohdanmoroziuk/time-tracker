import { render, fireEvent } from '@testing-library/react-native';
import { Alert } from 'react-native';

import Timer from './Timer';

jest.spyOn(Alert, 'alert');

const mockRemoveTimer = jest.fn();
const mockResetTimer = jest.fn();
const mockToggleTimer = jest.fn();

jest.mock('../../contexts/timers', () => ({
  useTimers: jest.fn().mockImplementation(() => ({
    removeTimer: mockRemoveTimer,
    resetTimer: mockResetTimer,
    toggleTimer: mockToggleTimer,
  })),
}));

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
        }}
      />
    );

    expect(getByText(title)).toBeDefined();
    expect(getByText(project)).toBeDefined();
    expect(getByText(humanReadableElapsed)).toBeDefined();
  });

  it('enables editing mode', () => {
    const { getByText } = render(
      <Timer
        {...{
          id,
          title,
          project,
          elapsed,
          isRunning,
          onEdit: mockOnEdit,
        }}
      />
    );

    fireEvent.press(getByText('Edit'));

    expect(mockOnEdit).toHaveBeenCalledTimes(1);
  });

  it('removes the timer', () => {
    const { getByText } = render(
      <Timer
        {...{
          id,
          title,
          project,
          elapsed,
          isRunning,
          onEdit: mockOnEdit,
        }}
      />
    );

    fireEvent.press(getByText('Remove'));

    /**
     * @see https://stackoverflow.com/a/61125322
     * @see https://spectrum.chat/testing-library/help-react-native/how-do-you-test-an-alert~c05e61a9-c46d-4e2b-b012-3d5d2497aa79?m=MTU3NDA5NjQ0NDMzOQ==
     */
    (Alert.alert as jest.Mock).mock.calls[0][2][1].onPress();

    expect(mockRemoveTimer).toHaveBeenCalledTimes(1);
    expect(mockRemoveTimer).toHaveBeenCalledWith(id);
  });

  it('resets the timer', () => {
    const { getByText } = render(
      <Timer
        {...{
          id,
          title,
          project,
          elapsed,
          isRunning,
          onEdit: mockOnEdit,
        }}
      />
    );

    fireEvent.press(getByText('Reset'));

    expect(mockResetTimer).toHaveBeenCalledTimes(1);
    expect(mockResetTimer).toHaveBeenCalledWith(id);
  });

  it('toggles the timer state', () => {
    const { getByText, rerender } = render(
      <Timer
        {...{
          id,
          title,
          project,
          elapsed,
          isRunning,
          onEdit: mockOnEdit,
        }}
      />
    );

    fireEvent.press(getByText('Start'));

    expect(mockToggleTimer).toHaveBeenCalledTimes(1);
    expect(mockToggleTimer).toHaveBeenCalledWith(id);

    rerender(
      <Timer
        {...{
          id,
          title,
          project,
          elapsed,
          isRunning: true,
          onEdit: mockOnEdit,
        }}
      />
    );

    fireEvent.press(getByText('Stop'));

    expect(mockToggleTimer).toHaveBeenCalledTimes(2);
    expect(mockToggleTimer).toHaveBeenCalledWith(id);
  });
});
