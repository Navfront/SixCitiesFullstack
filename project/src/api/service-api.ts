import axios from 'axios';

export default class ServiceApi {
  private readonly axiosInstance;

  constructor(serverUrl: string) {
    this.axiosInstance = axios.create({
      baseURL: serverUrl,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }

  async loginIn(body: any): Promise<string | string[]> {
    return await this.axiosInstance.post('login', body);
  }
}

export type ServiceApiType = InstanceType<typeof ServiceApi>;
