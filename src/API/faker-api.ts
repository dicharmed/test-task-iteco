import { fakerRU as faker } from "@faker-js/faker";

class FakerApi {
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
    return "№" + faker.string.alphanumeric(6);
  }
  getDate(): Date {
    return faker.date.recent();
  }
  getDistance(): number {
    return faker.number.float({ max: 100000, fractionDigits: 1 });
  }
  getPrice(): number {
    return faker.number.int({ min: 10000, max: 1000000 });
  }
  getGSM(): number {
    return faker.number.int({ min: 0, max: 10000 });
  }
}

export const fakerApi = new FakerApi();
