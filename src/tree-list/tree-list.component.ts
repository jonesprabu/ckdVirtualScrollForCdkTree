import { ArrayDataSource } from '@angular/cdk/collections';
import {
  ScrollingModule,
  VIRTUAL_SCROLL_STRATEGY,
} from '@angular/cdk/scrolling';
import { CdkTreeModule, FlatTreeControl } from '@angular/cdk/tree';
import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { combineLatest, map, Observable, of, startWith } from 'rxjs';
import { TreeVsStratergyService } from '../tree-vs-stratergy.service';

// const TREE_DATA: ExampleFlatNode[] = [
//   {
//     name: 'Fruit',
//     expandable: true,
//     level: 0,
//   },
//   {
//     name: 'Apple',
//     expandable: false,
//     level: 1,
//   },
//   {
//     name: 'Banana',
//     expandable: false,
//     level: 1,
//   },
//   {
//     name: 'Fruit loops',
//     expandable: false,
//     level: 1,
//   },
//   {
//     name: 'Vegetables',
//     expandable: true,
//     level: 0,
//   },
//   {
//     name: 'Green',
//     expandable: true,
//     level: 1,
//   },
//   {
//     name: 'Broccoli',
//     expandable: false,
//     level: 2,
//   },
//   {
//     name: 'Brussels sprouts',
//     expandable: false,
//     level: 2,
//   },
//   {
//     name: 'Orange',
//     expandable: true,
//     level: 1,
//   },
//   {
//     name: 'Pumpkins',
//     expandable: false,
//     level: 2,
//   },
//   {
//     name: 'Carrots',
//     expandable: false,
//     level: 2,
//   },
// ];

const TREE_DATA: ExampleFlatNode[] = [
  {
    name: 'Fruit',
    expandable: false,
    level: 0,
  },
  {
    name: 'Apple',
    expandable: false,
    level: 0,
  },
  {
    name: 'Banana',
    expandable: false,
    level: 0,
  },
  {
    name: 'Fruit loops',
    expandable: false,
    level: 0,
  },
  {
    name: 'Vegetables',
    expandable: false,
    level: 0,
  },
  {
    name: 'Green',
    expandable: false,
    level: 0,
  },
  {
    name: 'Broccoli',
    expandable: false,
    level: 0,
  },
  {
    name: 'Brussels sprouts',
    expandable: false,
    level: 0,
  },
  {
    name: 'Orange',
    expandable: false,
    level: 0,
  },
  {
    name: 'Pumpkins',
    expandable: false,
    level: 0,
  },
  {
    name: 'Carrots',
    expandable: false,
    level: 0,
  },
  {
    name: 'Fruit',
    expandable: false,
    level: 0,
  },
  {
    name: 'Apple',
    expandable: false,
    level: 0,
  },
  {
    name: 'Banana',
    expandable: false,
    level: 0,
  },
  {
    name: 'Fruit loops',
    expandable: false,
    level: 0,
  },
  {
    name: 'Vegetables',
    expandable: false,
    level: 0,
  },
  {
    name: 'Green',
    expandable: false,
    level: 0,
  },
  {
    name: 'Broccoli',
    expandable: false,
    level: 0,
  },
  {
    name: 'Brussels sprouts',
    expandable: false,
    level: 0,
  },
  {
    name: 'Orange',
    expandable: false,
    level: 0,
  },
  {
    name: 'Pumpkins',
    expandable: false,
    level: 0,
  },
  {
    name: 'Carrots',
    expandable: false,
    level: 0,
  },
  {
    name: 'Fruit',
    expandable: false,
    level: 0,
  },
  {
    name: 'Apple',
    expandable: false,
    level: 0,
  },
  {
    name: 'Banana',
    expandable: false,
    level: 0,
  },
  {
    name: 'Fruit loops',
    expandable: false,
    level: 0,
  },
  {
    name: 'Vegetables',
    expandable: false,
    level: 0,
  },
  {
    name: 'Green',
    expandable: false,
    level: 0,
  },
  {
    name: 'Broccoli',
    expandable: false,
    level: 0,
  },
  {
    name: 'Brussels sprouts',
    expandable: false,
    level: 0,
  },
  {
    name: 'Orange',
    expandable: false,
    level: 0,
  },
  {
    name: 'Pumpkins',
    expandable: false,
    level: 0,
  },
  {
    name: 'Carrots',
    expandable: false,
    level: 0,
  },
  {
    name: 'Fruit',
    expandable: false,
    level: 0,
  },
  {
    name: 'Apple',
    expandable: false,
    level: 0,
  },
  {
    name: 'Banana',
    expandable: false,
    level: 0,
  },
  {
    name: 'Fruit loops',
    expandable: false,
    level: 0,
  },
  {
    name: 'Vegetables',
    expandable: false,
    level: 0,
  },
  {
    name: 'Green',
    expandable: false,
    level: 0,
  },
  {
    name: 'Broccoli',
    expandable: false,
    level: 0,
  },
  {
    name: 'Brussels sprouts',
    expandable: false,
    level: 0,
  },
  {
    name: 'Orange',
    expandable: false,
    level: 0,
  },
  {
    name: 'Pumpkins',
    expandable: false,
    level: 0,
  },
  {
    name: 'Carrots',
    expandable: false,
    level: 0,
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  isExpanded?: boolean;
}

@Component({
  selector: 'app-tree-list',
  standalone: true,
  imports: [CdkTreeModule, ScrollingModule, MatButtonModule, MatIconModule],
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.css'],
  providers: [
    {
      provide: VIRTUAL_SCROLL_STRATEGY,
      useClass: TreeVsStratergyService,
    },
  ],
})
export class TreeListComponent implements OnInit {
  // Manually set the amount of buffer and the height of the table elements
  static BUFFER_SIZE = 3;
  gridHeight = 400;
  rowHeight = 48;
  headerHeight = 10;

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  rows = of(TREE_DATA);

  // dataSource = new ArrayDataSource(TREE_DATA);
  dataSource: Observable<ExampleFlatNode[]> = this.rows;

  constructor(
    @Inject(VIRTUAL_SCROLL_STRATEGY)
    private readonly scrollStrategy: TreeVsStratergyService
  ) {}

  public ngOnInit() {
    const range =
      Math.ceil(this.gridHeight / this.rowHeight) +
      TreeListComponent.BUFFER_SIZE;
    this.scrollStrategy.setScrollHeight(this.rowHeight, this.headerHeight);

    this.dataSource = combineLatest({
      a: this.rows,
      b: this.scrollStrategy.scrolledIndexChange,
    }).pipe(
      map((value: any) => {
        console.log(value.b);
        // Determine the start and end rendered range
        const start = Math.max(0, value.b - TreeListComponent.BUFFER_SIZE);
        const end = Math.min(value.a.length, value.b + range);

        // // Update the datasource for the rendered range of data
        return value.a.slice(start, end);
        //return value.a;
      })
    );
    //   .subscribe(console.log);
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  getParentNode(node: ExampleFlatNode) {
    const nodeIndex = TREE_DATA.indexOf(node);

    for (let i = nodeIndex - 1; i >= 0; i--) {
      if (TREE_DATA[i].level === node.level - 1) {
        return TREE_DATA[i];
      }
    }

    return null;
  }

  shouldRender(node: ExampleFlatNode) {
    let parent = this.getParentNode(node);
    while (parent) {
      if (!parent.isExpanded) {
        return false;
      }
      parent = this.getParentNode(parent);
    }
    return true;
  }
}
