export interface LaunchesByYear {
  year: string;
  launches: {
    name: string;
    rocket: string;
    success: boolean;
  }[];
}
