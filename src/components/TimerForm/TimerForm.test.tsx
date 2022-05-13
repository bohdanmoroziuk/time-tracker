import { render, fireEvent, waitFor } from '@testing-library/react-native';

import TimerForm from './TimerForm';

afterEach(() => {
  jest.clearAllMocks();
});

describe('TimerForm', () => {
  const id = '1';
  const title = 'Abs';
  const project = 'Workout';
  const mockOnSubmit = jest.fn();
  const mockOnCancel = jest.fn();

  it('adds the new timer when the create button is pressed', async () => {
    const { getByText, getByPlaceholderText } = render(
      <TimerForm
        onSubmit={mockOnSubmit}
        onCancel={mockOnCancel}
      />
    );

    fireEvent.changeText(getByPlaceholderText('Title'), 'Abs');
    fireEvent.changeText(getByPlaceholderText('Project'), 'Workout');

    fireEvent.press(getByText('Create'));

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledTimes(1);
      expect(mockOnSubmit).toHaveBeenCalledWith({
        title: 'Abs',
        project: 'Workout',
      });
      expect(mockOnCancel).not.toHaveBeenCalled();
    });
  });

  it('updates the existing timer when the update button is pressed', async () => {
    const { getByText, getByPlaceholderText } = render(
      <TimerForm
        id={id}
        title={title}
        project={project}
        onSubmit={mockOnSubmit}
        onCancel={mockOnCancel}
      />
    );

    fireEvent.changeText(getByPlaceholderText('Title'), 'Back');
    fireEvent.changeText(getByPlaceholderText('Project'), 'Workout');

    fireEvent.press(getByText('Update'));

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledTimes(1);
      expect(mockOnSubmit).toHaveBeenCalledWith({
        id: '1',
        title: 'Back',
        project: 'Workout',
      });
      expect(mockOnCancel).not.toHaveBeenCalled();
    });
  });

  it('calls the onCancel callback when the cancel button is pressed', async () => {
    const { getByText } = render(
      <TimerForm
        onSubmit={mockOnSubmit}
        onCancel={mockOnCancel}
      />
    );

    fireEvent.press(getByText('Cancel'));

    await waitFor(() => {
      expect(mockOnCancel).toHaveBeenCalledTimes(1);
      expect(mockOnSubmit).not.toHaveBeenCalled();
    });
  });
});