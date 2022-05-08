import { FunctionComponent, useMemo } from 'react';
import { Text, View, TextInput } from 'react-native';

import TimerButton from 'src/components/TimerButton';

import styles from './TimerForm.styles';

export interface TimerFormProps {
  id: string;
  title?: string;
  project?: string;
}

const TimerForm: FunctionComponent<TimerFormProps> = ({
  id,
  title = '',
  project = '',
}) => {
  const submitText = useMemo(() => id ? 'Update' : 'Create', [id]);

  return (
    <View style={styles.container}>
      <View style={styles.field}>
        <Text style={styles.textInputLabel}>
          Title
        </Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            defaultValue={title}
          />
        </View>
      </View>
      <View style={styles.field}>
        <Text style={styles.textInputLabel}>
          Project
        </Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            defaultValue={project}
          />
        </View>
      </View>
      <View style={styles.buttonGroup}>
        <TimerButton small color="#21BA45" title={submitText} onPress={() => {}} />
        <TimerButton small color="#DB2828" title="Cancel" onPress={() => {}} />
      </View>
    </View>
  );
};

export default TimerForm;