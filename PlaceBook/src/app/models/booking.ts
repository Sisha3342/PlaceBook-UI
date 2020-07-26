export interface Booking {
  place: string;
  logo?: string;
  name?: string;
  date: string;
  country: string;
  city: string;
  address: string;
  status: string;
  feedback: string;
  rating: {
    light: number;
    air: number;
    noise: number;
    clean: number;
    location: number;
  };
}
