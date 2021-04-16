import React, { createContext, useState } from "react";
import ProjectsModalContent from "../Components/Projects/ProjectsModal/ProjectsModalContent";
import ModalDialog from "../Modal";

const ModalContext = createContext(null);

const ModalProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState();

  const closeModalDialog = () => {
    setVisible(false);
  };

  const setDialog = (content) => {
    setVisible(true);
    setContent(content);
  };

  return (
    <ModalContext.Provider value={{ setDialog, closeModalDialog }}>
      {children}
      <ModalDialog
        closeModalDialog={closeModalDialog}
        visible={visible}
        content={content}
      />
    </ModalContext.Provider>
  );
};
export const useModal = () => React.useContext(ModalContext);

export const useProjectsDialog = () => {
  const { setDialog } = useModal();

  return () => {
    setDialog(<ProjectsModalContent />);
  };
};

export default ModalProvider;
