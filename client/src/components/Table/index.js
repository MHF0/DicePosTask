import React, { useEffect } from "react";
import "./table-styles.css";
import { useDispatch, useSelector } from "react-redux";
import { setTable } from "../redux/Table";
import { createSale, deleteFromTable, getTableData } from "../APIs";

const Table = () => {
  const dispatch = useDispatch();

  const tablesData = useSelector((state) => state.table.tables);

  const getAllTable = () => {
    getTableData().then((result) => {
      if (result.success) {
        dispatch(setTable(result));
      }
    });
  };

  const handleDelete = (tableId) => {
    deleteFromTable(tableId).then((result) => {
      if (result.success) {
        getAllTable();
      }
    });
  };

  const handleOrder = () => {
    createSale(tablesData, tablesData.total).then((res) => {
      getAllTable();
    });
  };

  useEffect(() => getAllTable(), []);

  const calculateTotal = (price, quantity) => {
    return price * quantity;
  };
  return (
    <div className="productTable table-container ">
      <table>
        <thead>
          <tr>
            <th>الإسم</th>
            <th>السعر</th>
            <th>الكمية</th>
            <th>المجموع</th>
            <th className="close-head">
              <div className="close-container">
                <span className="close">x</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {tablesData?.tables?.map((item) => (
            <tr key={item._id}>
              <td>{item.product.name}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>${calculateTotal(item.product.price, item.quantity)}</td>
              <td>
                <button
                  className="table-style"
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="total-container">
            <th className="total" colSpan="2">
              المجموع
            </th>
            <td className="total">{tablesData.total}</td>
            <td colSpan="2">
              <button className="order" onClick={handleOrder}>
                تأكيد عملية الشراء
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
