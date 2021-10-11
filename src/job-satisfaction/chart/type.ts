export interface ChartProps {
  label?: string;
  data: number[];
  labels: string[];
}

export enum ChartType {
  VerticalBar,
  Pie,
  HorizontalBar,
}

export interface Dataset {
  label: string;
  data: number[];
  backgroundColor: string[] | string;
  borderColor: string[] | string;
  borderWidth: number;
}

export interface ChartData {
  data: number[];
  labels: string[];
  sum: number;
}

export interface ChartGroup {
  data: number[];
  labels?: string[];
  sum: number;
  label?: string;
}
