import React, { useState } from "react";

import ReactDataGrid from "@inovua/reactdatagrid-enterprise";
import "@inovua/reactdatagrid-enterprise/index.css";
import CheckBox from "@inovua/reactdatagrid-community/packages/CheckBox";

import "@inovua/reactdatagrid-enterprise/index.css";
import "@inovua/reactdatagrid-enterprise/theme/default-light.css";
import "@inovua/reactdatagrid-enterprise/theme/default-dark.css";
import "@inovua/reactdatagrid-enterprise/theme/pink-dark.css";
import "@inovua/reactdatagrid-enterprise/theme/amber-light.css";
import "@inovua/reactdatagrid-enterprise/theme/amber-dark.css";
import "@inovua/reactdatagrid-enterprise/theme/blue-light.css";
import "@inovua/reactdatagrid-enterprise/theme/blue-dark.css";
import "@inovua/reactdatagrid-enterprise/theme/green-light.css";
import "@inovua/reactdatagrid-enterprise/theme/green-dark.css";
import "@inovua/reactdatagrid-enterprise/theme/pink-light.css";

import { useContext } from "react";

import { AppContext } from "../../Context";

const columns = [
  { name: "Name", defaultFlex: 1, header: " NAME" },
  { name: "Mail", defaultFlex: 1, header: " MAIL" },
  { name: "Department", defaultFlex: 1, header: " DEPARTMENT" },

  {
    name: "Security",
    defaultFlex: 1,
    header: "SECURITY",
  },
];

const dataSource = [
  {
    Name: "John",
    Mail: "karomi@gmail.com",
    Department: "Marketing",
    id: 0,

    Security: "Normal",
  },
  {
    Name: "Mary",
    Mail: "bharath@gmail.com",
    Department: "Regulatory",
    id: 1,
    Security: "Normal",
  },
  {
    Name: "Mary",
    Mail: "john@gmail.com",
    Department: "Legal",
    id: 2,
    Security: "Normal",
  },
  {
    Name: "Mary",
    Mail: "abc@gmail.com",
    Department: "Marketing",
    id: 3,
    Security: "Normal",
  },
  {
    Name: "Mary",
    Mail: "xyz@gmail.com",
    Department: "Product Development",
    id: 4,
    Security: "Normal",
  },
];

const gridStyle = { minHeight: 290 };

const filterValue = [
  { name: "Name", operator: "startsWith", type: "string", value: "" },
  { name: "Mail", operator: "startsWith", type: "string", value: "" },
  { name: "Department", operator: "startsWith", type: "string", value: "" },
  { name: "Security", operator: "startsWith", type: "string", value: "" },
];

const UserTableGrid = ({ children }) => {
  const [checkboxOnlyRowSelect, setCheckboxOnlyRowSelect] = useState(true);
  const [checkboxColumn, setCheckboxColumn] = useState(true);
  const [enableColumnFilterContextMenu, setEnableColumnFilterContextMenu] =
    useState(true);

  const { theme } = useContext(AppContext);

  const applyThemes = theme === false ? "default-light" : "default-dark";

  return (
    <div>
      <ReactDataGrid
        idProperty="id"
        columns={columns}
        style={gridStyle}
        dataSource={dataSource}
        key={"grid-" + checkboxOnlyRowSelect}
        checkboxColumn={checkboxColumn}
        checkboxOnlyRowSelect={checkboxOnlyRowSelect}
        rowHeight={50}
        theme={applyThemes}
        // defaultFilterValue={filterValue}
        // pagination
        // enableColumnFilterContextMenu={enableColumnFilterContextMenu}
      />
    </div>
  );
};

export default UserTableGrid;
