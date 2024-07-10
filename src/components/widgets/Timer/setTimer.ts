// Функция позволяет указывать дни и часы таймера
export function setTimer(days: number, hours: number) {
  const now = new Date();
  const msInDay = 24 * 60 * 60 * 1000;
  const msInHour = 60 * 60 * 1000;
  const time = new Date(now.getTime() + days * msInDay + hours * msInHour);
  return time;
}
