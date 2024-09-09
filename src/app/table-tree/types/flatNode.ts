export interface FlatNode {
  id: number;
  name: string;
  classification?: string;
  action?: string[];
  order?: number;
  dragAndDrop?: boolean;
  updated?: boolean;
  expandable: boolean;
  level: number;
  children?: FlatNode[];
}
