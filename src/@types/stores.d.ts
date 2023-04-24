declare interface iPostState {
  loading: boolean;
  data: iApiPosts;
}

declare interface iUserState {
  isLogged: boolean;
  username: string | null;
}
