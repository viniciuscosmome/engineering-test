export interface iPostProps {
  id: string;
  title: string;
  content: string;
}

export interface iFormPostProps extends Partial<iPostProps> {
  onCancel?: () => void;
}
