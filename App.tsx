import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView } from 'react-native';

import EditableTimer from 'src/components/EditableTimer';
import ToggleableTimerForm from 'src/components/ToggleableTimerForm';

import styles from './App.styles';

export default function App() {
  return (
    <View style={styles.app}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.title}>Times</Text>
      </View>
      <ScrollView style={styles.timerList}>
        <ToggleableTimerForm isOpen={false} />
        <EditableTimer
          id="1"
          title="Mow the lawn"
          project="House Chores"
          elapsed="8986300"
          isRunning
        />
        <EditableTimer
          id="2"
          title="Bake squash"
          project="Kitchen Chores"
          elapsed="3890985"
          editFormOpen
        />
      </ScrollView>
    </View>
  );
}
