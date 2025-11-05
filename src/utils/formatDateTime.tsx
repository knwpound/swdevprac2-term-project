export function formatDateTime(isoString: string):{ date: string; time: string } {
  const dateObj = new Date(isoString);

  const thaiTime = new Date(dateObj.getTime() + (7 * 60 * 60 * 1000));

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const year = thaiTime.getUTCFullYear();
  const month = months[thaiTime.getUTCMonth()];
  const day = thaiTime.getUTCDate();

  function getDaySuffix(d: number): string {
    if (d >= 11 && d <= 13) return "th";
    switch (d % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  }

  const date = `${year} ${month} ${day}${getDaySuffix(day)}`;

  const hours = String(thaiTime.getUTCHours()).padStart(2, "0");
  const minutes = String(thaiTime.getUTCMinutes()).padStart(2, "0");
  const seconds = String(thaiTime.getUTCSeconds()).padStart(2, "0");
  const time = `${hours}:${minutes}`;

  return { date, time };
}