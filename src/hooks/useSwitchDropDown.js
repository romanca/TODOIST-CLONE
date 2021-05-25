import React from "react";

function useSwitchDropDown() {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef(null);

  const handleSwitchDropDown = () => {
    setIsVisible((current) => !current);
  };
  const handleSwitchClose = () => {
    setIsVisible(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (!ref.current.contains(e.target)) {
        handleSwitchClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return function cleanup() {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return { ref, handleSwitchDropDown, handleSwitchClose, isVisible };
}

export default useSwitchDropDown;

// import React from "react"

// const useSwitchDropDown = () => {
//     return(

//     )
// }
// export default useSwitchDropDown
