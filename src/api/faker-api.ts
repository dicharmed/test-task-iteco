import { fakerRU as faker } from "@faker-js/faker";

class FakerApi {
  getId(): string {
    return faker.string.uuid();
  }
  getCountry(): string {
    return faker.location.country();
  }
  getCity(): string {
    return faker.location.city();
  }
  getTransportationName(): string {
    return faker.commerce.productName();
  }
  getTransportationNumber(): string {
    return (
      "№" +
      faker.string.alphanumeric({
        length: 6,
        casing: "upper",
      })
    );
  }
  getDate(): Date {
    return faker.date.recent();
  }
  getDistance(): number {
    return faker.number.float({ max: 500, fractionDigits: 1 });
  }
  getPrice(): number {
    return faker.number.int({ min: 10000, max: 1000000 });
  }
  getGSM(): number {
    return faker.number.int({ min: 0, max: 10000 });
  }
}

export const fakerApi = new FakerApi();
