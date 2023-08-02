import React from "react";

const TableRow = ({ rowData, columns, onDeleteRow }) => {
  return (
    <tr>
      {columns.map((column) => (
        <td key={column}>{rowData[column]}</td>
      ))}
      <td>
        <button onClick={() => onDeleteRow(rowData.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default TableRow;
