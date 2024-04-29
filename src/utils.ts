import dayjs from "dayjs";

export const getFormattedPrice = (price: number) => {
  return new Intl.NumberFormat("ru-RU").format(price);
};

export const getFormattedDate = (date: string | Date, format?: string) => {
  return dayjs(date).format(format ?? "MMM D, YYYY h:mm");
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
