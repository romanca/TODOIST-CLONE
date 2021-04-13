import React from "react";

const IconNamesMap = {
  edit: "fa fa-pencil",
  search: "fa fa-search",
  home: "fa fa-home",
  bars: "fa fa-bars",
  cross: "fa fa-times",
  inbox: "fa fa-inbox",
  calendar: "fa fa-calendar",
  today: "fa fa-calendar-check-o",
  rightArrow: "fa fa-angle-right",
  rightDown: "fa fa-angle-down",
  plus: "fa fa-plus",
  dot: "fa fa-circle",
  th: "fa fa-th", //in todo items for D&D functionality
  drop: "fa fa-tint", //icon in filters
  horizontalDots: "fa fa-ellipsis-h",
};

const Icon = ({ name, style, color }) => {
  return <i className={IconNamesMap[name]} style={{ ...style, color }} />;
};

export default Icon;
