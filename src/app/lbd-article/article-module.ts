import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ArticleComponent } from './article/container/article.component';
import { ArticleEditorComponent } from './article/containers/article.component';

import { LbdArticleEditorComponent } from './editor/article-editor.component';
import { ArticleResolver } from './article/article-resolver.service';
import { EditableArticleResolver } from './editor/editable-article-resolver.service';
import { LbdArticleListComponent } from './article-list/lbd-article-list.component';

import { AuthGuard } from '../auth/auth-guard.service';

// import { ArticleComponent } from './article.component';
// import { ArticleCommentComponent } from './article-comment.component';
// import { ArticleResolver } from './article-resolver.service';
// import { MarkdownPipe } from './markdown.pipe';
// import { SharedModule } from '../shared';

const articleRouting: ModuleWithProviders = RouterModule.forChild([
  {
        path: 'article/:slug',
        component: ArticleComponent,
        canActivate: [AuthGuard],
        resolve: {
          article: ArticleResolver
        }
      },
      {
        path: 'article-editor',
        component: ArticleEditorComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'article-editor/:slug',
        component: ArticleEditorComponent,
        canActivate: [AuthGuard],
        resolve: {
          article: EditableArticleResolver
        }
      },
      { path: 'article-list', component: ArticleListComponent, canActivate: [AuthGuard] }
]);

@NgModule({
  imports: [
    articleRouting,
    SharedModule
  ],
  declarations: [
    ArticleComponent,
    ArticleCommentComponent,
    MarkdownPipe
  ],

  providers: [
    ArticleResolver
  ]
})
export class ArticleModule {}
