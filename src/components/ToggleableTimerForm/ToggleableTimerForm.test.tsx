import { render, fireEvent, waitFor } from '@testing-library/react-native';

import ToggleableTimerForm from './ToggleableTimerForm';

describe('ToggleableTimerForm', () => {
  it('shows the timer form when the "+" button is pressed', async () => {
    const { queryByTestId, getByText } = render(<ToggleableTimerForm />);

    expect(queryByTestId('timer-form')).toBeNull();
    
    fireEvent.press(getByText('+'));

    await waitFor(() => {
      expect(queryByTestId('timer-form')).not.toBeNull();
    });
  });
});
