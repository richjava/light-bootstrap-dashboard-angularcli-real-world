import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Article, ArticleService, UserService } from '../lbd';

@Injectable()
export class ArticleResolver implements Resolve<Article> {
  constructor(
    private articlesService: ArticleService,
    private router: Router,
    private userService: UserService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.articlesService.get(route.params['slug'])
           .catch((err) => this.router.navigateByUrl('/'));

  }
}
