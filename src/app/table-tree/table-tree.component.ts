import { Component } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import {CdkDrag, CdkDragDrop, CdkDropList, DragDropModule, moveItemInArray} from '@angular/cdk/drag-drop';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import { MatIconButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";

import { TreeData } from './mock/treeData';
import { Account } from './types/account';
import {FlatNode, FlatNodeState} from './types/flatNode';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-table-tree',
  standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatIconButton,
    MatIcon,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    DragDropModule,
    CdkDropList,
    CdkDrag,
    NgIf
  ],
  templateUrl: './table-tree.component.html',
  styleUrls: ['./table-tree.component.scss']
})
export class TableTreeComponent {

  displayedColumns: string[] = ['name', 'classification', 'action'];

  private transformer = (node: Account, level: number): FlatNode => {
    return {
      expandable: !!node.children && node.children.length > 0,
      id: node.id,
      name: node.name,
      classification: node.classification,
      action: node.action,
      level: level || 0,
      order: node.order || 0,
      children: <FlatNode[]>node?.children,
      dragAndDrop: node.dragAndDrop || false
    };
  };

  treeControl = new FlatTreeControl<FlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this.transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TreeData;
  }

  hasChild = (_: number, node: FlatNode) => node.expandable;

  drop(event: CdkDragDrop<FlatNode[]>) {
    const node = event?.item?.data;
    if(!node) return;

    if (!node?.dragAndDrop || node.dragAndDrop === false) {
      event?.event?.preventDefault?.();
      return;
    }
    console.log('passou :', node);

    const parentNode = this.getParentNode(node);
    console.log("parentNode : ", parentNode)

    if (parentNode) {
      const children = parentNode?.children;
      console.log("children: ", children)

      if (children) {
        const previousIndex = children.findIndex((child) => child === node);
        moveItemInArray(children, previousIndex, event.currentIndex);
        this.updateOrder(children);

        // Preserve the expansion state
        const expandedNodes = this.treeControl.expansionModel.selected.map((n: FlatNode) => n.name);
        this.dataSource.data = [...this.dataSource.data]; // Trigger change detection
        this.treeControl.dataNodes.forEach(n => {
          if (expandedNodes.includes(n.name)) {
            this.treeControl.expand(n);
          }
        });
      }
    }

    console.log(this.dataSource.data)
  }

  getParentNode(node: FlatNode): FlatNode | null {
    const currentLevel = this.treeControl.getLevel(node);
    if (currentLevel < 1) {
      return null;
    }

    const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;
    for (let i = startIndex; i >= 0; i--) {
      const currentNode = this.treeControl.dataNodes[i];
      if (this.treeControl.getLevel(currentNode) < currentLevel) {
        return currentNode;
      }
    }
    return null;
  }

  updateOrder(children: FlatNode[]) {
    children.forEach((child, index) => {
      child['order'] = index + 1;
      this.markItemState(child, FlatNodeState.updated);
    });
  }

  markItemState(item: FlatNode, state: FlatNodeState): FlatNode {
    item['state'] = state;
    return item;
  }
}
