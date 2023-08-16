import React from "react";

const TableHead = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((column, index) => (
          <th key={index}>{column}</th>
        ))}
        <th>Remove</th>
      </tr>
    </thead>
  );
};

export default TableHead;
