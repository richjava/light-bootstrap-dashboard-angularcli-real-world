export class SchoolListConfig {
  // type = 'all';

  filters: {
    tag?: string,
    author?: string,
    favorited?: string,
    limit?: number,
    offset?: number
  } = {};
}
