let initialTime = "12:33:00PM";
// change time format to 24h

function changeTimeFormat(time) {
  let regPatternPM = /(PM)/;
  let regPatternAM = /(AM)/;
  let isPM = time.match(regPatternPM);
  let hour = time.slice(0, 2);

  if (isPM) {
    let twoDigitHour = Number(hour) + 12; /*?*/
    if(hour === "12") {
      return time.substring(0, time.length - 2) /*?*/
    }
    return `${twoDigitHour}:${time.slice(3, 8)}`; /*?*/
  } else if(regPatternAM) {
      if(hour === '12') {
        return `00:${time.slice(3, 8)}`; /*?*/
      }
    return time.substring(0, time.length - 2) /*?*/
  } else {
    return time; /*?*/ 
  }
}

changeTimeFormat(initialTime);

