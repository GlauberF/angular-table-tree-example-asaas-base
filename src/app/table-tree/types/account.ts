export interface Account {
  id: number;
  name: string;
  classification?: string;
  order?: number;
  action?: string[];
  dragAndDrop?: boolean;
  children?: Account[];
}
