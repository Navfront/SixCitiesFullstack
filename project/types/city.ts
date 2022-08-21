export interface City {
  _id: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  name: string;
}
