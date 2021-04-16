import React from "react";
import PopPop from "react-poppop";

const ModalDialog = ({ visible, closeModalDialog, content }) => {
  return (
    <PopPop
      open={visible}
      contentStyle={{
        borderRadius: "10px",
        padding: "0px",
        boxShadow: "0 2px 8px 0 rgb(0 0 0 / 16%)",
        backgroundColor: "#fff",
      }}
      closeModalDialog={closeModalDialog}
    >
      {content && content}
    </PopPop>
  );
};

export default ModalDialog;
