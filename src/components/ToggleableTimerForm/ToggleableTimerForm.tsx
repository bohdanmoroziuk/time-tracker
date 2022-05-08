import { FunctionComponent } from 'react';
import { Text } from 'react-native';

export interface ToggleableTimerFormProps {
  isOpen?: boolean;
}

const ToggleableTimerForm: FunctionComponent<ToggleableTimerFormProps> = ({ isOpen = true }) => {
  return (
    <Text>
      ToggleableTimerForm
    </Text>
  );
};

export default ToggleableTimerForm;
