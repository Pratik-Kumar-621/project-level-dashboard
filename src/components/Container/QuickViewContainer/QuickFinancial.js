import React, { useState } from "react";
import Chart from "react-apexcharts";
import Heading from "../../Reusable/Heading";

const QuickFinancial = () => {
  const financialData = {
    boq: "42,47,840",
    work_order: "21,23,920",
    recipents: "17,53,648",
    expense: "3,70,272",
    graphData: [30, 24, 12],
    financialTable: [
      { date: "04/01/22", issuedFor: "WO-1102", credit: "", debit: "50000" },
      { date: "04/01/22", issuedFor: "WO-1102", credit: "50000", debit: "" },
      { date: "04/01/22", issuedFor: "WO-1102", credit: "", debit: "50000" },
      { date: "04/01/22", issuedFor: "WO-1102", credit: "50000", debit: "" },
      { date: "04/01/22", issuedFor: "WO-1102", credit: "", debit: "50000" },
      { date: "04/01/22", issuedFor: "WO-1102", credit: "50000", debit: "" },
      { date: "04/01/22", issuedFor: "WO-1102", credit: "", debit: "50000" },
      { date: "04/01/22", issuedFor: "WO-1102", credit: "50000", debit: "" },
    ],
  };
  const options = {
    chart: {
      id: "financial-bar",
      sparkline: {
        enabled: true,
      },
    },
    colors: ["#4E01A6", "#7B0CF9", "#9C27B0"],
    plotOptions: {
      bar: {
        barHeight: "100%",
        distributed: true,
        vertical: true,
      },
    },
  };
  const series = [
    {
      name: "Financial",
      data: financialData.graphData,
    },
  ];
  const [show, setShow] = useState(4);
  return (
    <div className="quick_financials">
      <div className="financial_details_section">
        <Heading heading={"Financials"} />
        <div className="financial_details">
          <div className="details_item">
            <div className="item_head_details">
              Total BOQ Value <span>:</span>{" "}
            </div>
            <div className="item_value_details">₹ {financialData.boq}</div>
          </div>
          <div className="details_item">
            <div className="item_head_details">
              Total Work Order Value <span>:</span>{" "}
            </div>
            <div className="item_value_details">
              ₹ {financialData.work_order}
            </div>
          </div>
          <div className="details_item">
            <div className="item_head_details">
              Total Receipts <span>:</span>{" "}
            </div>
            <div className="item_value_details">
              ₹ {financialData.recipents}
            </div>
          </div>
          <div className="details_item">
            <div className="item_head_details">
              Total Expense <span>:</span>{" "}
            </div>
            <div className="item_value_details">₹ {financialData.expense}</div>
          </div>
        </div>
      </div>
      <div className="financial_graphs">
        <div className="graph_body">
          <Chart options={options} series={series} type="bar" width="100%" />
        </div>
      </div>
      <div className="financial_table">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">DATE</th>
              <th scope="col">ISSUED FOR</th>
              <th scope="col">DEBIT</th>
              <th scope="col">CREDIT</th>
            </tr>
          </thead>
          <tbody>
            {financialData.financialTable.map((item, ind) => (
              <>
                {ind < show && (
                  <tr>
                    <td>{item.date}</td>
                    <td>{item.issuedFor}</td>
                    <td>{item.credit ? item.credit : "-"}</td>
                    <td>{item.debit ? item.debit : "-"}</td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>

        {financialData.financialTable.length > 4 && (
          <>
            {financialData.financialTable.length === show ? (
              <button
                type="button"
                class="btn btn-tertiary"
                data-mdb-ripple-color="light"
                onClick={() => {
                  setShow(4);
                }}
              >
                <span>Show Less</span>
              </button>
            ) : (
              <button
                type="button"
                class="btn btn-tertiary"
                data-mdb-ripple-color="light"
                onClick={() => {
                  setShow(financialData.financialTable.length);
                }}
              >
                <span>Show More</span>
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default QuickFinancial;
