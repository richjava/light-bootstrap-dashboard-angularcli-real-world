import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { FooterLayoutComponent } from './footer-layout/footer-layout.component';
import { LbdModule } from './lbd/lbd.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { UserEditorComponent } from './user/user-editor.component';
import { ProfileResolver } from './lbd/services/profile-resolver.service';
import { TableComponent } from './table/table.component';
import { ArticleComponent } from './lbd/lbd-article/article/container/article.component';
import { ArticleEditorComponent } from './article/editor/article-editor.component';
import { ArticleResolver } from './article/article-resolver.service';
import { EditableArticleResolver } from './article/editor/editable-article-resolver.service';
import { ArticleListComponent } from './article/article-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
  { path: 'maps', component: MapsComponent, canActivate: [AuthGuard] },
  {
    path: '', component: FooterLayoutComponent, children:
    [
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      {
        path: 'user',
        component: UserEditorComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'user/:username',
        component: UserComponent,
        canActivate: [AuthGuard],
        resolve: {
          profile: ProfileResolver
        },
      },
      { path: 'table', component: TableComponent, canActivate: [AuthGuard] },
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
      { path: 'article-list', component: ArticleListComponent, canActivate: [AuthGuard] },
      { path: 'typography', component: TypographyComponent, canActivate: [AuthGuard] },
      { path: 'icons', component: IconsComponent, canActivate: [AuthGuard] },
      { path: 'notifications', component: NotificationsComponent, canActivate: [AuthGuard] },
      { path: '**', redirectTo: 'dashboard' }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterLayoutComponent,
    DashboardComponent,
    UserComponent,
    UserEditorComponent,
    TableComponent,
    ArticleComponent,
    ArticleEditorComponent,
    ArticleListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent
  ],
  imports: [
    AuthModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyAEPDOJl5CPLz6NZcMqJBqZWfVXec3UsJg' }),
    LbdModule
  ],
  providers: [
    ArticleResolver,
    AuthModule,
    EditableArticleResolver,
    ProfileResolver,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
