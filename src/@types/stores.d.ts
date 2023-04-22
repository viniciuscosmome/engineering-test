declare interface iPostState {
  id: number;
  username: string;
  title: string;
  content: string;
  created_datetime: Date;
}

declare interface iUserState {
  isLogged: boolean;
  username: string | null;
}
