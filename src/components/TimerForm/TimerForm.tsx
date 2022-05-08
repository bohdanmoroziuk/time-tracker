import { FunctionComponent } from 'react';
import { Text } from 'react-native';

export interface TimerFormProps {
  id: string;
  title: string;
  project: string;
}

const TimerForm: FunctionComponent<TimerFormProps> = () => {
  return (
    <Text>
      TimerForm
    </Text>
  );
};

export default TimerForm;