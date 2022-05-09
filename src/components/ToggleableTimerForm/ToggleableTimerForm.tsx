import { FunctionComponent, useState } from 'react';
import { View } from 'react-native';

import TimerForm from 'src/components/TimerForm';
import TimerButton from 'src/components/TimerButton';
import { Timer } from 'src/types';

import styles from './ToggleableTimerForm.styles';

export interface TimerAttrs extends Pick<Timer, 'title' | 'project'> {}

export interface ToggleableTimerFormProps {
  onSubmit: (attrs: TimerAttrs) => void;
}

const ToggleableTimerForm: FunctionComponent<ToggleableTimerFormProps> = ({ onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const close = () => {
    setIsOpen(false);
  };

  const handleSubmit = (attrs: TimerAttrs) => {
    onSubmit(attrs);
    close();
  };

  return (
    <View style={[styles.container, !isOpen && styles.buttonPadding]}>
      {isOpen ? (
        <TimerForm
          onSubmit={handleSubmit}
          onClose={close}
        />
      ) : (
        <TimerButton title="+" color="black" onPress={toggle} />
      )}
    </View>
  );
};

export default ToggleableTimerForm;
