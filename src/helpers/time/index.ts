const timeToString = (time: number, sulfix: string): string => {
  return String(time).concat(' ', sulfix);
};

const timeDifference = (createdDatetime: string): string => {
  const min = 60;
  const hour = min * 60;
  const day = hour * 24;
  const year = day * 365;
  const currentTimestamp = new Date().getTime();
  const oldTimestamp = new Date(createdDatetime).getTime();
  const interval = Math.floor((currentTimestamp - oldTimestamp) / 1000);

  const diffInYear = Math.floor(interval / year);
  if (diffInYear >= 1) return timeToString(diffInYear, 'years ago');

  const diffInDay = Math.floor(interval / day);
  if (diffInDay >= 1) return timeToString(diffInDay, 'days ago');

  const diffInHour = Math.floor(interval / hour);
  if (diffInHour >= 1) return timeToString(diffInHour, 'hours ago');

  const diffInMin = Math.floor(interval / min);
  if (diffInMin >= 1) return timeToString(diffInMin, 'minutes ago');

  return 'just now';
};

export default timeDifference;
