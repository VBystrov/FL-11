function formatTime(minutes) {
  const minutesInDay = 1440;
  const minutesInHour = 60;
  let days = 0, hours = 0;
  days = Math.floor(minutes / minutesInDay);
  minutes = minutes % minutesInDay;
  hours = Math.floor(minutes / minutesInHour);
  minutes = minutes % minutesInHour;
  return days + " day(s) " + hours + " hour(s) " + minutes + " minute(s)";
}
console.log(formatTime(3601));