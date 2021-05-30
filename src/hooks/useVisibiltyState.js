import React from "react";

const useVisibiltyState = () => {
  const [open, setOpen] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [switchItem, setSwitchItem] = React.useState(false);
  const [toggle, setToggle] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const ref = React.useRef(null);

  const handleOpenClose = () => {
    setOpen((current) => !current);
  };
  const handleVisible = () => {
    setVisible((current) => !current);
  };
  const handleVisibleOpen = () => {
    setVisible(true);
  };
  const handleVisibleClose = () => {
    setVisible(false);
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
  const handleHoverOpen = () => {
    setHover(true);
  };
  const handleHoverClose = () => {
    setHover(false);
  };
  const handleHover = () => {
    setHover((current) => !current);
  };

  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        handleClose();
        handleHoverClose();
        handleToggleClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return function cleanup() {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return {
    open,
    visible,
    switchItem,
    toggle,
    hover,
    ref,
    handleToggle,
    handleToggleOpen,
    handleToggleClose,
    handleSwitchItem,
    handleVisible,
    handleOpenClose,
    handleClose,
    toggleFalse,
    handleOpen,
    handleHoverClose,
    handleHoverOpen,
    handleHover,
    handleVisibleOpen,
    handleVisibleClose,
  };
};
export default useVisibiltyState;
