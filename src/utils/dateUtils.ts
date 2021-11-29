export function convertDate(milliseconds: number){
  const date = new Date(milliseconds * 1000)
  const month = MONTHS[date.getMonth()]
  const day = dayFormatter(date.getDate())
  const time = toTimeFormat(date.getHours(), date.getMinutes())

  return {
    date: `${month}, ${day}`,
    time: time
  }
}

export const toTimeFormat = (hours: number, minutes: number | string): string => {
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0'+minutes : minutes;
  return hours + ':' + minutes + ' ' + ampm;
}

export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export const dayFormatter = (day: number) => {
  const ends = day % 10;
  switch (ends) {
    case 1:
      return day + 'st';
    case 2:
      return day + 'nd';
    case 3:
      return day + 'rd';
    default:
      return day + 'th';
  }
}