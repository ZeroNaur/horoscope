
export const listOfZodiacs = [
  "Aries", "Taurus", "Gemini", "Cancer",
  "Leo", "Virgo", "Libra", "Scorpio",
  "Sagittarius", "Capricorn", "Aquarius", "Pisces" 
]

const currentTime = new Date();

export function getCurrentDate() {
  return currentTime.getDate();
}

export function getCurrentMonth() {
  return currentTime.getMonth() + 1;
}

export function getCurrentYear() {
  return currentTime.getFullYear();
}

export function getFetchDateMin() {
  const currentDate = getCurrentDate();
  const currentMonth = getCurrentMonth();
  const currentYear = getCurrentYear();

  if ([1, 3, 5, 7, 8, 10, 12].includes(currentMonth)) {
    if (currentDate === 31) return 1;
  }

  if ([4, 6, 9, 11].includes(currentMonth)) {
    if (currentDate === 30) return 1;
  }

  if (currentMonth === 2) {
    if (!currentYear % 4) {
      if (currentDate === 28) {
        return 29;
      }
      if (currentDate === 29) {
        return 1;
      }
    }

    if (currentDate === 28) return 1;
  }

  return getCurrentDate() + 1;
}

export function getFetchMonthMin() {
  return getCurrentMonth();
}

export function getFetchYearMin() {
  return getCurrentYear() - 1;
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