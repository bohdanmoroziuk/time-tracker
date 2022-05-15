import { FunctionComponent } from 'react'; 
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ToastProvider } from 'react-native-toast-notifications'

import { TimersProvider } from 'src/contexts/timers';

import Header from 'src/components/Header';
import TimerList from 'src/components/TimerList';
import ToggleableTimerForm from 'src/components/ToggleableTimerForm';

import styles from './App.styles';

const App: FunctionComponent = () => {
  return (
    <ToastProvider
      placement="top"
      offsetTop={50} 
    >
      <TimersProvider>
        <View style={styles.app}>
          <StatusBar style="auto" />
          <Header title="Timers" />
          <ToggleableTimerForm />
          <TimerList />
        </View>
      </TimersProvider>
    </ToastProvider>
  );
}

export default App;
