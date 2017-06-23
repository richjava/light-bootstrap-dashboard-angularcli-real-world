import {Component, Input, ChangeDetectionStrategy, trigger, state, style, transition, animate} from '@angular/core';
import { Article } from '../../models';

@Component({
  selector: 'lbd-article',
  templateUrl: './lbd-article.component.html',
  styleUrls: ['./lbd-article.component.css'],
  animations: [
    trigger('cardarticle', [
      state('*', style({
        '-ms-transform': 'translate3D(0px, 0px, 0px)',
        '-webkit-transform': 'translate3D(0px, 0px, 0px)',
        '-moz-transform': 'translate3D(0px, 0px, 0px)',
        '-o-transform': 'translate3D(0px, 0px, 0px)',
        transform: 'translate3D(0px, 0px, 0px)',
        opacity: 1})),
      transition('void => *', [
        style({opacity: 0,
          '-ms-transform': 'translate3D(0px, 150px, 0px)',
          '-webkit-transform': 'translate3D(0px, 150px, 0px)',
          '-moz-transform': 'translate3D(0px, 150px, 0px)',
          '-o-transform': 'translate3D(0px, 150px, 0px)',
          transform: 'translate3D(0px, 150px, 0px)',
        }),
        animate('0.3s 0s ease-out')
      ])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LbdArticleComponent {
  @Input()
  public article: Article;

  constructor() { }
}
