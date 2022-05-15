import { FunctionComponent } from 'react'; 
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Header from 'src/components/Header';
import ToggleableTimerForm from 'src/components/ToggleableTimerForm';
import TimerList from 'src/components/TimerList';

import { TimersProvider } from 'src/contexts/timers';

import styles from './App.styles';

const App: FunctionComponent = () => {
  return (
    <TimersProvider>
      <View style={styles.app}>
        <StatusBar style="auto" />
        <Header title="Timers" />
        <ToggleableTimerForm />
        <TimerList />
      </View>
    </TimersProvider>
  );
}

export default App;
