import { createContext, useContext } from 'react';

import { Timer, AddTimerAttrs, UpdateTimerAttrs } from 'src/contexts/timers/types';

export interface TimersContextValue {
  timers: Timer[];
  addTimer: (attrs: AddTimerAttrs) => void;
  updateTimer: (attrs: UpdateTimerAttrs) => void;
  resetTimer: (id: string) => void;
  removeTimer: (id: string) => void;
  toggleTimer: (id: string) => void;
}

export const TimersContext = createContext<TimersContextValue>({} as TimersContextValue);

export const useTimers = () => {
  const context = useContext(TimersContext);

  if (context) return context;

  throw new Error('No timers provided');
};
