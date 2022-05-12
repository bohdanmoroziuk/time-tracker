import { FunctionComponent, useState } from 'react';

import Timer from 'src/components/Timer';
import TimerForm from 'src/components/TimerForm';

export interface EditableTimerProps {
  id: string;
  title: string;
  project: string;
  elapsed: number;
  isRunning?: boolean;
  onEdit: (attrs: unknown) => void,
}

const EditableTimer: FunctionComponent<EditableTimerProps> = ({
  id,
  title,
  project,
  elapsed,
  isRunning = false,
  onEdit,
}) => {
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);

  const openEditForm = () => {
    setIsEditFormOpen(true);
  };

  const closeEditForm = () => {
    setIsEditFormOpen(false);
  };

  const handleStartEditing = () => {
    openEditForm();
  };

  const handleCancelEditing = () => {
    closeEditForm();
  };

  const handleEdit = (attrs: unknown) => {
    onEdit(attrs);
    closeEditForm();
  };

  if (isEditFormOpen) {
    return (
      <TimerForm
        id={id}
        title={title}
        project={project}
        onCancel={handleCancelEditing}
        onSubmit={handleEdit}
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
      onEdit={handleStartEditing}
    />
  );
};

export default EditableTimer;
