export interface FlatNode {
  id: number;
  name: string;
  classification?: string;
  action?: string[];
  order?: number;
  dragAndDrop?: boolean;
  state?: FlatNodeState;
  expandable: boolean;
  level: number;
  children?: FlatNode[];
}

export enum FlatNodeState {
  updated = 'updated',
  created = 'created',
  deleted = 'deleted'
}
