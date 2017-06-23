import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Article } from '../../lbd/models';
import { ArticleService, UserService } from '../../lbd/services';

@Injectable()
export class EditableArticleResolver implements Resolve<Article> {
  constructor(
    private articlesService: ArticleService,
    private router: Router,
    private userService: UserService
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.articlesService.get(route.params['slug'])
      .map(
      article => {
        //if (this.userService.getCurrentUser().username === article.author.username) {
          return article;
        //} else {
          //this.router.navigateByUrl('/');
       // }

      }
      )
      .catch((err) => this.router.navigateByUrl('/'));

  }
}
