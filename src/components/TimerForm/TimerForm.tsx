import { FunctionComponent, useMemo, useState } from 'react';
import { Text, View, TextInput } from 'react-native';

import TimerButton from 'src/components/TimerButton';

import styles from './TimerForm.styles';

export interface TimerFormProps {
  id?: string;
  title?: string;
  project?: string;
  onSubmit: (timer: unknown) => void;
  onCancel: () => void;
}

const TimerForm: FunctionComponent<TimerFormProps> = ({
  onSubmit,
  onCancel,
  id,
  ...restProps
}) => {
  const [title, setTitle] = useState(restProps.title ?? '');

  const [project, setProject] = useState(restProps.project ?? '');

  const submitText = useMemo(() => id ? 'Update' : 'Create', [id]);

  const handleTitleChange = (text: string) => {
    setTitle(text);
  };

  const handleProjectChange = (text: string) => {
    setProject(text);
  };

  const handleSubmit = () => {
    onSubmit({
      id,
      title,
      project,
    });
  };

  return (
    <View
      style={styles.container}
      testID="timer-form"  
    >
      <View style={styles.field}>
        <Text style={styles.textInputLabel}>
          Title
        </Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Title"
            underlineColorAndroid="transparent"
            value={title}
            onChangeText={handleTitleChange}
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
            placeholder="Project"
            underlineColorAndroid="transparent"
            value={project}
            onChangeText={handleProjectChange}
          />
        </View>
      </View>
      <View style={styles.buttonGroup}>
        <TimerButton
          small
          color="#21BA45"
          title={submitText}
          onPress={handleSubmit}
        />
        <TimerButton
          small
          color="#DB2828"
          title="Cancel"
          onPress={onCancel}
        />
      </View>
    </View>
  );
};

export default TimerForm;
