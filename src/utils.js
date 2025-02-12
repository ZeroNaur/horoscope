
export const listOfZodiacs = [
  "Aries", "Taurus", "Gemini", "Cancer",
  "Leo", "Virgo", "Libra", "Scorpio",
  "Sagittarius", "Capricorn", "Aquarius", "Pisces" 
]

const currentTime = new Date();

export function getUTCDate() {
  return currentTime.getUTCDate();
}

export function getUTCMonth() {
  return currentTime.getUTCMonth() + 1;
}

export function getUTCYear() {
  return currentTime.getUTCFullYear();
}

export function joinDate(year, month, date) {
  let filteredMonth = month;

  if (month < 10) {
    filteredMonth = "0" + month;
  } 

  return `${year}-${filteredMonth}-${date}`;
}

export function getZodiacTimeRange(type) {
  switch (type) {
    case "aquarius":
      return "Jan 20 - Feb 18"
    case "aries":
      return "Mar 21 - Apr 19"
    case "cancer":
      return "Jun 22 - Jul 22"
    case "capricorn":
      return "Dec 22 - Jan 19"
    case "gemini":
      return "May 21 - Jun 21"
    case "leo":
      return "Jul 23 - Aug 22"
    case "libra":
      return "Sep 23 - Oct 23"
    case "pisces":
      return "Feb 19 - Mar 20"
    case "sagittarius":
      return "Nov 22 - Dec 21"
    case "scorpio":
      return "Oct 24 - Nov 21"
    case "taurus":
      return "Apr 20 - May 20"
    case "virgo":
      return "Aug 23 - Sep 22"
    default:
      return "error"
  }
}

export function translateMonth(code) {
  switch (code) {
    case "01":
      return "Jan";
    case "02":
      return "Feb";
    case "03":
      return "Mar";
    case "04":
      return "Apr";
    case "05":
      return "May";
    case "06":
      return "Jun";
    case "07":
      return "Jul";
    case "08":
      return "Aug";
    case "09":
      return "Sep";
    case "10":
      return "Oct";
    case "11":
      return "Nov";
    case "12":
      return "Dec";
  }
}

export function translateTime(time) {
  const timeArray = time.split("-");

  return ( 
    `${translateMonth(timeArray[1])} ${timeArray[2]}, ${timeArray[0]}`
  )
}

