import React from "react";
import "./BuildControlls.css";
import ControlButton from "./ControlButton/ControlButton";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControlls = (props) => {
  return (
    <div className="BuildControlls">
      {controls.map((ctrl) => (
        <ControlButton key={ctrl.label} label={ctrl.label} />
      ))}
    </div>
  );
};
export default buildControlls;
