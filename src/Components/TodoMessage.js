import React from "react";
import { useTodoActions } from "../Providers/ItemProvider";
import { useModal } from "../Providers/ModalProvider";

const TodoMessage = () => {
  const { closeModalDialog } = useModal();
  const { selectedTodo, removeTodo } = useTodoActions();

  const handleDelete = (id) => {
    removeTodo(id);
    closeModalDialog();
  };

  return (
    <div>
      <div
        style={{
          padding: "20px 24px",
          display: "flex",
          flexDirection: "column",
          width: 400,
        }}
      >
        <div
          style={{
            paddingBottom: 25,
            textAlign: "left",
            color: "grey",
          }}
        >
          <div
            style={{
              height: 28,
              width: 28,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 18,
                width: 18,
                border: "1px solid grey",
                borderRadius: "50%",
                fontSize: 12,
                color: "black",
              }}
            >
              i
            </div>
          </div>
        </div>
        <div
          style={{
            textAlign: "left",
            paddingBottom: 25,
            wordWrap: "break-word",
            fontSize: 13,
            color: "#202020",
          }}
        >
          <span>
            Are you sure you want to delete a{" "}
            <span style={{ fontWeight: 700 }}>
              {selectedTodo && selectedTodo.title}
            </span>
            ?
          </span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "12px 24px",
          backgroundColor: "inherit",
          borderTop: "1px solid #ddd",
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
      >
        <button
          onClick={closeModalDialog}
          style={{
            marginLeft: 10,
            fontWeight: 700,
            fontSize: 13,
            padding: "6px 12px 7px",
            position: "relative",
            display: "inline-block",
            textShadow: "0 1px 0 #fff",
            background: "#f3f3f3",
            whiteSpace: "nowrap",
            border: "1px solid #ddd",
            borderRadius: 3,
            color: "#202020",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          Cancel
        </button>
        <button
          onClick={() => handleDelete(selectedTodo.id)}
          style={{
            backgroundColor: "#dd4b39",
            color: "#fff",
            marginLeft: 10,
            padding: "6px 12px 7px",
            border: "1px solid transparent",
            fontWeight: 700,
            fontSize: 13,
            borderRadius: 3,
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default TodoMessage;
