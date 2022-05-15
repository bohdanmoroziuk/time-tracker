import { FunctionComponent, useState } from 'react';
import { View } from 'react-native';

import TimerForm from 'src/components/TimerForm';
import TimerButton from 'src/components/TimerButton';
import { useTimers, AddTimerAttrs } from 'src/contexts/timers';

import styles from './ToggleableTimerForm.styles';

const ToggleableTimerForm: FunctionComponent = () => {
  const { addTimer } = useTimers();

  const [isOpen, setIsOpen] = useState(false);
  
  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const handleSubmit = (attrs: unknown) => {
    addTimer(attrs as AddTimerAttrs);
    close();
  };

  return (
    <View style={[styles.container, !isOpen && styles.buttonPadding]}>
      {isOpen ? (
        <TimerForm
          onSubmit={handleSubmit}
          onCancel={close}
        />
      ) : (
        <TimerButton
          title="+"
          color="black"
          onPress={open}
        />
      )}
    </View>
  );
};

export default ToggleableTimerForm;
