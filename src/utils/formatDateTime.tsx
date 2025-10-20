export function formatDateTime(isoString: string):{ date: string; time: string } {
  const dateObj = new Date(isoString);

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const year = dateObj.getUTCFullYear();
  const month = months[dateObj.getUTCMonth()];
  const day = dateObj.getUTCDate();

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

  const hours = String(dateObj.getUTCHours()).padStart(2, "0");
  const minutes = String(dateObj.getUTCMinutes()).padStart(2, "0");
  const seconds = String(dateObj.getUTCSeconds()).padStart(2, "0");
  const time = `${hours}:${minutes}`;

  return { date, time };
}