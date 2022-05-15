import { FunctionComponent, useReducer, useEffect } from 'react';
import { useToast } from 'react-native-toast-notifications';

import { AddTimerAttrs, UpdateTimerAttrs } from 'src/contexts/timers/types';
import { TimersContext } from 'src/contexts/timers/TimersContext';
import { timersReducer, initialState } from 'src/contexts/timers/timersReducer';

export const TimersProvider: FunctionComponent = ({ children }) => {
  const toast = useToast();

  const [timers, dispatch] = useReducer(timersReducer, initialState);

  const addTimer = (attrs: AddTimerAttrs) => {
    dispatch({
      type: 'ADD_TIMER',
      payload: {
        attrs,
      }
    });

    toast.show('New timer added');
  };

  const updateTimer = (attrs: UpdateTimerAttrs) => {
    dispatch({
      type: 'UPDATE_TIMER',
      payload: {
        attrs,
      },
    });

    toast.show('Timer updated');
  };

  const removeTimer = (id: string) => {
    dispatch({
      type: 'REMOVE_TIMER',
      payload: {
        id,
      },
    });

    toast.show('Timer removed');
  };

  const resetTimer = (id: string) => {
    dispatch({
      type: 'RESET_TIMER',
      payload: {
        id,
      },
    });
  };

  const toggleTimer = (id: string) => {
    dispatch({
      type: 'TOGGLE_TIMER',
      payload: {
        id,
      },
    });
  };

  const tick = () => {
    dispatch({
      type: 'TICK',
    });
  };

  useEffect(() => {
    const DELAY = 1000;

    let intervalId = setInterval(tick, DELAY);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <TimersContext.Provider
      value={{
        timers,
        addTimer,
        updateTimer,
        resetTimer,
        removeTimer,
        toggleTimer,
      }}
    >
      {children}
    </TimersContext.Provider>
  );
};
