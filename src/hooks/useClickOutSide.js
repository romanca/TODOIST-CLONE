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
