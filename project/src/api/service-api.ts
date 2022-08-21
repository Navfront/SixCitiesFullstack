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

export interface ResponseData {
  data: any;
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
}

export type ServiceApiType = InstanceType<typeof ServiceApi>;
