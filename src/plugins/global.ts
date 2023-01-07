const formatDate = (dateArg: any, fullDate: any) => {
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
  let monthNumber: string | number = date.getMonth() + 1;
  const monthName = monthNames[monthNumber - 1];
  let monthDate: string | number = date.getDate();
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

const numberFunction = (number: number): string => {
  return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

const getImgUrl = (url: string) => {
  return new URL(`../assets/image/${url}`, import.meta.url).href;
};

export default { formatDate, numberFunction, getImgUrl };
