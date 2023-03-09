import React from "react";

const BarDetail = ({ data }) => {
  return (
    <div
      className="bar_details"
      style={{
        display: "grid",
        gridTemplateColumns: `${data.notStarted}fr ${data.delayed}fr ${data.inProgress}fr ${data.completed}fr`,
      }}
    >
      <div className="not_started">{data.notStarted}</div>
      <div className="delayed">{data.delayed}</div>
      <div className="in_progress">{data.inProgress}</div>
      <div className="completed">{data.completed}</div>
    </div>
  );
};

export default BarDetail;
