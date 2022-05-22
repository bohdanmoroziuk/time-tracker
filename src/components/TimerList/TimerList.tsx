import { FunctionComponent } from 'react'; 
import { ScrollView } from 'react-native';

import EditableTimer from 'src/components/EditableTimer';
import { useTimers, Timer } from 'src/contexts/timers';

import styles from './TimerList.styles';

const renderTimer = (timer: Timer) => (
  <EditableTimer
    id={timer.id}
    key={timer.id}
    title={timer.title}
    project={timer.project}
    elapsed={timer.elapsed}
    isRunning={timer.isRunning}
  />
);

const TimerList: FunctionComponent = () => {
  const { timers } = useTimers();

  return (
    <ScrollView style={styles.timerList}>
      {timers.map(renderTimer)}
    </ScrollView>
  );
}

export default TimerList;
