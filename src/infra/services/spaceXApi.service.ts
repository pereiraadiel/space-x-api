import { AxiosInstance } from 'axios';
import { AxiosService } from './axios.service';
import { SpaceXRocket } from '../interfaces/spaceXRocket.interface';
import { SpaceXLaunch } from '../interfaces/spaceXLaunch.interface';

export class SpaceXApiService {
  private url: string;
  private instance: AxiosInstance;

  constructor(private readonly axiosService: AxiosService) {
    this.url = 'https://api.spacexdata.com';
    this.instance = this.axiosService.getInstance(this.url);
  }

  async getAllRockets() {
    try {
      const response = await this.instance.get<SpaceXRocket[]>('/v4/rockets');
      return response.data;
    } catch (error) {}
  }

  async getAllLaunches() {
    try {
      const response = await this.instance.get<SpaceXLaunch[]>('/v5/launches');
      return response.data;
    } catch (error) {}
  }
}
