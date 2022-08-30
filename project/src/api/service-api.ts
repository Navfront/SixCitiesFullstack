import axios from 'axios';
import Cookies from 'js-cookie';

export interface CreateCity {
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  name: string;
}

export interface CreateHotel {
  city: string;
  description: string;
  bedrooms: number;
  goods: string[];
  host: string;
  images: string[];
  is_favorite: boolean;
  is_premium: boolean;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  max_adults: number;
  preview_image: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}

export interface Hotel extends CreateHotel {
  _id: string;
}
export interface ResponseData {
  data: any;
}

interface ResponseCity {
  data: {
    name: string;
    _id: string;
    location: string;
  };
}

interface ResponseLocation {
  data: {
    _id: string;
    latitude: number;
    longitude: number;
    zoom: number;
  };
}

interface ResponseFullCity {
  data: {
    _id: string;
    name: string;
    location: {
      _id: string;
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
}

export default class ServiceApi {
  private readonly axiosInstance;

  constructor(serverUrl: string) {
    this.axiosInstance = axios.create({
      baseURL: serverUrl,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: this.getBearer(),
      },
    });
  }

  private getBearer(): string {
    const token = Cookies.get('token');
    if (token != null) {
      return `Bearer ${token}`;
    }
    return '';
  }

  async loginIn(body: any): Promise<ResponseData> {
    return await this.axiosInstance.post('login', body);
  }

  async getCities(): Promise<ResponseData> {
    return await this.axiosInstance.get('cities');
  }

  async postCity(body: CreateCity): Promise<ResponseData> {
    return await this.axiosInstance.post('cities', body);
  }

  async getCityById(_id: string): Promise<ResponseFullCity> {
    const cityResp = await this.axiosInstance.get<any, ResponseCity>(
      `cities/${_id}`
    );
    const locationResp = await this.axiosInstance.get<any, ResponseLocation>(
      `cities/location/${cityResp.data.location}`
    );
    return { data: { ...cityResp.data, location: { ...locationResp.data } } };
  }

  async postHotel(body: CreateHotel): Promise<ResponseData> {
    return await this.axiosInstance.post('hotels', body);
  }

  async getHotelsByCityId(_id: string): Promise<ResponseData> {
    return await this.axiosInstance.get(`hotels/city/${_id}`);
  }
}

export type ServiceApiType = InstanceType<typeof ServiceApi>;
