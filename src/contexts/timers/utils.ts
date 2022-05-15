import 'react-native-get-random-values';
import { nanoid } from 'nanoid';

import { AddTimerAttrs } from 'src/contexts/timers/types';

export const newTimer = (attrs: AddTimerAttrs) => ({
  id: nanoid(),
  title: attrs.title,
  project: attrs.project,
  elapsed: 0,
  isRunning: false,
});
