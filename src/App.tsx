import "./App.css";
import { Button } from "antd";
import { Modal } from "antd";
import type { RadioChangeEvent } from "antd";
import { useState } from "react";
import { Flex, Radio } from "antd";
import { TYPES } from "./assets/const";
import { getActivity } from "./api/API";
import { Activity } from "./types/types";
import { ActivityComponent } from "./ActivityComponent/ActivityComponent";

function App() {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState<Activity | null>(null);
  const onChange = async (e: RadioChangeEvent): Promise<void> => {
    const type = e.target.value;
    const value = await getActivity(type);
    setData(value);
  };

  const handleClick = () => {
    setData(null);
  };

  const handleClose = () => {
    setData(null);
    setVisible(false);
  };

  return (
    <>
      <Modal
        open={visible}
        title={null}
        footer={null}
        onCancel={handleClose}
        centered
      >
        {data ? (
          <ActivityComponent
            activity={data.activity}
            type={data.type}
            handleClick={handleClick}
          />
        ) : (
          <>
            <p>What type of activity you want?</p>
            <Flex vertical gap="middle">
              <Radio.Group onChange={onChange} defaultValue="a">
                {TYPES.map((type) => (
                  <Radio.Button
                    style={{ display: "block" }}
                    key={type}
                    value={type}
                    autoFocus
                  >
                    {type === "diy" ? "do it yoursalf" : type}
                  </Radio.Button>
                ))}
              </Radio.Group>
            </Flex>
          </>
        )}
      </Modal>
      <Button
        type="primary"
        shape="round"
        style={{ width: 300, height: 300, borderRadius: "50%", fontSize: 32 }}
        onClick={() => setVisible(true)}
      >
        Start Break
      </Button>
    </>
  );
}

export default App;
