let initialTime = "12:00:00AM";
// change time format to 24h

function changeTimeFormat(time) {
  let regPattern = /(PM)/;
  let isPM = time.match(regPattern);
  let hour = time.slice(0, 2);

  if (isPM) {
    let twoDigitHour = Number(hour) + 12; /*?*/
    return `${twoDigitHour}:${time.slice(3, 8)}`; /*?*/
  }
}

changeTimeFormat(initialTime);

// obsuz pozostale przypadki
