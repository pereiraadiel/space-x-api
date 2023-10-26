export interface SpaceXLaunch {
  id: string;
  name: string;
  flight_number: number;
  success: boolean | null;
  date_utc: Date;
  rocket: string;
  links: {
    youtube_id: string;
    patch: {
      small: string;
    };
  };
}
