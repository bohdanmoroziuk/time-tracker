import { FunctionComponent } from 'react';
import { View } from 'react-native';

import TimerForm from 'src/components/TimerForm';
import TimerButton from 'src/components/TimerButton';

import styles from './ToggleableTimerForm.styles';

export interface ToggleableTimerFormProps {
  isOpen?: boolean;
}

const ToggleableTimerForm: FunctionComponent<ToggleableTimerFormProps> = ({ isOpen = false }) => {
  return (
    <View style={[styles.container, !isOpen && styles.buttonPadding]}>
      {isOpen ? (
        <TimerForm />
      ) : (
        <TimerButton title="+" color="black" onPress={() => {}} />
      )}
    </View>
  );
};

export default ToggleableTimerForm;
