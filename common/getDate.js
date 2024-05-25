function getCurrentDate() {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date();
  var currDate =
    date.getDate() +
    " " +
    months[date.getMonth()] +
    " " +
    date.getFullYear() +
    ", " +
    date.getHours() +
    ":" +
    date.getMinutes();
  return currDate;
}

module.exports = getCurrentDate;
