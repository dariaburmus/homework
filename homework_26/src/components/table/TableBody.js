import React from "react";
import TableRow from "./TableRow";

const TableBody = ({ data, columns, deleteRow }) => {
  return (
    <tbody>
      {data.map((rowData) => (
        <TableRow
          key={rowData.id}
          rowData={rowData}
          columns={columns}
          onDeleteRow={deleteRow}
        />
      ))}
    </tbody>
  );
};

export default TableBody;
