export default function convertToHumanTime(duration) {
  let sec = parseInt((duration / 1000) % 60, 10);
  sec = (sec < 10) ? `0${sec}` : sec;

  const min = parseInt((duration / (1000 * 60)) % 60, 10);
  return `${min}:${sec}`;
}
