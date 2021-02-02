export interface notificationProps {
  name: string;
  viewed: boolean;
  content: string;
  onClick?(): void;
}
