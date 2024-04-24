type LocationType = {
  country: string;
  city: string;
};

export type TransportationType = {
  id: string | null;
  from: LocationType | null;
  to: LocationType | null;
  date: Date | string | null;
  transportationName: string | null;
  transportationNumber: string | null;
  distance: number | null;
  price: number | null;
  GSM: number | null;
};
