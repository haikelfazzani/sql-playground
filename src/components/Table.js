import React from 'react';

const Td = (row) => {
  return <>
    {row.row.map((value, i) => <td key={'row' + i}>{value}</td>)}
  </>
}

export default function Table ({ columns, values }) {
  return (<table className="table table-striped table-bordered mt-3">
    <thead className="thead-dark">
      <tr>
        {columns.map((columnName, i) => <th scope="col" key={'col' + i}>{columnName}</th>)}
      </tr>
    </thead>

    <tbody>
      {values.map((row, i) => <tr key={'rows' + i}><Td row={row} /></tr>)}
    </tbody>
  </table>);
}