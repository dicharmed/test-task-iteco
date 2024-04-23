import dayjs from "dayjs";

export const getFormattedPrice = (price: number) => {
  return new Intl.NumberFormat("ru-RU").format(price);
};

export const getFormattedDate = (date: string | Date, format?: string) => {
  return dayjs(date).format(format ?? "MMM D, YYYY h:mm");
};
