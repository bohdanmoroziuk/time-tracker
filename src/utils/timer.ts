export const millisecondsToSeconds = (ms: number) => Math.floor((ms / 1000) % 60);

export const millisecondsToMinutes = (ms: number) => Math.floor((ms / 1000 / 60) % 60);

export const millisecondsToHours = (ms: number) => Math.floor(ms / 1000 / 60 / 60);

export const millisecondsToHuman = (ms: number) => {
  const seconds = millisecondsToSeconds(ms)
  const minutes = millisecondsToMinutes(ms);
  const hours = millisecondsToHours(ms)

  const normalize = (value: number) => value.toString().padStart(2, '0');

  const humanized = [
    hours,
    minutes,
    seconds,
  ]
    .map(normalize)
    .join(':');

  return humanized;
};
