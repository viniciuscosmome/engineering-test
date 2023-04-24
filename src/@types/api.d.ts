declare interface iApiPosts {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<iPostProps>;
}

declare type iApiCreatePost = Pick<iPostProps, 'username' | 'title' | 'content'>;
declare type iApiUpdatePost = Pick<iPostProps, 'id' | 'title' | 'content'>;
