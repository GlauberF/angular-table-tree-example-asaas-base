export interface FlatNode {
  expandable: boolean;
  name: string;
  classification?: string;
  action: any;
  order: number;
  level: number;
  dragAndDrop: boolean;
  children?: FlatNode[];
  updated?: boolean;
}
