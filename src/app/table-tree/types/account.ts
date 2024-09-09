export interface Account {
  name: string;
  classification?: string;
  action?: any;
  order?: number;
  children?: Account[];
  dragAndDrop: boolean;
}
