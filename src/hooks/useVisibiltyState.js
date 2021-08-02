import React from "react";

const useVisibiltyState = () => {
  const [open, setOpen] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [switchItem, setSwitchItem] = React.useState(false);
  const [toggle, setToggle] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const ref = React.useRef(null);
  const [expand, setExpand] = React.useState(false);
  const inputRef = React.useRef(null);

  const handleExpand = () => {
    setExpand(true);
  };

  const handleDexpand = () => {
    setExpand(false);
  };

  const handleOpenClose = React.useCallback(() => {
    setOpen((current) => !current);
  }, []);

  const handleVisible = React.useCallback(() => {
    setVisible((current) => !current);
  }, []);

  const handleVisibleOpen = React.useCallback(() => {
    setVisible(true);
  }, []);

  const handleVisibleClose = React.useCallback(() => {
    setVisible(false);
  }, []);

  const handleSwitchItem = React.useCallback(() => {
    setSwitchItem((current) => !current);
  }, []);

  const handleToggle = React.useCallback(() => {
    setToggle((current) => !current);
  }, []);

  const handleToggleOpen = React.useCallback(() => {
    setToggle(true);
  }, []);

  const handleToggleClose = React.useCallback(() => {
    setToggle(false);
  }, []);

  const handleClose = React.useCallback(() => {
    setOpen(false);
  }, []);

  const handleOpen = React.useCallback(() => {
    setOpen(true);
  }, []);

  const toggleFalse = React.useCallback(() => {
    setToggle(false);
  }, []);

  const handleHoverOpen = React.useCallback(() => {
    setHover(true);
  }, []);

  const handleHoverClose = React.useCallback(() => {
    setHover(false);
  }, []);

  const handleHover = React.useCallback(() => {
    setHover((current) => !current);
  }, []);

  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        handleClose();
        handleHoverClose();
        handleToggleClose();
        handleVisibleClose();
        handleDexpand();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return function cleanup() {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [
    ref,
    handleClose,
    handleHoverClose,
    handleToggleClose,
    handleVisibleClose,
    handleDexpand,
  ]);

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
    expand,
    handleDexpand,
    handleExpand,
    inputRef,
  };
};
export default useVisibiltyState;
