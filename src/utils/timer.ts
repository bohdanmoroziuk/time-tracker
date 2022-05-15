export const millisecondsToHuman = (ms: number) => {
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / 1000 / 60) % 60);
  const hours = Math.floor(ms / 1000 / 60 / 60);

  const humanized = [
    hours,
    minutes,
    seconds,
  ]
    .map((value) => value.toString().padStart(2, '0'))
    .join(':');

  return humanized;
};
