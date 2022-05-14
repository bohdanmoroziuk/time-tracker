import { render, fireEvent, waitFor } from '@testing-library/react-native';

import EditableTimer from './EditableTimer';

describe('EditableTimer', () => {
  it('renders the timer form when the edit button is pressed', async () => {
    const id = '1';
    const title = 'Abs';
    const project = 'Workout';
    const elapsed = 132323;
    const isRunning = false;
    const mockOnEdit = jest.fn();
    const mockOnRemove = jest.fn();
    const mockOnStart = jest.fn();
    const mockOnStop = jest.fn();
    const mockOnReset = jest.fn();

    const { getByText, queryByTestId } = render(
      <EditableTimer
        {...{
          id,
          title,
          project,
          elapsed,
          isRunning,
          onEdit: mockOnEdit,
          onRemove: mockOnRemove,
          onStart: mockOnStart,
          onStop: mockOnStop,
          onReset: mockOnReset,
        }}
      />
    );

    expect(queryByTestId('timer-form')).toBeNull();

    fireEvent.press(getByText('Edit'));

    await waitFor(() => {
      expect(queryByTestId('timer-form')).toBeDefined();
    });
  });
});
