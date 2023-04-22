import type { iPostProps } from '../Post/post';

export interface iFormPostProps extends Partial<iPostProps> {
  onCancel?: () => void;
}
