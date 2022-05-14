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
  onStart: (id: string) => void;
  onStop: (id: string) => void;
  onReset: (id: string) => void;
}

const Timer: FunctionComponent<TimerProps> = ({
  id,
  title,
  project,
  elapsed,
  isRunning = false,
  onEdit,
  onRemove,
  onStart,
  onStop,
  onReset,
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

  const handleStart = () => {
    onStart(id);
  };

  const handleStop = () => {
    onStop(id);
  };

  const handleReset = () => {
    onReset(id);
  };

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
          color="blue"
          title="Reset"
          onPress={handleReset}
        />
        <TimerButton
          small
          color="blue"
          title="Remove"
          onPress={handleRemove}
        />
      </View>
      {isRunning ? (
        <TimerButton
          color="#DB2828"
          title="Stop"
          onPress={handleStop}
        />
      ) : (
        <TimerButton
          color="#21BA45"
          title="Start"
          onPress={handleStart}
        />
      )}
    </View>
  );
};

export default Timer;