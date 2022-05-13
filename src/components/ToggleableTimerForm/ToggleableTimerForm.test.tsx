import { render, fireEvent, waitFor } from '@testing-library/react-native';

import ToggleableTimerForm from './ToggleableTimerForm';

afterEach(() => {
  jest.clearAllMocks();
});

describe('ToggleableTimerForm', () => {
  const mockOnSubmit = jest.fn();

  it('shows the timer form when the "+" button is pressed', async () => {
    const { queryByTestId, getByText } = render(<ToggleableTimerForm onSubmit={mockOnSubmit} />);

    expect(queryByTestId('timer-form')).toBeNull();
    
    fireEvent.press(getByText('+'));

    await waitFor(() => {
      expect(queryByTestId('timer-form')).not.toBeNull();
    });
  });
});
