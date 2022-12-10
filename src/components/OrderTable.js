import React, { useEffect, useState } from "react";
import PaidButton from "../assets/buttons/PaidButton";
import UnPaidButton from "../assets/buttons/UnPaidButton";
import NewOrderButton from "../assets/buttons/NewOrderButton";
import OrderUpdatedButton from "../assets/buttons/OrderUpdatedButton";
import data from "../data.json";
import OpenNewTab from "../assets/Icons/openNewTab.svg";
import DownArrow from "../assets/Icons/downArrow.svg";

const OrderTable = () => {
  const [orderDetails, setOrderDetails] = useState([]);
  const [isOrderTypeHover, setIsOrderTypeHover] = useState(false);
  const [isOrderStatusHover, setIsOrderStatusHover] = useState(false);
  const [newOrderChecked, setNewOrderChecked] = useState(true);
  const [orderUpdatedChecked, setOrderUpdatedChecked] = useState(true);
  const [paidChecked, setPaidChecked] = useState(false);
  const [unPaidChecked, setUnPaidChecked] = useState(false);
  const [deliveryChecked, setDeliveryChecked] = useState(true);
  const [takeAwayChecked, setTakeAwayChecked] = useState(true);
  const [dineInChecked, setDineInChecked] = useState(true);

  useEffect(() => {
    setOrderDetails(data);
  }, []);

  const columns = [
    { accessor: "Order_id", label: "Order id" },
    { accessor: "Table_No", label: "Table no" },
    { accessor: "Customer_name", label: "Customer name" },
    { accessor: "Order_type", label: "Order type" },
    { accessor: "Order_status", label: "Order status" },
    { accessor: "Payment", label: "Payment" },
    { accessor: "Date_Time", label: "Date Time" },
    { accessor: "View_order", label: "View order" },
  ];

  // "Order_id": "96-839-3777",
  //       "Table_No": 1,
  //       "Customer_name": "Nanice Casale",
  //       "Order_type": "Dine in",
  //       "Order_status": "Order updated",
  //       "Payment": "Paid",
  //       "Date_Time": "20-Oct-2022"

  // <tr key={order.Order_id}>
  //             {columns.map((column)=>{
  //               return <td key={column.accessor}>{order[column.accessor]}</td>
  //             })}

  //           </tr>

  const handleOrderTypeHover = () => {
    setIsOrderTypeHover(!isOrderTypeHover);
  };
  const handleOrderStatusHover = () => {
    setIsOrderStatusHover(!isOrderStatusHover);
  };

  return (
    <>
      {isOrderTypeHover && (
        <div className="orderTypeHover">
          <span style={{ color: "#E84545" }}>
            <input
              type="checkbox"
              checked={deliveryChecked}
              onChange={() => setDeliveryChecked(!deliveryChecked)}
            />
            Delivery
          </span>
          <span style={{ color: "blue" }}>
            <input
              type="checkbox"
              checked={dineInChecked}
              onChange={() => setDineInChecked(!dineInChecked)}
            />
            Dine in
          </span>
          <span style={{ color: "#FFE15D" }}>
            <input
              type="checkbox"
              checked={takeAwayChecked}
              onChange={() => setTakeAwayChecked(!takeAwayChecked)}
            />
            Take away
          </span>
        </div>
      )}
      {isOrderStatusHover && (
        <div className="orderStatusHover">
          <span>
            <input
              type="checkbox"
              checked={newOrderChecked}
              onChange={() => setNewOrderChecked(!newOrderChecked)}
            />
            <p className="newOrder">New Order</p>
          </span>
          <span>
            <input
              type="checkbox"
              checked= {orderUpdatedChecked}
              onChange={() => setOrderUpdatedChecked(!orderUpdatedChecked)}
            />
            <p className="orderUpdated">Order updated</p>
          </span>
        </div>
      )}

      <table>
        <thead>
          {columns.map((column) => {
            return (
              <>
                <th key={column.accessor}>
                  {column.label}{" "}
                  {column.label === "Order type" ? (
                    <img
                      onMouseOver={handleOrderTypeHover}
                      // onMouseOut={handleOrderTypeHover}
                      className="downArrowTableHead"
                      src={DownArrow}
                    />
                  ) : column.label === "Order status" ? (
                    <img
                      onMouseOver={handleOrderStatusHover}
                      // onMouseOut={handleOrderStatusHover}
                      className="downArrowTableHead"
                      src={DownArrow}
                    />
                  ) : (
                    ""
                  )}
                </th>
              </>
            );
          })}
        </thead>
        <tbody>
          {orderDetails
            .filter(
              (order) =>
                ((takeAwayChecked && order.Order_type === "Take away") ||
                  (deliveryChecked && order.Order_type === "Delivery") ||
                  (dineInChecked && order.Order_type === "Dine in")) &&
                ((newOrderChecked && order.Order_status === "New order") ||
                  (orderUpdatedChecked &&
                    order.Order_status === "Order updated")) &&
                (order.Payment === "Un-Paid" || order.Payment === "Paid")
            )
            .map((order) => {
              return (
                <tr key={order.Order_id}>
                  <td>{order.Order_id}</td>
                  <td>{order.Table_No}</td>
                  <td>{order.Customer_name}</td>
                  <td
                    className={
                      order.Order_type === "Delivery"
                        ? "Delivery"
                        : order.Order_type === "Dine in"
                        ? "DineIn"
                        : "TakeAway"
                    }
                  >
                    {order.Order_type}
                  </td>
                  <td>
                    {order.Order_status === "New order" ? (
                      <NewOrderButton />
                    ) : (
                      <OrderUpdatedButton />
                    )}
                  </td>
                  <td>
                    {order.Payment === "Paid" ? (
                      <PaidButton />
                    ) : (
                      <UnPaidButton />
                    )}
                  </td>
                  <td>{order.Date_Time}</td>
                  <td>
                    <img className="OpenNewTab" src={OpenNewTab} />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default OrderTable;
