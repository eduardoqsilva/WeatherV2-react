export function GetDatesArray() {
  const dates = [];

  for (let i = 0; i < 5; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i + 1);
    date.setUTCHours(12, 0, 0, 0);
  
    const dayOfWeek = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'][date.getDay()];
  
    dates.push({ date: date.toISOString().slice(0, 19).replace('T', ' '), day: dayOfWeek });
  }

  return dates;
}