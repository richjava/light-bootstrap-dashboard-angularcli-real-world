import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';
import { Course, CourseListConfig } from '../models';

@Injectable()
export class CourseService {
  constructor (
    private apiService: ApiService
  ) {}

  query(config: CourseListConfig): Observable<{courses: Course[], coursesCount: number}> {
    // Convert any filters over to Angular's URLSearchParams
    const params: URLSearchParams = new URLSearchParams();

    Object.keys(config.filters)
    .forEach((key) => {
      params.set(key, config.filters[key]);
    });

    return this.apiService
    .get(
      '/courses',
      params
    ).map(data => data);
  }

  getBySchool(slug): Observable<Course[]> {
    return this.apiService.get(`/schools/${slug}/courses`)
           .map(data => data.courses);
  }

  get(slug): Observable<Course> {
    return this.apiService.get('/courses/' + slug)
           .map(data => data.course);
  }

  // destroy(slug) {
  //   return this.apiService.delete('/courses/' + slug);
  // }

  destroy(courseId, schoolSlug) {
    return this.apiService
           .delete(`/schools/${schoolSlug}/courses/${courseId}`);
  }

  save(course, schoolSlug): Observable<Course> {
    // If we're updating an existing course
    if (course.slug) {
      return this.apiService.put('/schools/' + schoolSlug + '/courses/' + course.slug, {course: course})
             .map(data => data.course);

    // Otherwise, create a new course
    } else {
      return this.apiService.post('/schools/' + schoolSlug + '/courses', {course: course})
             .map(data => data.course);
    }
  }

  favorite(slug): Observable<Course> {
    return this.apiService.post('/courses/' + slug + '/favorite');
  }

  unfavorite(slug): Observable<Course> {
    return this.apiService.delete('/courses/' + slug + '/favorite');
  }


}
