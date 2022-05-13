import { FunctionComponent, useState } from 'react';
import { View } from 'react-native';

import TimerForm from 'src/components/TimerForm';
import TimerButton from 'src/components/TimerButton';

import styles from './ToggleableTimerForm.styles';

export interface ToggleableTimerFormProps {
  onSubmit: (attrs: unknown) => void;
}

const ToggleableTimerForm: FunctionComponent<ToggleableTimerFormProps> = ({ onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const handleSubmit = (attrs: unknown) => {
    onSubmit(attrs);
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
