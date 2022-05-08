import { FunctionComponent } from 'react';
import { Text } from 'react-native';

export interface EditableTimerProps {
  id: string;
  title: string;
  project: string;
  elapsed: string;
  isRunning?: boolean;
  editFormOpen?: boolean;
}

const EditableTimer: FunctionComponent<EditableTimerProps> = ({
  id,
  title,
  project,
  elapsed,
  isRunning = true,
  editFormOpen = true,
}) => {
  return (
    <Text>
      EditableTimer
    </Text>
  );
};

export default EditableTimer;
