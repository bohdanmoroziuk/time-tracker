export interface Timer {
  id: string;
  title: string;
  project: string;
  elapsed: number;
  isRunning: boolean;
}

export type AddTimerAttrs = Pick<Timer, 'title' | 'project'>;

export type UpdateTimerAttrs = Pick<Timer, 'id' | 'title' | 'project'>;
