const formatDate = (dateArg, fullDate) => {
  const date = new Date(dateArg.toLocaleString());
  const monthNames = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentyabr",
    "Oktyabr",
    "Noyabr",
    "Dekabr",
  ];
  const year = date.getFullYear();
  let monthNumber = date.getMonth() + 1;
  const monthName = monthNames[monthNumber - 1];
  let monthDate = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  monthNumber = monthNumber < 10 ? "0" + monthNumber : monthNumber;
  monthDate = monthDate < 10 ? "0" + monthDate : monthDate;
  if (fullDate) {
    return `${monthNumber}.${monthDate}.${year}`;
  } else {
    return `${monthDate} ${monthName}, ${hours}:${minutes}`;
  }
};
export default formatDate;
//# sourceMappingURL=global.js.map
