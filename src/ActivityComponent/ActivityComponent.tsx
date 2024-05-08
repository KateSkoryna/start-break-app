import { ActivityProps } from "../types/types";
import { ICONS } from "../assets/const";
import { Button, Flex } from "antd";

export const ActivityComponent: React.FC<ActivityProps> = ({
  activity,
  type = "recreational", // Add a default value here
  handleClick,
}) => {
  return (
    <Flex
      vertical
      gap="small"
      style={{
        minHeight: 400,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {ICONS[type]}
      <p>{activity}</p>
      <Button
        onClick={handleClick}
        type="primary"
        block
        style={{ width: "100%" }}
      >
        New Activity
      </Button>
    </Flex>
  );
};
