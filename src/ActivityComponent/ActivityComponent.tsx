import { Activity } from "../types/types";

export const ActivityComponent: React.FC<Activity> = ({ activity }) => {
  return (
    <div>
      <p>Activity: {activity}</p>
    </div>
  );
};
