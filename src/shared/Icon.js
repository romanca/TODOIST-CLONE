import React from "react";

const IconNamesMap = {
  edit: "fa fa-pencil",
  search: "fa fa-search",
  home: "fa fa-home",
  bars: "fa fa-bars",
  cross: "fa fa-times",
  inbox: "fa fa-inbox",
  calendar: "fa fa-calendar",
  calendar1: "fa fa-calendar-o",
  today: "fa fa-calendar-check-o",
  rightArrow: "fa fa-angle-right",
  rightDown: "fa fa-angle-down",
  plus: "fa fa-plus",
  dot: "fa fa-circle",
  th: "fa fa-th", //in todo items for D&D functionality
  drop: "fa fa-tint", //icon in filters
  horizontalDots: "fa fa-ellipsis-h",
  questionMark: "fa fa-question-circle-o",
  check: "fa fa-check",
  trash: "fa fa-trash-o",
  hearth: "fa fa-heart-o",
  longArrowUp: "fa fa-long-arrow-up",
  longArrowDown: "fa fa-long-arrow-down",
  circle: "fa fa-circle-thin",
  comment: "fa fa-comment-o",
  bulb: "fa fa-lightbulb-o",
  arrows: "fa fa-arrows-v",
  flag: "fa fa-flag-o",
  listUl: "fa fa-list-ul",
  archive: "fa fa-archive",
  flag1: "fa fa-flag",
  info: "fa fa-info",
};

const Icon = ({ name, style, color }) => {
  return <i className={IconNamesMap[name]} style={{ ...style, color }} />;
};

export default Icon;
