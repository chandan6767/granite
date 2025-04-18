import React from "react";

import { Tooltip } from "components/commons";
import PropTypes from "prop-types";

const Row = ({ data, showTask, destroyTask }) => (
  <tbody className="divide-y divide-gray-200 bg-white">
    {data.map(rowData => (
      <tr key={rowData.id}>
        <td className="border-r border-gray-300 px-4 py-2.5 text-sm font-medium capitalize">
          <Tooltip tooltipContent={rowData.title}>
            <span>{rowData.title}</span>
          </Tooltip>
        </td>
        <td className="whitespace-no-wrap border-r border-gray-300 px-4 py-2.5 text-sm text-gray-800">
          {rowData.assigned_user.name}
        </td>
        <td className="cursor-pointer px-6 py-4 text-right text-sm font-medium leading-5">
          <a className="text-indigo-600" onClick={() => showTask(rowData.slug)}>
            Show
          </a>
        </td>
        <td
          className="cursor-pointer px-6 py-4 text-right
            text-sm font-medium leading-5"
        >
          <a
            className="text-red-500
              hover:text-red-700"
            onClick={() => destroyTask(rowData.slug)}
          >
            Delete
          </a>
        </td>
      </tr>
    ))}
  </tbody>
);

Row.propTypes = {
  data: PropTypes.array.isRequired,
  destroyTask: PropTypes.func,
  showTask: PropTypes.func,
};

export default Row;
