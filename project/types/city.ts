export interface City {
  _id: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  name: string;
}

export interface FullCity extends City {
  location: {
    _id: string;
    latitude: number;
    longitude: number;
    zoom: number;
  };
}
