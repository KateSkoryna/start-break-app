import "./App.css";
import { useState } from "react";
import { Button } from "antd";
import { QuestionModal } from "./QuestionModal/QuestionModal";
import { Activity } from "./types/types";
import { ActivityComponent } from "./ActivityComponent/ActivityComponent";

function App() {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState<Activity | null>(null);

  return (
    <>
      <QuestionModal closeModal={setVisible} open={visible} setType={setData} />
      {data !== null && <ActivityComponent activity={data.activity} />}
      {data === null && (
        <Button type="primary" onClick={() => setVisible(true)}>
          Open Modal
        </Button>
      )}
    </>
  );
}

export default App;
