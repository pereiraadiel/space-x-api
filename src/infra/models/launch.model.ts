export class LaunchModel {
  rocket: string;
  links: {
    youtube_id: string;
  };
  success: boolean;
  failures: any[];
  flight_number: number;
  date_utc: Date;
  id: string;
  name: string;
  launchpad: string;
}
