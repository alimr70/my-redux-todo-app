import React from "react";
import AddStep from "./AddStep";
import AddToMyDay from "./AddToMyDay";
import DetailFooter from "./DetailFooter";
import TaskDetail from "./TaskDetail";

const Detailbar = () => {
  return (
    <div className="container container-right">
      <TaskDetail />
      <AddStep />
      <AddToMyDay />
      <DetailFooter />
    </div>
  );
};

export default Detailbar;
