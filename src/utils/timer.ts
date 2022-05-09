import 'react-native-get-random-values';
import { nanoid } from 'nanoid';

export const millisecondsToHuman = (ms: number) => {
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / 1000 / 60) % 60);
  const hours = Math.floor(ms / 1000 / 60 / 60);

  const humanized = [
    pad(hours.toString(), 2),
    pad(minutes.toString(), 2),
    pad(seconds.toString(), 2),
  ].join(':');

  return humanized;
};

const pad = (numberString: string, size: number) => {
  let padded = numberString;
  while (padded.length < size) {
    padded = `0${padded}`;
  }
  return padded;
};

export const newTimer = (attrs: { title: string, project: string }) => ({
  id: nanoid(),
  title: attrs.title,
  project: attrs.project,
  elapsed: 0,
  isRunning: false,
});
