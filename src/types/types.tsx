export interface Activity {
  activity: string;
  type: string;
  participants?: number;
  price?: number;
  link?: string;
  key?: string;
}

export interface ActivityProps {
  activity: string;
  type: string;
  handleClick: () => void;
}
