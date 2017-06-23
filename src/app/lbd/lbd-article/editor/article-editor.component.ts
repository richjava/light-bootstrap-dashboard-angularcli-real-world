import { Component, OnInit, Input, trigger, state, style, transition, animate } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ArticleService } from '../../services';
import { Article } from '../../models';

@Component({
  selector: 'lbd-article-editor',
  templateUrl: './article-editor.component.html',
  animations: [
    trigger('cardarticleeditor', [
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
  ]
})
export class LbdArticleEditorComponent implements OnInit {
 @Input()
  public article: Article;

 
// export class EditorComponent implements OnInit {
//   article: Article = new Article();
  articleForm: FormGroup;
  tagField = new FormControl();
  errors: Object = {};
  isSubmitting = false;

  constructor(
    private articlesService: ArticleService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    // use the FormBuilder to create a form group
    this.articleForm = this.fb.group({
      title: '',
      description: '',
      body: '',
    });
    // Optional: subscribe to value changes on the form
    // this.articleForm.valueChanges.subscribe(value => this.updateArticle(value));
  }

  ngOnInit() {
    // If there's an article prefetched, load it
    // this.route.data.subscribe(
    //   (data: {article: Article}) => {
    //     if (data.article) {
    //       this.article = data.article;
          this.articleForm.patchValue(this.article);
    //     }
    //   }
    // );
  }

  addTag() {
    // retrieve tag control
    const tag = this.tagField.value;
    // only add tag if it does not exist yet
    if (this.article.tagList.indexOf(tag) < 0) {
      this.article.tagList.push(tag);
    }
    // clear the input
    this.tagField.reset('');
  }

  removeTag(tagName: string) {
    this.article.tagList = this.article.tagList.filter((tag) => tag !== tagName);
  }

  submitForm() {
    this.isSubmitting = true;

    // update the model
    this.updateArticle(this.articleForm.value);

    // post the changes
    this.articlesService
    .save(this.article)
    .subscribe(
      article => this.router.navigateByUrl('/article/' + article.slug),
      err => {
        this.errors = err;
        this.isSubmitting = false;
      }
    );
  }

  updateArticle(values: Object) {
    (<any>Object).assign(this.article, values);
  }
}
