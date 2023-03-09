import React, { useState } from "react";

const QuickPO = () => {
  const POData = [
    {
      vendor: "Hari Sharma",
      poNumber: "200",
      sales: "100000",
      poAmount: "110000",
      margin: "10%",
      donePayment: "50000",
      duePayment: "60000",
      poIssued: "55000",
      status: "Active",
    },
    {
      vendor: "Hari Sharma",
      poNumber: "200",
      sales: "100000",
      poAmount: "110000",
      margin: "10%",
      donePayment: "50000",
      duePayment: "60000",
      poIssued: "55000",
      status: "Active",
    },
    {
      vendor: "Hari Sharma",
      poNumber: "200",
      sales: "100000",
      poAmount: "110000",
      margin: "10%",
      donePayment: "50000",
      duePayment: "60000",
      poIssued: "55000",
      status: "Active",
    },
    {
      vendor: "Hari Sharma",
      poNumber: "200",
      sales: "100000",
      poAmount: "110000",
      margin: "10%",
      donePayment: "50000",
      duePayment: "60000",
      poIssued: "55000",
      status: "Active",
    },
    {
      vendor: "Hari Sharma",
      poNumber: "200",
      sales: "100000",
      poAmount: "110000",
      margin: "10%",
      donePayment: "50000",
      duePayment: "60000",
      poIssued: "55000",
      status: "Active",
    },
    {
      vendor: "Hari Sharma",
      poNumber: "200",
      sales: "100000",
      poAmount: "110000",
      margin: "10%",
      donePayment: "50000",
      duePayment: "60000",
      poIssued: "55000",
      status: "Active",
    },
    {
      vendor: "Hari Sharma",
      poNumber: "200",
      sales: "100000",
      poAmount: "110000",
      margin: "10%",
      donePayment: "50000",
      duePayment: "60000",
      poIssued: "55000",
      status: "Active",
    },
    {
      vendor: "Hari Sharma",
      poNumber: "200",
      sales: "100000",
      poAmount: "110000",
      margin: "10%",
      donePayment: "50000",
      duePayment: "60000",
      poIssued: "55000",
      status: "Active",
    },
    {
      vendor: "Hari Sharma",
      poNumber: "200",
      sales: "100000",
      poAmount: "110000",
      margin: "10%",
      donePayment: "50000",
      duePayment: "60000",
      poIssued: "55000",
      status: "Active",
    },
    {
      vendor: "Hari Sharma",
      poNumber: "200",
      sales: "100000",
      poAmount: "110000",
      margin: "10%",
      donePayment: "50000",
      duePayment: "60000",
      poIssued: "55000",
      status: "Active",
    },
    {
      vendor: "Hari Sharma",
      poNumber: "200",
      sales: "100000",
      poAmount: "110000",
      margin: "10%",
      donePayment: "50000",
      duePayment: "60000",
      poIssued: "55000",
      status: "Active",
    },
  ];
  const [show, setShow] = useState(4);

  return (
    <div className="quick_po">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Vendor</th>
            <th scope="col">PO Number</th>
            <th scope="col">Sales/BOQ</th>
            <th scope="col">PO Amount</th>
            <th scope="col">Margin</th>
            <th scope="col">Paym. Done</th>
            <th scope="col">Paym. Due</th>
            <th scope="col">PO Issued</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {POData.map((item, ind) => (
            <>
              {ind < show && (
                <tr>
                  <td>{item.vendor}</td>
                  <td>PO: {item.poNumber}</td>
                  <td>₹ {item.sales}</td>
                  <td>₹ {item.poAmount}</td>
                  <td>{item.margin}</td>
                  <td>₹ {item.donePayment}</td>
                  <td>₹ {item.duePayment}</td>
                  <td>₹ {item.poIssued}</td>
                  <td>{item.status}</td>
                </tr>
              )}
            </>
          ))}
        </tbody>
      </table>
      {POData.length > 4 && (
        <>
          {POData.length === show ? (
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
                setShow(POData.length);
              }}
            >
              <span>Show More</span>
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default QuickPO;
