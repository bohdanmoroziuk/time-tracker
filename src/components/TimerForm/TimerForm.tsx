import { FunctionComponent, useMemo, useState } from 'react';
import { Text, View, TextInput } from 'react-native';

import TimerButton from 'src/components/TimerButton';

import styles from './TimerForm.styles';

export interface TimerFormProps {
  id?: string;
  title?: string;
  project?: string;
  onSubmit: (timer: { id: string | undefined, title: string, project: string }) => void;
  onClose: () => void;
}

const TimerForm: FunctionComponent<TimerFormProps> = ({
  id,
  title = '',
  project = '',
  onSubmit,
  onClose,
}) => {
  const [fields, setFields] = useState({
    title: id ? title : '',
    project: id ? project : '',
  });

  const submitText = useMemo(() => id ? 'Update' : 'Create', [id]);

  const handleFieldChange = (name: string) => (value: string) => {
    setFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit({
      id,
      title: fields.title,
      project: fields.project,
    });
  };

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
            value={fields.title}
            onChangeText={handleFieldChange('title')}
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
            value={fields.project}
            onChangeText={handleFieldChange('project  ')}
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
          onPress={onClose}
        />
      </View>
    </View>
  );
};

export default TimerForm;