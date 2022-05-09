import { FunctionComponent, useState } from 'react';
import { View } from 'react-native';

import TimerForm from 'src/components/TimerForm';
import TimerButton from 'src/components/TimerButton';

import styles from './ToggleableTimerForm.styles';

export interface ToggleableTimerFormProps {}

const ToggleableTimerForm: FunctionComponent<ToggleableTimerFormProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <View style={[styles.container, !isOpen && styles.buttonPadding]}>
      {isOpen ? (
        <TimerForm />
      ) : (
        <TimerButton title="+" color="black" onPress={toggle} />
      )}
    </View>
  );
};

export default ToggleableTimerForm;
