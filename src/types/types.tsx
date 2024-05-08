export interface Activity {
  activity: string;
  type?: string;
  participants?: number;
  price?: number;
  link?: string;
  key?: string;
}

export interface QuestionModalProps {
  closeModal: (value: boolean) => void;
  open: boolean;
  setType: (value: Activity | null) => void;
}
