import { Timer, AddTimerAttrs, UpdateTimerAttrs } from 'src/contexts/timers/types';
import { newTimer } from 'src/contexts/timers/utils';

export interface AddTimerAction {
  type: 'ADD_TIMER';
  payload: {
    attrs: AddTimerAttrs;
  };
}

export interface UpdateTimerAction {
  type: 'UPDATE_TIMER';
  payload: {
    attrs: UpdateTimerAttrs;
  };
}

export interface ResetTimerAction {
  type: 'RESET_TIMER';
  payload: {
    id: string;
  }
}

export interface RemoveTimerAction {
  type: 'REMOVE_TIMER';
  payload: {
    id: string;
  }
}

export interface ToggleTimerAction {
  type: 'TOGGLE_TIMER';
  payload: {
    id: string;
  }
}

export interface TickAction {
  type: 'TICK';
}

export type TimersAction = 
  | AddTimerAction
  | UpdateTimerAction
  | RemoveTimerAction
  | ResetTimerAction
  | ToggleTimerAction
  | TickAction;

export type TimersState = Timer[];

export const initialState: TimersState = [];

const INCREASE = 1000;

export const timersReducer = (state: TimersState = initialState, action: TimersAction): TimersState => {
  switch (action.type) {
    case 'ADD_TIMER': 
      return [
        newTimer(action.payload.attrs),
        ...state,
      ];
    case 'UPDATE_TIMER': 
      const { id, title, project } = action.payload.attrs;

      return state.map((timer) => (
        timer.id === id 
          ? { ...timer, title, project }
          : timer
      ));
    case 'REMOVE_TIMER':
      return state.filter((timer) => timer.id !== action.payload.id);
    case 'RESET_TIMER':
      return state.map((timer) => (
        timer.id === action.payload.id
          ? { ...timer, elapsed: 0 }
          : timer
      ));
    case 'TOGGLE_TIMER': 
      return state.map((timer) => (
        timer.id === action.payload.id
          ? { ...timer, isRunning: !timer.isRunning }
          : timer
      ));
    case 'TICK':
      return state.map((timer) => (
        timer.isRunning
          ? { ...timer, elapsed: timer.elapsed + INCREASE }
          : timer
      ));
    default:
      return state;
  }
};
