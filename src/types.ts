export interface Timer {
  id: string;
  title: string;
  project: string;
  elapsed: number;
  isRunning: boolean;
}

export type AddTimerAttrs = Pick<Timer, 'title' | 'project'>;
