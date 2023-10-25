export interface SpaceXLaunch {
  id: string;
  name: string;
  flight_number: number;
  success: boolean;
  date_utc: Date;
  rocket: string;
  links: {
    youtube_id: string;
  };
}
