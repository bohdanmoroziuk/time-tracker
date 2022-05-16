import { render } from '@testing-library/react-native';

import TimerList from './TimerList';

jest.mock('../../contexts/timers', () => ({
  useTimers: jest.fn().mockImplementation(() => ({
    timers: [
      {
        id: '1',
        title: 'Abs',
        project: 'Workout',
        elapsed: 0,
        isRunning: false,
      },
    ],
  }))
}))

describe('TimerList', () => {
  it('renders a list of timers', () => {
    const { toJSON } = render(<TimerList />);
    
    expect(toJSON()).toMatchSnapshot()
  });
});