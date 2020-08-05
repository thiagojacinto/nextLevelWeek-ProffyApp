export default function convertHourToMinutes(time: string) {
  // 9:00 => 9 * 60 = 540

  const [hours, minutes] = time.split(":").map(Number);
  const timeInMinutes = hours * 60 + minutes;

  return timeInMinutes;
}
