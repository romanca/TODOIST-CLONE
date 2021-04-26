import React from "react";
import PopPop from "react-poppop";
import { useTheme } from "styled-components";

const ModalDialog = ({ visible, closeModalDialog, content }) => {
  const { colors, spaces, radii } = useTheme();

  return (
    <PopPop
      open={visible}
      position="centerCenter"
      contentStyle={{
        borderRadius: radii[0],
        padding: spaces[28],
        backgroundColor: colors["background1"],
      }}
      closeModalDialog={closeModalDialog}
    >
      {content && content}
    </PopPop>
  );
};

export default ModalDialog;
