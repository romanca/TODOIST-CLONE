import React from "react";

const IconNamesMap = {
  edit: "fa fa-pencil",
  search: "fa fa-search",
  home: "fa fa-home",
  bars: "fa fa-bars",
  cross: "fa fa-times",
};

const Icon = ({ name, style, color }) => {
  return <i className={IconNamesMap[name]} style={{ ...style, color }} />;
};

export default Icon;
