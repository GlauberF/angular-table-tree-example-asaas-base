import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TableTreeComponent} from "./table-tree/table-tree.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableTreeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-table-tree-example-asaas-base';
}
