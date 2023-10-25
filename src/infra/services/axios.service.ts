import axios from 'axios';

export class AxiosService {
  getInstance(baseUrl: string) {
    return axios.create({
      baseURL: baseUrl,
    });
  }
}
