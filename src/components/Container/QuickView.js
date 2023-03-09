import React, { useState } from "react";
import Heading from "../Reusable/Heading";
import LogsContent from "./LogsContent";
import QuickViewContent from "./QuickViewContent";

const QuickView = () => {
  const [active, setActive] = useState("Quick View");
  return (
    <div className="quick_view">
      <div className="quick_heading">
        <Heading heading={active} />
        <div className="view_tab_switch">
          <button
            type="button"
            onClick={() => {
              setActive("Logs");
            }}
            class={`btn ${active === "Logs" ? "btn-primary" : "btn-tertiary"}`}
            data-mdb-ripple-color={`${active === "Logs" ? "light" : ""}`}
          >
            Logs
          </button>

          <button
            type="button"
            onClick={() => {
              setActive("Quick View");
            }}
            class={`btn ${
              active === "Quick View" ? "btn-primary" : "btn-tertiary"
            }`}
            data-mdb-ripple-color={`${active === "Quick View" ? "light" : ""}`}
          >
            Quick View
          </button>
        </div>
      </div>
      <div className="quick_content">
        {active === "Logs" ? <LogsContent /> : <QuickViewContent />}
      </div>
    </div>
  );
};

export default QuickView;
