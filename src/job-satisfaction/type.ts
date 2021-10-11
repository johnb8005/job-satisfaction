export interface Matrix {
  compensation: number;
  manager: number;
  team: number;
  location: number;
  work: number;
  freedom: number;
}

export interface Data {
  name?: string;
  matrix: Partial<Matrix>;
}
