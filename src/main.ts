import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { TreeListComponent } from './tree-list/tree-list.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, TreeListComponent],
  templateUrl: './main.html',
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
