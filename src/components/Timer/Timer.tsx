import { FunctionComponent } from 'react';
import { Alert, Text, View } from 'react-native';

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
  onRemove: (id: string) => void;
  // onStart: () => void;
  // onStop: () => void;
}

const Timer: FunctionComponent<TimerProps> = ({
  id,
  title,
  project,
  elapsed,
  isRunning = false,
  onEdit,
  onRemove,
}) => {
  const elapsedTime = millisecondsToHuman(elapsed);

  const handleRemove = () => Alert.alert(
    'Confirm the operation',
    'Are you sure you want to remove the timer?',
    [
      {
        text: 'No',
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => onRemove(id),
      },
    ],
  );

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
        <TimerButton
          small
          color="red"
          title="Remove"
          onPress={handleRemove}
        />
      </View>
      <TimerButton color="#21BA45" title="Start" onPress={() => {}} />
    </View>
  );
};

export default Timer;