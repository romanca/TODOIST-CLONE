import React from "react";

const useVisibiltyState = () => {
  const [open, setOpen] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [switchItem, setSwitchItem] = React.useState(false);
  const [toggle, setToggle] = React.useState(false);

  const handleOpenClose = () => {
    setOpen((current) => !current);
  };
  const handleVisible = () => {
    setVisible((current) => !current);
  };
  const handleSwitchItem = () => {
    setSwitchItem((current) => !current);
  };
  const handleToggle = () => {
    setToggle((current) => !current);
  };
  const handleToggleOpen = () => {
    setToggle(true);
  };
  const handleToggleClose = () => {
    setToggle(false);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const toggleFalse = () => {
    setToggle(false);
  };

  return {
    open,
    visible,
    switchItem,
    toggle,
    handleToggle,
    handleToggleOpen,
    handleToggleClose,
    handleSwitchItem,
    handleVisible,
    handleOpenClose,
    handleClose,
    toggleFalse,
    handleOpen,
  };
};
export default useVisibiltyState;
