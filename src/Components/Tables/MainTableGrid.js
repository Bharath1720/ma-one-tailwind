import React, { useState, useCallback } from "react";

import moment from "moment";

import ReactDataGrid from "@inovua/reactdatagrid-enterprise";
import "@inovua/reactdatagrid-enterprise/index.css";

import "@inovua/reactdatagrid-enterprise/index.css";
import "@inovua/reactdatagrid-enterprise/theme/default-light.css";

import "@inovua/reactdatagrid-enterprise/index.css";

import "@inovua/reactdatagrid-enterprise/index.css";

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

import "@inovua/reactdatagrid-enterprise/index.css";

import ComboBox from "@inovua/reactdatagrid-community/packages/ComboBox";

import { useContext } from "react";

import { AppContext } from "../../Context";

window.moment = moment;
const DATASET_URL = "https://demos.reactdatagrid.io/api/v1/contacts";

const defaultFilterValue = [
  { name: "firstName", type: "string", operator: "contains", value: "" },
  { name: "lastName", type: "string", operator: "contains", value: "" },
  { name: "email", type: "string", operator: "contains", value: "" },
];

const columns = [
  {
    name: "id",
    header: "Id",
    defaultVisible: false,
    type: "number",
    defaultWidth: 80,
  },

  {
    defaultFlex: 1,
    render: ({ index }) => {
      if (index === undefined) {
        return (
          <div className="flex items-center ">
            <img
              className="h-10 rounded-lg"
              src="https://assets.ccbp.in/frontend/react-js/esther-howard-img.png"
              alt=""
            />
            <span className="ml-2">New Art Work Request</span>
          </div>
        );
      }
    },
  },

  { name: "firstName", header: "Request Type", defaultFlex: 1 },
  { name: "lastName", header: "Product Name", defaultFlex: 1 },
  { name: "email", header: "Company Type", defaultFlex: 1 },
];

const gridStyle = { minHeight: 620 };

const loadData = ({ skip, limit, sortInfo, groupBy, filterValue }) => {
  return fetch(
    DATASET_URL +
      "?skip=" +
      skip +
      "&limit=" +
      limit +
      (groupBy && groupBy.length ? "&groupBy=" + groupBy : "") +
      "&sortInfo=" +
      JSON.stringify(sortInfo) +
      "&filterBy=" +
      JSON.stringify(filterValue)
  ).then((response) => {
    const totalCount = response.headers.get("X-Total-Count");
    return response.json().then((data) => {
      return { data, count: parseInt(totalCount) };
    });
  });
};

const themeDataSource = [
  { id: "default-dark", label: "Dark theme" },
  { id: "default-light", label: "Light theme" },
  { id: "amber-light", label: "Amber Light" },
  { id: "amber-dark", label: "Amber Dark" },
  { id: "blue-dark", label: "Blue Dark" },
  { id: "blue-light", label: "Blue Light" },
  { id: "green-dark", label: "Green Dark" },
  { id: "green-light", label: "Green Light" },
  { id: "pink-dark", label: "Pink Dark" },
  { id: "pink-light", label: "Pink Light" },
];

const MainTableGrid = ({ children }) => {
  const [filterValue, setFilterValue] = useState(defaultFilterValue);
  const [sortInfo, setSortInfo] = useState([]);
  const dataSource = useCallback(loadData, []);

  const { theme } = useContext(AppContext);

  const applyThemes = theme === false ? "default-light" : "default-dark";

  // const [theme, setTheme] = useState("default-dark");

  return (
    <div>
      {/* <div style={{ marginBottom: 20 }}>
        Theme:{" "}
        <ComboBox
          style={{ width: 150 }}
          inlineFlex
          collapseOnSelect
          clearIcon={false}
          searchable={false}
          changeValueOnNavigation
          dataSource={themeDataSource}
          value={theme}
          onChange={setTheme}
        />
      </div> */}

      <ReactDataGrid
        idProperty="id"
        style={gridStyle}
        columns={columns}
        defaultFilterValue={defaultFilterValue}
        pagination
        checkboxColumn
        defaultSelected={{ 1: false }}
        defaultGroupBy={[]}
        editable={true}
        dataSource={dataSource}
        onSortInfoChange={setSortInfo}
        onFilterValueChange={setFilterValue}
        rowHeight={50}
        theme={applyThemes}
      />
    </div>
  );
};

export default MainTableGrid;
