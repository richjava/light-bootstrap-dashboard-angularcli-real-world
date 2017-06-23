import { Component, Input, trigger, transition, style, animate } from '@angular/core';

import { Article } from '../../models';

@Component({
  selector: 'article-preview',
  templateUrl: './lbd-article-preview.component.html',
  styleUrls: ['./lbd-article-preview.component.css'],
  animations: [
    trigger('containerarticles', [
      transition('void => *', [
        style({opacity: 0,
          '-ms-transform': 'translate3D(0px, 150px, 0px)',
          '-webkit-transform': 'translate3D(0px, 150px, 0px)',
          '-moz-transform': 'translate3D(0px, 150px, 0px)',
          '-o-transform': 'translate3D(0px, 150px, 0px)',
          transform: 'translate3D(0px, 150px, 0px)',
        }),
        animate('0.3s 0s ease-out', style({opacity: 1,
          '-ms-transform': 'translate3D(0px, 0px, 0px)',
          '-webkit-transform': 'translate3D(0px, px, 0px)',
          '-moz-transform': 'translate3D(0px, 0px, 0px)',
          '-o-transform': 'translate3D(0px, 0px, 0px)',
          transform: 'translate3D(0px, 0px, 0px)',
        }))
      ])
    ])
  ]
})
export class LbdArticlePreviewComponent {
  @Input() article: Article;

  onToggleFavorite(favorited: boolean) {
    this.article['favorited'] = favorited;

    if (favorited) {
      this.article['favoritesCount']++;
    } else {
      this.article['favoritesCount']--;
    }
  }
}
