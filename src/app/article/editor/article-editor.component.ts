import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ArticleService } from '../../lbd/services';
import { Article } from '../../lbd/models';

@Component({
  selector: 'app-editor',
  templateUrl: './article-editor.component.html'
})
export class ArticleEditorComponent implements OnInit {
  article: Article = new Article();

  constructor(
    private articlesService: ArticleService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    // If there's an article prefetched, load it
    this.route.data.subscribe(
      (data: { article: Article }) => {
        if (data.article) {
          this.article = data.article;

        }
      }
    );
  }
}
