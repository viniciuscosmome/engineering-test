declare interface iApiPosts {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<iPostProps>;
}
