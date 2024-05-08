import { Modal } from "antd";
import type { RadioChangeEvent } from "antd";
import { Flex, Radio } from "antd";
import { TYPES } from "../assets/const";
import { getActivity } from "../api/API";
import { QuestionModalProps } from "../types/types";

export const QuestionModal: React.FC<QuestionModalProps> = ({
  closeModal,
  open,
  setType,
}) => {
  const onChange = async (e: RadioChangeEvent): Promise<void> => {
    const type = e.target.value;
    const value = await getActivity(type);
    setType(value);
  };

  return (
    <>
      {open && (
        <Modal
          title="Basic Modal"
          open={open}
          centered
          onOk={() => closeModal(false)}
          onCancel={() => closeModal(false)}
        >
          <p>What type of activity you want?</p>
          <Flex vertical gap="middle">
            <Radio.Group onChange={onChange} defaultValue="a">
              {TYPES.map((type) => (
                <Radio.Button key={type} value={type}>
                  {type}
                </Radio.Button>
              ))}
            </Radio.Group>
          </Flex>
        </Modal>
      )}
    </>
  );
};
