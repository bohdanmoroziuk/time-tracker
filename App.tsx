import { useState } from 'react'; 
import { Text, View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import 'react-native-get-random-values';
import { nanoid } from 'nanoid';

import EditableTimer from 'src/components/EditableTimer';
import ToggleableTimerForm from 'src/components/ToggleableTimerForm';
import { AddTimerAttrs } from 'src/types';
import { newTimer } from 'src/utils/timer';

import styles from './App.styles';

export interface Timer {
  id: string;
  title: string;
  project: string;
  elapsed: number;
  isRunning: boolean;
}

export interface State {
  timers: Timer[];
}

export default function App() {
  const [state, setState] = useState<State>({
    timers: [
      {
        id: nanoid(),
        title: 'Mow the lawn',
        project: 'House Chores',
        elapsed: 8986300,
        isRunning: true,
      },
      {
        id: nanoid(),
        title: 'Bake squash',
        project: 'Kitchen Chores',
        elapsed: 3890985,
        isRunning: false,
      },
    ],
  });

  const addTimer = (attrs: AddTimerAttrs) => {
    setState((prevState) => ({
      ...prevState,
      timers: [
        newTimer(attrs),
        ...prevState.timers,
      ],
    }));
  };

  return (
    <View style={styles.app}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.title}>Times</Text>
      </View>
      <ScrollView style={styles.timerList}>
        <ToggleableTimerForm onSubmit={addTimer} />
        {state.timers.map((timer) => (
          <EditableTimer
            id={timer.id}
            key={timer.id}
            title={timer.title}
            project={timer.project}
            elapsed={timer.elapsed}
            isRunning={timer.isRunning}
          />
        ))}
      </ScrollView>
    </View>
  );
}
