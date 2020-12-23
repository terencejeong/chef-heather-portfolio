export default function getTime(date?: Date) {
  return date != null ? date.getTime() : 0;
}
