import { FunctionComponent } from 'react';
import { Text, View } from 'react-native';

import TimerButton from 'src/components/TimerButton';
import { millisecondsToHuman } from 'src/utils/timer';

import styles from './Timer.styles';
export interface TimerProps {
  id: string;
  title: string;
  project: string;
  elapsed: number;
  isRunning?: boolean;
  onEdit: () => void;
  // onRemove: () => void;
  // onStart: () => void;
  // onStop: () => void;
}

const Timer: FunctionComponent<TimerProps> = ({
  title,
  project,
  elapsed,
  isRunning = false,
  onEdit,
}) => {
  const elapsedTime = millisecondsToHuman(elapsed);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text>{project}</Text>
      <Text style={styles.elapsedTime}>{elapsedTime}</Text>
      <View style={styles.buttonGroup}>
        <TimerButton
          small
          color="blue"
          title="Edit"
          onPress={onEdit}
        />
        <TimerButton small color="red" title="Remove" onPress={() => {}} />
      </View>
      <TimerButton color="#21BA45" title="Start" onPress={() => {}} />
    </View>
  );
};

export default Timer;