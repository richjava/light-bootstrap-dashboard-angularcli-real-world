import { Profile } from './profile.model';

export class School {
  slug: string;
  title = '';
  description = '';
  country = '';
  body = '';
  tagList: Array<string> = [];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: Profile;
}
