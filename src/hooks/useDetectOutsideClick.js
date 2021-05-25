import React from "react";

const useDetectOutsideClick = (el, initialState) => {
  const [isActive, setIsActive] = React.useState(initialState);

  React.useEffect(() => {
    const pageClickEvent = (e) => {
      if (el.current !== null && !el.current.contains(e.target)) {
        setIsActive(!isActive);
      }
    };
    if (isActive) {
      window.addEventListener("click", pageClickEvent);
    }
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isActive, el]);
  return [isActive, setIsActive];
};
export default useDetectOutsideClick;

// import React from "react";
// import useVisibiltyState from "./useVisibiltyState";

// const useClickDropDown = () => {
//   //   const { open, handleOpenClose, handleClose } = useVisibiltyState();
//   const ref = React.createRef(null);
//   const [isVisible, setIsVisible] = React.useState(false);

//   // const handleFavoriteProject = (item) => {
//   //   favoriteProjects(item);
//   //   handleClose();
//   // };

//   // const handleRemoveProject = (item) => {
//   //   handleSelected(item);
//   //   handleClose();
//   // };

//   // const handleSelectProject = (item) => {
//   //   handleOpenClose();
//   //   handleSelected(item);
//   // };

//   const handleClickOutside = (event) => {
//     if (ref.current && !ref.current.contains(event.target)) {
//       setIsVisible(false);
//     }
//   };

//   React.useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return function cleanup() {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [ref]);
//   return { ref, isVisible, setIsVisible };
// };
// export default useClickDropDown;

// import React from "react";

// function useVisible() {
//   const [isVisible, setIsVisible] = React.useState(false);
//   const ref = React.useRef(null);

//   React.useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (!ref.current.contains(e.target)) {
//         setIsVisible(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//   }, [ref]);

//   return { ref, isVisible };
// }

// export default useVisible;
