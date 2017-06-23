import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

//import { ArticleListComponent, ArticleMetaComponent, ArticlePreviewComponent } from './article-helpers';
//import { SchoolListComponent, SchoolMetaComponent, SchoolPreviewComponent } from './school-helpers';
// import { CourseListComponent, CourseMetaComponent, CoursePreviewComponent } from './course-helpers';

//import { FavoriteButtonComponent, FollowButtonComponent } from './buttons';
import { ListErrorsComponent } from './list-errors.component';
import { ShowAuthedDirective } from './show-authed.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule
  ],
  declarations: [
    // ArticleListComponent,
    // ArticleMetaComponent,
    // ArticlePreviewComponent,
    // SchoolListComponent,
    // SchoolMetaComponent,
    // SchoolPreviewComponent,
    // CourseListComponent,
    // CourseMetaComponent,
    // CoursePreviewComponent,
    //FavoriteButtonComponent,
    //FollowButtonComponent,
    ListErrorsComponent,
    ShowAuthedDirective
  ],
  exports: [
    // ArticleListComponent,
    // ArticleMetaComponent,
    // ArticlePreviewComponent,
    // SchoolListComponent,
    // SchoolMetaComponent,
    // SchoolPreviewComponent,
    // CourseListComponent,
    // CourseMetaComponent,
    // CoursePreviewComponent,
    CommonModule,
    // FavoriteButtonComponent,
    // FollowButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ListErrorsComponent,
    RouterModule,
    ShowAuthedDirective
  ]
})
export class SharedModule {}
