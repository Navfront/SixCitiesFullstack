import axios from 'axios';
import Cookies from 'js-cookie';
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

  async loginIn(body: any): Promise<string | string[]> {
    return await this.axiosInstance.post('login', body);
  }

  async getCities(): Promise<string | string[]> {
    return await this.axiosInstance.get('cities');
  }
}

export type ServiceApiType = InstanceType<typeof ServiceApi>;
