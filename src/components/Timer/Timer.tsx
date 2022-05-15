import { FunctionComponent } from 'react';
import { Alert, Text, View } from 'react-native';

import TimerButton from 'src/components/TimerButton';
import { millisecondsToHuman } from 'src/utils/timer';
import { useTimers } from 'src/contexts/timers'; 

import styles from './Timer.styles';

export interface TimerProps {
  id: string;
  title: string;
  project: string;
  elapsed: number;
  isRunning?: boolean;
  onEdit: () => void;
}

const Timer: FunctionComponent<TimerProps> = ({
  id,
  title,
  project,
  elapsed,
  isRunning = false,
  onEdit,
}) => {
  const {
    resetTimer,
    removeTimer,
    toggleTimer,
  } = useTimers();

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
        onPress: () => removeTimer(id),
      },
    ],
  );

  const handleStart = () => {
    toggleTimer(id);
  };

  const handleStop = () => {
    toggleTimer(id);
  };

  const handleReset = () => {
    resetTimer(id);
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
          color="black"
          title="Reset"
          onPress={handleReset}
        />
        <TimerButton
          small
          color="red"
          title="Remove"
          onPress={handleRemove}
        />
      </View>
      {isRunning ? (
        <TimerButton
          color="red"
          title="Stop"
          onPress={handleStop}
        />
      ) : (
        <TimerButton
          color="green"
          title="Start"
          onPress={handleStart}
        />
      )}
    </View>
  );
};

export default Timer;