import { FcLandscape } from "react-icons/fc";
import { FcGraduationCap } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { FcMultipleDevices } from "react-icons/fc";
import { FcSupport } from "react-icons/fc";
import { FcPaid } from "react-icons/fc";
import { FcReading } from "react-icons/fc";
import { FcMusic } from "react-icons/fc";
import { FcWorkflow } from "react-icons/fc";

export const TYPES: string[] = [
  "education",
  "recreational",
  "social",
  "diy",
  "charity",
  "cooking",
  "relaxation",
  "music",
  "busywork",
];
export const ICONS: { [key: string]: JSX.Element } = {
  education: <FcGraduationCap size={100} />,
  recreational: <FcLandscape size={100} />,
  social: <FcMultipleDevices size={100} />,
  diy: <FcSupport size={100} />,
  charity: <FcLike size={100} />,
  cooking: <FcPaid size={100} />,
  relaxation: <FcReading size={100} />,
  music: <FcMusic size={100} />,
  busywork: <FcWorkflow size={100} />,
};
