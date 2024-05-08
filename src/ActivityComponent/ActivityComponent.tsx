import { Activity } from "../types/types";
import { Card } from "antd";

export const ActivityComponent: React.FC<Activity> = ({ activity }) => {
  return (
    <Card bordered={false} style={{ width: 300 }}>
      <p>{activity}</p>
    </Card>
  );
};
