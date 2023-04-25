declare interface iPostState {
  loading: boolean;
  data: iApiPosts;
}

declare interface iUserState {
  isLogged: boolean;
  remember: boolean;
  username?: string | null;
}
