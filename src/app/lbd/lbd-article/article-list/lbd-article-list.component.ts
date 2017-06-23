import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import { Article } from '../../models';
// export interface TableData {
//   headerRow: string[];
//   dataRows: string[][];
// }

@Component({
  selector: 'lbd-article-list',
  templateUrl: './lbd-article-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LbdArticleListComponent {
  @Input()
  public title: string;

  @Input()
  public subtitle: string;

  @Input()
  public cardClass: string;

  @Input()
  public articles: Article;

  constructor() { }
}
