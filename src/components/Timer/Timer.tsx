import { FunctionComponent } from 'react';
import { Text } from 'react-native';

export interface TimerProps {
  id: string;
  title: string;
  project: string;
  elapsed: string;
  isRunning?: boolean;
}

const Timer: FunctionComponent<TimerProps> = () => {
  return (
    <Text>
      Timer
    </Text>
  );
};

export default Timer;