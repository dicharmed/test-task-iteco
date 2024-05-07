import dayjs from "dayjs";
// import "dayjs/locale/ru.js";
// dayjs.locale("ru");
export const getFormattedPrice = (price: number) => {
  return new Intl.NumberFormat("ru-RU").format(price);
};

export const getFormattedDate = (date: string | Date, format?: string) => {
  const formatted = dayjs(date).format(format ?? "D MMM YYYY");
  return formatted;

  // return date;
};

export const formatDateToDdMmYYYY = (
  date: dayjs.Dayjs | null,
): string | null => {
  if (date) {
    return date?.format("DD.MM.YYYY");
  }

  return null;
};

export const formatDateFromDdMmYYYY = (date: string): dayjs.Dayjs => {
  return dayjs(date, "DD.MM.YYYY");
};

export const debounce = <F extends (...args: any[]) => any>(
  func: F,
  delay: number,
) => {
  // Declare a variable called 'timer' to store the timer ID
  let timer: number;

  // Return an anonymous function that takes in any number of arguments
  return function (...args: Array<string>) {
    // Clear the previous timer to prevent the execution of 'mainFunction'
    clearTimeout(timer);

    // Set a new timer that will execute 'mainFunction' after the specified delay
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
