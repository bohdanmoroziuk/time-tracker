import { FunctionComponent, useState } from 'react';

import Timer, { TimerProps } from 'src/components/Timer';
import TimerForm from 'src/components/TimerForm';

export interface EditableTimerProps extends TimerProps {
  editFormOpen?: boolean;
}

const EditableTimer: FunctionComponent<EditableTimerProps> = ({
  id,
  title,
  project,
  elapsed,
  isRunning = false,
}) => {
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);

  if (isEditFormOpen) {
    return (
      <TimerForm
        id={id}
        title={title}
        project={project}
      />
    );
  }

  return (
    <Timer
      id={id}
      title={title}
      project={project}
      elapsed={elapsed}
      isRunning={isRunning}
    />
  );
};

export default EditableTimer;
